import {
  WebGLRenderer,
  PMREMGenerator,
  Color,
  NeutralToneMapping,
  SRGBColorSpace,
  Vector2,
  ShaderMaterial,
  AdditiveBlending,
  DoubleSide,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const PALETTE = {
  graphite: new Color('#050404'), // brand black
  steel: new Color('#15110d'),
  zirconia: new Color('#eef0ee'),
  uv: new Color('#d9a441'), // gold glow (cure light, seams, rings)
  uvHot: new Color('#ffe0a0'),
  ice: new Color('#f0d9b5'), // champagne (CAD hologram)
  amber: new Color('#e0a43c'),
  resin: new Color('#e9e1cf'),
};

/** Rough device tier so heavy effects can be skipped on small / low-power devices. */
export function detectQuality() {
  const mobile = matchMedia('(max-width: 820px), (pointer: coarse)').matches;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  if (mobile || cores <= 4 || mem <= 4) return 'low';
  return 'high';
}

export function createRenderer(canvas, { quality = 'high', alpha = false } = {}) {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: quality === 'high',
    alpha,
    powerPreference: 'high-performance',
    stencil: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'high' ? 1.75 : 1.35));
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = SRGBColorSpace;
  return renderer;
}

export function makeEnvironment(renderer) {
  const pmrem = new PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  return env;
}

/** Uniform bundle for the "cut" effect: a horizontal plane that hides geometry on one side and glows at the seam. */
export function makeCut({ y = 0, dir = 1, glow = PALETTE.uv, glowAmount = 2.5, width = 0.05, cap = PALETTE.uvHot, capMix = 1 } = {}) {
  return {
    uCutY: { value: y },
    uCutDir: { value: dir },
    uGlowColor: { value: glow.clone() },
    uGlow: { value: glowAmount },
    uGlowWidth: { value: width },
    uCapColor: { value: cap.clone().multiplyScalar(2.2) },
    uCapMix: { value: capMix },
  };
}

/**
 * Patch a built-in material with optional features:
 *  - cut:   { uCutY, uCutDir, ... }  hide fragments on one side of a world-space Y plane, glow at the seam, colour back faces as a solid cap
 *  - char:  { uChar, uMono }          blend from a monochrome resin colour to the vertex-coloured characterisation
 *  - layers:{ uLayerFreq, uLayerAmt } printed layer lines in object space
 */
export function patchMaterial(material, { cut = null, char = null, layers = null } = {}) {
  const defs = [];
  if (cut) defs.push('CUT');
  if (char) defs.push('CHAR');
  if (layers) defs.push('LAYERS');
  const key = defs.join('_');
  material.customProgramCacheKey = () => 'ito_' + key;
  if (cut) material.side = DoubleSide;
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, cut || {}, char || {}, layers || {});
    const header = defs.map((d) => `#define ${d}`).join('\n') + '\n';
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `${header}#include <common>\nvarying vec3 vWPos;\nvarying vec3 vLPos;`
      )
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vec4 _wp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          _wp = instanceMatrix * _wp;
        #endif
        vLPos = transformed;
        vWPos = (modelMatrix * _wp).xyz;`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `${header}#include <common>
        varying vec3 vWPos;
        varying vec3 vLPos;
        #ifdef CUT
          uniform float uCutY; uniform float uCutDir; uniform vec3 uGlowColor; uniform float uGlow; uniform float uGlowWidth; uniform vec3 uCapColor; uniform float uCapMix;
        #endif
        #ifdef CHAR
          uniform float uChar; uniform vec3 uMono;
        #endif
        #ifdef LAYERS
          uniform float uLayerFreq; uniform float uLayerAmt;
        #endif`
      )
      .replace(
        '#include <clipping_planes_fragment>',
        `#include <clipping_planes_fragment>
        #ifdef CUT
          float _cd = (vWPos.y - uCutY) * uCutDir;
          if (_cd < 0.0) discard;
        #endif`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        #ifdef CHAR
          diffuseColor.rgb = mix(uMono, diffuseColor.rgb, uChar);
        #endif
        #ifdef LAYERS
          float _l = fract(vLPos.y * uLayerFreq);
          diffuseColor.rgb *= 1.0 - uLayerAmt * (smoothstep(0.0, 0.18, _l) * smoothstep(0.42, 0.24, _l));
        #endif`
      )
      .replace(
        '#include <opaque_fragment>',
        `#ifdef CUT
          float _g = 1.0 - smoothstep(0.0, uGlowWidth, _cd);
          outgoingLight += uGlowColor * _g * uGlow;
          if (!gl_FrontFacing) outgoingLight = mix(outgoingLight, uCapColor, uCapMix);
        #endif
        #include <opaque_fragment>`
      );
  };
  material.needsUpdate = true;
  return material;
}

/** Fresnel hologram material used for the CAD stage. */
export function makeHoloMaterial({ color = PALETTE.ice, rim = PALETTE.uvHot, opacity = 1 } = {}) {
  return new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    side: DoubleSide,
    uniforms: {
      uColor: { value: color.clone() },
      uRim: { value: rim.clone() },
      uOpacity: { value: opacity },
      uTime: { value: 0 },
      uReveal: { value: 1 },
      uRevealY: { value: new Vector2(-3, 3) },
    },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        #ifdef USE_INSTANCING
          wp = modelMatrix * instanceMatrix * vec4(position,1.0);
        #endif
        vW = wp.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vV = normalize(cameraPosition - wp.xyz);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor; uniform vec3 uRim; uniform float uOpacity; uniform float uTime; uniform float uReveal; uniform vec2 uRevealY;
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main(){
        float ry = mix(uRevealY.y, uRevealY.x, uReveal);
        if (vW.y < ry) discard;
        float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.2);
        float scan = 0.5 + 0.5 * sin(vW.y * 46.0 - uTime * 3.0);
        float edge = 1.0 - smoothstep(0.0, 0.12, vW.y - ry);
        vec3 col = uColor * (0.10 + 0.06 * scan) + uRim * f * 0.9 + uRim * edge * 1.6;
        float a = (0.18 + f * 0.75 + edge) * uOpacity;
        gl_FragColor = vec4(col * a, a);
      }`,
  });
}

export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const seg = (p, a, b) => clamp01((p - a) / (b - a));
export const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const damp = (current, target, lambda, dt) => current + (target - current) * (1 - Math.exp(-lambda * dt));
