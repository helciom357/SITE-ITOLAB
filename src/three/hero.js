/*
 * Hero scene: an intraoral scan becomes a CAD model, then a resin printer builds the
 * provisional full-arch prosthesis layer by layer, it is cleaned, cured and characterised.
 * Driven by a single progress value p in [0, 1].
 */
import {
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  InstancedMesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshBasicMaterial,
  LineBasicMaterial,
  LineSegments,
  EdgesGeometry,
  BoxGeometry,
  PlaneGeometry,
  CylinderGeometry,
  SphereGeometry,
  RingGeometry,
  ConeGeometry,
  CapsuleGeometry,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  ShaderMaterial,
  AdditiveBlending,
  Object3D,
  Vector2,
  Vector3,
  Color,
  Fog,
  DirectionalLight,
  PointLight,
  CanvasTexture,
  SRGBColorSpace,
  CatmullRomCurve3,
  Shape,
  ExtrudeGeometry,
  DoubleSide,
} from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import {
  makeArchTeeth,
  makeGum,
  makeHorseshoe,
  makeSupportGeometry,
  supportPoints,
  samplePoints,
  makeFullArchCurve,
} from './teeth.js';
import {
  PALETTE,
  createRenderer,
  makeEnvironment,
  makeCut,
  patchMaterial,
  makeHoloMaterial,
  seg,
  ease,
  easeOut,
  clamp01,
  damp,
} from './shared.js';

/* Phase boundaries along p */
export const PH = {
  scanEnd: 0.14,
  cadEnd: 0.28,
  matEnd: 0.315,
  descendEnd: 0.345,
  printEnd: 0.8,
  liftEnd: 0.86,
  supportsEnd: 0.9,
  presentEnd: 0.96,
};
export const STEP_BOUNDS = [PH.scanEnd, PH.cadEnd, PH.liftEnd];

const SUPPORT_LEN = 0.75;
const RAFT_Y = -0.07;
const PLATE_TOP = 5.2; // plate bottom height when fully raised / display position
const RESIN_LEVEL = 0.9;
const VAT = { w: 10, d: 7.4, h: 1.6 };
const LAYER = 0.005; // 50 µm

function roundedBoxGeometry(w, h, d, r = 0.12, bevel = 0.04) {
  const s = new Shape();
  const x = -w / 2 + r;
  const y = -d / 2 + r;
  const ww = w - 2 * r;
  const dd = d - 2 * r;
  s.moveTo(x, y);
  s.lineTo(x + ww, y);
  s.quadraticCurveTo(x + ww + r, y, x + ww + r, y + r);
  s.lineTo(x + ww + r, y + dd);
  s.quadraticCurveTo(x + ww + r, y + dd + r, x + ww, y + dd + r);
  s.lineTo(x, y + dd + r);
  s.quadraticCurveTo(x - r, y + dd + r, x - r, y + dd);
  s.lineTo(x - r, y + r);
  s.quadraticCurveTo(x - r, y, x, y);
  const g = new ExtrudeGeometry(s, {
    depth: Math.max(0.001, h - bevel * 2),
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 6,
  });
  g.rotateX(-Math.PI / 2);
  g.translate(0, bevel, 0);
  g.computeBoundingBox();
  const bb = g.boundingBox;
  g.translate(0, -(bb.min.y + bb.max.y) / 2, 0);
  return g;
}

export class HeroScene {
  constructor(canvas, { quality = 'high' } = {}) {
    this.canvas = canvas;
    this.quality = quality;
    this.p = 0;
    this.targetP = 0;
    this.time = 0;
    this.pointer = new Vector2();
    this.pointerS = new Vector2();
    this.visible = true;
    this.shift = { x: 0, y: 0 };
    this.readout = { step: 0, layer: 0, layers: 0, z: 0, points: 0, supports: 0, progress: 0 };

    this.renderer = createRenderer(canvas, { quality });
    this.scene = new Scene();
    this.scene.background = PALETTE.graphite.clone();
    this.scene.fog = new Fog(PALETTE.graphite.clone(), 16, 38);
    this.scene.environment = makeEnvironment(this.renderer);
    this.scene.environmentIntensity = 0.42;

    this.camera = new PerspectiveCamera(34, 1, 0.1, 120);

    this._buildLights();
    this._buildPart();
    this._buildHolo();
    this._buildPrinter();
    this._buildExtras();
    this._buildCameraPath();

    if (quality === 'high') {
      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.bloom = new UnrealBloomPass(new Vector2(512, 512), 0.42, 0.5, 0.9);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
    }
    this.resize();
  }

  /* ------------------------------------------------------------ build ---- */

  _buildLights() {
    const key = new DirectionalLight('#ffffff', 1.15);
    key.position.set(5, 11, 7);
    const rim = new DirectionalLight('#cfd6e2', 0.9);
    rim.position.set(-7, 5, -8);
    const fill = new DirectionalLight('#ffe8d2', 0.18);
    fill.position.set(-6, -2, 6);
    this.scene.add(key, rim, fill);
    this.uvLight = new PointLight(PALETTE.uv, 0, 9, 1.6);
    this.uvLight.position.set(0, 0.3, 0.3);
    this.scanLight = new PointLight('#fff2dc', 0, 4, 2);
    this.cureLight = new PointLight(PALETTE.amber, 0, 9, 1.5);
    this.cureLight.position.set(0, 2.2, 1.2);
    this.scene.add(this.uvLight, this.scanLight, this.cureLight);
  }

  _buildPart() {
    const segU = this.quality === 'high' ? 48 : 32;
    const rows = this.quality === 'high' ? [4, 16, 14] : [3, 12, 10];
    const { geometry: teethGeo, layout } = makeArchTeeth({ down: true, segU, rows });
    const gum = makeGum({ layout, down: true, a: 0.46, bTop: 0.34, cy: 0.18, segS: this.quality === 'high' ? 220 : 140 });
    const crestLocal = gum.cy + gum.bTop; // 0.64
    this.gumOffsetY = RAFT_Y - SUPPORT_LEN - crestLocal;
    this.layout = layout;
    this.archCurve = gum.curve;
    this.zCentre = -0.35;

    teethGeo.translate(0, this.gumOffsetY, this.zCentre);
    gum.geometry.translate(0, this.gumOffsetY, this.zCentre);
    this.teethGeo = teethGeo;
    this.gumGeo = gum.geometry;
    teethGeo.computeBoundingBox();
    this.partBottom = teethGeo.boundingBox.min.y; // ≈ -2.5
    this.partDepth = -this.partBottom + 0.02;
    this.layers = Math.round(this.partDepth / LAYER);

    this.cutPart = makeCut({ y: 0, dir: 1, width: 0.035 });
    this.cutSupports = makeCut({ y: 0, dir: 1, width: 0.035 });
    this.char = { uChar: { value: 0 }, uMono: { value: PALETTE.resin.clone() } };

    this.teethMat = patchMaterial(
      new MeshPhysicalMaterial({ vertexColors: true, roughness: 0.2, clearcoat: 0.8, clearcoatRoughness: 0.12, sheen: 0.0 }),
      { cut: this.cutPart, char: this.char }
    );
    this.gumMat = patchMaterial(
      new MeshPhysicalMaterial({ vertexColors: true, roughness: 0.26, clearcoat: 0.6, clearcoatRoughness: 0.2 }),
      { cut: this.cutPart, char: this.char }
    );
    this.supportMat = patchMaterial(
      new MeshPhysicalMaterial({ color: PALETTE.resin, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.1 }),
      { cut: this.cutSupports }
    );

    this.part = new Group();
    this.teeth = new Mesh(teethGeo, this.teethMat);
    this.gum = new Mesh(gum.geometry, this.gumMat);
    this.part.add(this.teeth, this.gum);

    // supports (comb)
    const curveLocal = makeFullArchCurve(1, 0.02);
    const pts = supportPoints({ curve: curveLocal, count: this.quality === 'high' ? 64 : 44, rows: [-0.22, 0, 0.22], topY: crestLocal });
    this.supportCount = pts.length;
    const supGeo = makeSupportGeometry(0.02);
    this.supports = new InstancedMesh(supGeo, this.supportMat, pts.length);
    this.supportsHolo = new InstancedMesh(supGeo, new MeshBasicMaterial({ color: PALETTE.amber, transparent: true, opacity: 0.5, depthWrite: false }), pts.length);
    this.supportBases = pts.map((p) => new Vector3(p.x, p.y + this.gumOffsetY, p.z + this.zCentre));
    const o = new Object3D();
    this.supportBases.forEach((b, i) => {
      o.position.copy(b);
      o.scale.set(1, RAFT_Y - b.y, 1);
      o.updateMatrix();
      this.supports.setMatrixAt(i, o.matrix);
      this.supportsHolo.setMatrixAt(i, o.matrix);
    });
    this.part.add(this.supports);

    const raftGeo = makeHorseshoe({ curve: curveLocal, inner: 0.5, outer: 0.5, depth: 0.04, bevel: 0.015 });
    raftGeo.translate(0, RAFT_Y - 0.005, this.zCentre);
    this.raft = new Mesh(raftGeo, this.supportMat);
    this.part.add(this.raft);

    // anchors for resin drips: lowest vertices
    const P = teethGeo.attributes.position;
    const low = [];
    for (let i = 0; i < P.count; i++) if (P.getY(i) < this.partBottom + 0.05) low.push(new Vector3(P.getX(i), P.getY(i), P.getZ(i)));
    low.sort((a, b) => a.x - b.x);
    this.dripAnchors = [];
    const step = Math.max(1, Math.floor(low.length / 28));
    for (let i = 0; i < low.length; i += step) this.dripAnchors.push(low[i]);

    this.scene.add(this.part);
  }

  _buildHolo() {
    this.holo = new Group();
    this.holo.position.y = PLATE_TOP;
    this.holoMat = makeHoloMaterial({});
    this.holoTeeth = new Mesh(this.teethGeo, this.holoMat);
    this.holoGum = new Mesh(this.gumGeo, this.holoMat);
    this.holo.add(this.holoTeeth, this.holoGum, this.supportsHolo);

    // point cloud ("intraoral scan")
    const count = this.quality === 'high' ? 26000 : 12000;
    this.pointCount = count;
    const { positions, colors } = samplePoints([this.teethGeo, this.gumGeo], count);
    const samples = [];
    const N = 240;
    for (let i = 0; i <= N; i++) {
      const p = this.archCurve.getPointAt(i / N);
      samples.push([p.x, p.z + this.zCentre]);
    }
    const delay = new Float32Array(count);
    const rand = new Float32Array(count * 3);
    for (let k = 0; k < count; k++) {
      const x = positions[k * 3];
      const z = positions[k * 3 + 2];
      let best = 1e9;
      let bi = 0;
      for (let i = 0; i <= N; i += 2) {
        const dx = samples[i][0] - x;
        const dz = samples[i][1] - z;
        const d2 = dx * dx + dz * dz;
        if (d2 < best) {
          best = d2;
          bi = i;
        }
      }
      delay[k] = bi / N;
      rand[k * 3] = Math.random() * 2 - 1;
      rand[k * 3 + 1] = Math.random() * 2 - 1;
      rand[k * 3 + 2] = Math.random() * 2 - 1;
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(positions, 3));
    g.setAttribute('color', new Float32BufferAttribute(colors, 3));
    g.setAttribute('aDelay', new Float32BufferAttribute(delay, 1));
    g.setAttribute('aRand', new Float32BufferAttribute(rand, 3));
    this.pointsMat = new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      vertexColors: true,
      uniforms: {
        uScan: { value: 0 },
        uFade: { value: 1 },
        uSize: { value: 2.4 * this.renderer.getPixelRatio() },
        uTime: { value: 0 },
        uFlash: { value: PALETTE.ice.clone() },
      },
      vertexShader: /* glsl */ `
        attribute float aDelay; attribute vec3 aRand;
        uniform float uScan; uniform float uSize; uniform float uTime; uniform float uFade;
        varying vec3 vCol; varying float vA; varying float vFlash;
        void main(){
          float appear = smoothstep(aDelay - 0.035, aDelay + 0.005, uScan * 1.04);
          vec3 p = position + aRand * (1.0 - appear) * 0.22;
          p += aRand * 0.004 * sin(uTime * 2.0 + aDelay * 40.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.6 + 0.6 * appear) * (8.0 / -mv.z);
          vCol = color;
          vFlash = 1.0 - smoothstep(0.0, 0.06, uScan * 1.04 - aDelay);
          vA = appear * uFade;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uFlash; varying vec3 vCol; varying float vA; varying float vFlash;
        void main(){
          vec2 c = gl_PointCoord - 0.5; float d = dot(c,c);
          if (d > 0.25) discard;
          float a = smoothstep(0.25, 0.0, d) * vA;
          vec3 col = mix(vCol, uFlash * 1.6, vFlash * 0.85);
          gl_FragColor = vec4(col * a, a);
        }`,
    });
    this.points = new Points(g, this.pointsMat);
    this.points.frustumCulled = false;
    this.holo.add(this.points);

    // slicer build grid at plate level + corner brackets
    const gridMat = new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      side: DoubleSide,
      uniforms: { uOpacity: { value: 0 }, uColor: { value: PALETTE.ice.clone() } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uOpacity; uniform vec3 uColor; varying vec2 vUv;
        float line(float x, float w){ float f = abs(fract(x) - 0.5); return smoothstep(w, 0.0, 0.5 - f); }
        void main(){
          vec2 g = vUv * vec2(18.0, 13.0);
          float l = max(line(g.x, 0.04), line(g.y, 0.04));
          vec2 g2 = vUv * vec2(3.0, 2.0);
          float L = max(line(g2.x, 0.012), line(g2.y, 0.012));
          float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x) * smoothstep(0.0, 0.08, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
          float a = (l * 0.25 + L * 0.5) * edge * uOpacity;
          gl_FragColor = vec4(uColor * a, a);
        }`,
    });
    this.gridMat = gridMat;
    const grid = new Mesh(new PlaneGeometry(9, 6.6), gridMat);
    grid.rotation.x = Math.PI / 2;
    grid.position.y = 0.002;
    this.holo.add(grid);

    const b = [];
    const W = 4.5;
    const D = 3.3;
    const yTop = 0;
    const yBot = this.partBottom - 0.15;
    const arm = 0.6;
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        for (const y of [yTop, yBot]) {
          const x = sx * W;
          const z = sz * D;
          b.push(x, y, z, x - sx * arm, y, z);
          b.push(x, y, z, x, y, z - sz * arm);
          b.push(x, y, z, x, y + (y === yTop ? -arm : arm), z);
        }
    const bg = new BufferGeometry();
    bg.setAttribute('position', new Float32BufferAttribute(b, 3));
    this.bracketMat = new LineBasicMaterial({ color: PALETTE.ice, transparent: true, opacity: 0 });
    this.holo.add(new LineSegments(bg, this.bracketMat));

    // scanner head (intraoral scanner tip + wand)
    const scanner = new Group();
    const body = new Mesh(new CapsuleGeometry(0.15, 1.5, 6, 16), new MeshStandardMaterial({ color: '#1c1c1f', metalness: 0.6, roughness: 0.35 }));
    body.rotation.x = Math.PI / 2;
    body.position.set(0, -0.1, 0.95);
    const tip = new Mesh(new CapsuleGeometry(0.15, 0.45, 6, 12), new MeshStandardMaterial({ color: '#d9dee3', metalness: 0.3, roughness: 0.35 }));
    tip.rotation.x = Math.PI / 2;
    tip.position.set(0, 0, 0.05);
    const win = new Mesh(new PlaneGeometry(0.16, 0.32), new MeshBasicMaterial({ color: PALETTE.ice }));
    win.rotation.x = -Math.PI / 2;
    win.position.set(0, 0.18, 0);
    const beam = new Mesh(
      new ConeGeometry(0.62, 0.9, 32, 1, true),
      new MeshBasicMaterial({ color: PALETTE.ice, transparent: true, opacity: 0.12, blending: AdditiveBlending, depthWrite: false, side: DoubleSide })
    );
    beam.position.y = 0.62;
    beam.rotation.x = Math.PI;
    scanner.add(body, tip, win, beam);
    scanner.scale.setScalar(0.9);
    this.scanner = scanner;
    this.scannerMats = [body.material, tip.material, win.material, beam.material];
    this.scannerMats.forEach((m) => (m.transparent = true));
    this.scene.add(scanner);

    this.scene.add(this.holo);
  }

  _buildPrinter() {
    this.printer = new Group();
    this.cutPrinter = makeCut({ y: -3, dir: -1, width: 0.12, glowAmount: 3, capMix: 0.85 });
    const P = (m) => patchMaterial(m, { cut: this.cutPrinter });

    const housing = P(new MeshStandardMaterial({ color: '#141416', metalness: 0.55, roughness: 0.42 }));
    const satin = P(new MeshStandardMaterial({ color: '#1f1f22', metalness: 0.7, roughness: 0.3 }));
    const alu = P(new MeshStandardMaterial({ color: '#b9bec4', metalness: 0.92, roughness: 0.4 }));
    const aluDark = P(new MeshStandardMaterial({ color: '#8d949b', metalness: 1, roughness: 0.38 }));
    const edge = P(new LineBasicMaterial({ color: '#6b5228', transparent: true, opacity: 0.7 }));
    this.edgeMat = edge;

    const addEdges = (mesh) => {
      const l = new LineSegments(new EdgesGeometry(mesh.geometry, 35), edge);
      mesh.add(l);
    };

    // base housing
    const base = new Mesh(roundedBoxGeometry(13, 2.5, 10.4, 0.5, 0.08), housing);
    base.position.y = -1.32;
    addEdges(base);
    this.printer.add(base);

    // LCD screen (slices)
    this.sliceCanvas = document.createElement('canvas');
    this.sliceCanvas.width = 420;
    this.sliceCanvas.height = 310;
    this.sliceCtx = this.sliceCanvas.getContext('2d');
    this.sliceTex = new CanvasTexture(this.sliceCanvas);
    this.sliceTex.colorSpace = SRGBColorSpace;
    this.lcdMat = P(new MeshStandardMaterial({ color: '#05070a', roughness: 0.15, metalness: 0.2, emissive: new Color('#ffffff'), emissiveMap: this.sliceTex, emissiveIntensity: 0 }));
    const lcd = new Mesh(new PlaneGeometry(VAT.w, VAT.d), this.lcdMat);
    lcd.rotation.x = -Math.PI / 2;
    lcd.position.y = -0.055;
    this.printer.add(lcd);

    // vat frame + glass walls
    const vat = new Group();
    const glass = new MeshPhysicalMaterial({ color: '#dfe7ee', transparent: true, opacity: 0.12, roughness: 0.05, metalness: 0, clearcoat: 1, depthWrite: false });
    this.glassMat = glass;
    patchMaterial(glass, { cut: this.cutPrinter });
    const t = 0.08;
    const wallA = new BoxGeometry(VAT.w + t * 2, VAT.h, t);
    const wallB = new BoxGeometry(t, VAT.h, VAT.d);
    [
      [wallA, 0, VAT.d / 2 + t / 2],
      [wallA, 0, -VAT.d / 2 - t / 2],
      [wallB, VAT.w / 2 + t / 2, 0],
      [wallB, -VAT.w / 2 - t / 2, 0],
    ].forEach(([g, x, z]) => {
      const m = new Mesh(g, glass);
      m.position.set(x, VAT.h / 2, z);
      m.renderOrder = 3;
      vat.add(m);
    });
    const rimGeo = new BoxGeometry(VAT.w + 0.5, 0.12, VAT.d + 0.5);
    const rimEdges = new LineSegments(new EdgesGeometry(rimGeo), edge);
    rimEdges.position.y = VAT.h;
    vat.add(rimEdges);
    const frameEdges = new LineSegments(new EdgesGeometry(new BoxGeometry(VAT.w + 0.16, VAT.h, VAT.d + 0.16)), edge);
    frameEdges.position.y = VAT.h / 2;
    vat.add(frameEdges);
    // side clamps
    [-1, 1].forEach((s) => {
      const c = new Mesh(roundedBoxGeometry(0.9, 0.45, 2.2, 0.12, 0.03), satin);
      c.position.set(s * (VAT.w / 2 + 0.7), 0.2, 0);
      addEdges(c);
      vat.add(c);
    });
    this.printer.add(vat);

    // resin
    this.resinMat = new MeshPhysicalMaterial({ color: '#9c8c6a', transparent: true, opacity: 0.26, roughness: 0.12, clearcoat: 0.4, depthWrite: false });
    patchMaterial(this.resinMat, { cut: this.cutPrinter });
    const resin = new Mesh(new BoxGeometry(VAT.w - 0.02, RESIN_LEVEL, VAT.d - 0.02), this.resinMat);
    resin.position.y = RESIN_LEVEL / 2;
    resin.renderOrder = 2;
    this.printer.add(resin);

    // Z tower
    const tower = new Mesh(roundedBoxGeometry(2.6, 14, 1.4, 0.2, 0.05), housing);
    tower.position.set(0, 4.4, -5.9);
    addEdges(tower);
    this.printer.add(tower);
    [-0.8, 0.8].forEach((x) => {
      const rail = new Mesh(new BoxGeometry(0.22, 13, 0.18), alu);
      rail.position.set(x, 4.5, -5.12);
      this.printer.add(rail);
    });
    const screw = new Mesh(new CylinderGeometry(0.09, 0.09, 13, 12), aluDark);
    screw.position.set(0, 4.5, -5.0);
    this.printer.add(screw);

    // carriage, arm and build plate (move together)
    this.carriage = new Group();
    const block = new Mesh(roundedBoxGeometry(2.4, 1.2, 0.8, 0.12, 0.04), satin);
    block.position.set(0, 0.95, -4.75);
    addEdges(block);
    const armMesh = new Mesh(roundedBoxGeometry(1.1, 0.42, 4.6, 0.12, 0.03), satin);
    armMesh.position.set(0, 1.0, -2.45);
    addEdges(armMesh);
    const holder = new Mesh(roundedBoxGeometry(2.2, 0.75, 1.6, 0.14, 0.04), alu);
    holder.position.set(0, 0.62, -0.1);
    const knob = new Mesh(new CylinderGeometry(0.22, 0.22, 0.35, 20), aluDark);
    knob.position.set(0, 1.15, -0.1);
    const plate = new Mesh(roundedBoxGeometry(9, 0.22, 6.6, 0.18, 0.04), alu);
    plate.position.set(0, 0.11, 0);
    addEdges(plate);
    this.carriage.add(block, armMesh, holder, knob, plate);
    this.printer.add(this.carriage);

    // floor
    const floor = new Mesh(
      new PlaneGeometry(80, 80),
      new MeshStandardMaterial({ color: '#0a0807', roughness: 0.75, metalness: 0.2 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.58;
    this.floor = floor;
    this.scene.add(floor);
    this.scene.add(this.printer);
  }

  _buildExtras() {
    // resin drips
    this.dripCount = 36;
    this.drips = new InstancedMesh(
      new SphereGeometry(1, 10, 8),
      new MeshPhysicalMaterial({ color: '#efe6d2', roughness: 0.05, clearcoat: 1, transmission: 0, transparent: true, opacity: 0.92 }),
      this.dripCount
    );
    this.drips.frustumCulled = false;
    this.dripState = Array.from({ length: this.dripCount }, () => ({ active: false, t: 0, y: 0, v: 0, a: 0, wait: Math.random() * 2 }));
    this.scene.add(this.drips);

    // cure station ring (LED dots + turntable)
    const ring = new Group();
    const dots = [];
    const n = 48;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      dots.push(Math.cos(a) * 3.6, 0, Math.sin(a) * 3.6);
    }
    const dg = new BufferGeometry();
    dg.setAttribute('position', new Float32BufferAttribute(dots, 3));
    this.ringDotsMat = new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      uniforms: { uOpacity: { value: 0 }, uColor: { value: PALETTE.amber.clone() }, uSize: { value: 7 * this.renderer.getPixelRatio() } },
      vertexShader: `uniform float uSize; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = uSize * (8.0 / -mv.z); }`,
      fragmentShader: `uniform float uOpacity; uniform vec3 uColor; void main(){ vec2 c = gl_PointCoord-0.5; float d = dot(c,c); if(d>0.25) discard; float a = smoothstep(0.25,0.0,d)*uOpacity; gl_FragColor = vec4(uColor*a*2.0, a); }`,
    });
    const ringDots = new Points(dg, this.ringDotsMat);
    this.turntableMat = new MeshStandardMaterial({ color: '#1a1714', metalness: 0.8, roughness: 0.25, transparent: true, opacity: 0 });
    const table = new Mesh(new CylinderGeometry(2.6, 2.7, 0.14, 64), this.turntableMat);
    table.position.y = -0.08;
    this.turntableLine = new Mesh(
      new RingGeometry(2.62, 2.7, 96),
      new MeshBasicMaterial({ color: PALETTE.amber, transparent: true, opacity: 0, side: DoubleSide, blending: AdditiveBlending, depthWrite: false })
    );
    this.turntableLine.rotation.x = -Math.PI / 2;
    this.turntableLine.position.y = 0.0;
    ring.add(ringDots, table, this.turntableLine);
    ring.position.set(0, 2.25, 1.2);
    this.cureRing = ring;
    this.scene.add(ring);
  }

  _buildCameraPath() {
    const K = [
      [0.0, [1.0, 2.4, 10.2], [0, 3.55, 0.3]],
      [0.14, [-2.8, 2.6, 9.6], [0, 3.6, 0.3]],
      [0.28, [-4.6, 4.2, 8.8], [0, 3.45, 0.2]],
      [0.345, [9.5, 7.8, 19.5], [0, 1.2, -0.4]],
      [0.5, [6.4, 2.1, 12.4], [0, 1.0, 0]],
      [0.8, [4.8, 2.7, 10.8], [0, 1.9, 0.2]],
      [0.86, [3.4, 3.6, 11.2], [0, 3.1, 0.3]],
      [0.95, [0.0, 3.0, 10.6], [0, 3.4, 1.2]],
      [1.0, [0.0, 2.85, 10.0], [0, 3.4, 1.2]],
    ];
    this.camKeys = K.map((k) => k[0]);
    this.camPos = new CatmullRomCurve3(K.map((k) => new Vector3(...k[1])), false, 'centripetal');
    this.camTgt = new CatmullRomCurve3(K.map((k) => new Vector3(...k[2])), false, 'centripetal');
    this._tmpPos = new Vector3();
    this._tmpTgt = new Vector3();
  }

  _camParam(p) {
    const k = this.camKeys;
    for (let i = 0; i < k.length - 1; i++) {
      if (p <= k[i + 1]) {
        const t = (p - k[i]) / (k[i + 1] - k[i]);
        return (i + ease(clamp01(t))) / (k.length - 1);
      }
    }
    return 1;
  }

  /* ------------------------------------------------------------ public ---- */

  setProgress(p) {
    this.targetP = clamp01(p);
  }

  setPointer(x, y) {
    this.pointer.set(x, y);
  }

  setShift(x, y) {
    this.shift.x = x;
    this.shift.y = y;
    this._applyView();
  }

  resize() {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.w = w;
    this.h = h;
    this.renderer.setSize(w, h, false);
    if (this.composer) {
      this.composer.setSize(w, h);
      this.bloom.resolution.set(w / 2, h / 2);
    }
    this.camera.aspect = w / h;
    // narrow screens: wider fov so the arch fits
    this.camera.fov = w / h < 0.8 ? 46 : w / h < 1.2 ? 40 : 34;
    this._applyView();
  }

  _applyView() {
    if (!this.w) return;
    const { w, h } = this;
    this.camera.setViewOffset(w, h, -this.shift.x * w, -this.shift.y * h, w, h);
    this.camera.updateProjectionMatrix();
  }

  /* ------------------------------------------------------------ update ---- */

  update(dt, time) {
    this.time = time;
    this.p = damp(this.p, this.targetP, 4.2, dt);
    if (Math.abs(this.p - this.targetP) < 1e-5) this.p = this.targetP;
    const p = this.p;
    this.pointerS.x = damp(this.pointerS.x, this.pointer.x, 3, dt);
    this.pointerS.y = damp(this.pointerS.y, this.pointer.y, 3, dt);

    /* --- scan --- */
    const scan = seg(p, 0.01, PH.scanEnd - 0.015);
    this.pointsMat.uniforms.uScan.value = scan;
    this.pointsMat.uniforms.uTime.value = time;
    const cad = seg(p, PH.scanEnd, PH.cadEnd);
    const mat = seg(p, PH.cadEnd, PH.matEnd);
    this.pointsMat.uniforms.uFade.value = 1 - seg(p, PH.scanEnd + 0.02, PH.scanEnd + 0.09) * 0.92 - mat * 0.08;
    this.points.visible = p < PH.matEnd;

    const scannerVis = seg(p, 0.0, 0.025) * (1 - seg(p, PH.scanEnd - 0.03, PH.scanEnd));
    this.scanner.visible = scannerVis > 0.001;
    if (this.scanner.visible) {
      const u = clamp01(scan * 1.02);
      const cp = this.archCurve.getPointAt(u);
      const tg = this.archCurve.getTangentAt(u);
      this.scanner.position.set(cp.x, PLATE_TOP + this.partBottom - 0.45 + Math.sin(time * 3) * 0.03, cp.z + this.zCentre);
      this.scanner.lookAt(this.scanner.position.x * 1.25, this.scanner.position.y - 2.2, this.scanner.position.z + 2.6);
      this.scannerMats.forEach((m, i) => (m.opacity = (i === 3 ? 0.08 : 1) * scannerVis));
      this.scanLight.position.copy(this.scanner.position).add(new Vector3(0, 0.6, 0));
      this.scanLight.intensity = 2.2 * scannerVis;
    } else this.scanLight.intensity = 0;

    /* --- CAD hologram --- */
    const holoIn = seg(p, PH.scanEnd - 0.01, PH.scanEnd + 0.07);
    const holoOut = seg(p, PH.cadEnd + 0.005, PH.matEnd + 0.01);
    this.holoMat.uniforms.uReveal.value = easeOut(holoIn);
    this.holoMat.uniforms.uRevealY.value.set(PLATE_TOP + this.partBottom - 0.1, PLATE_TOP + 0.1);
    this.holoMat.uniforms.uOpacity.value = holoIn * (1 - holoOut);
    this.holoMat.uniforms.uTime.value = time;
    this.holoTeeth.visible = this.holoGum.visible = holoIn > 0 && holoOut < 1;
    // supports grow
    const grow = seg(p, PH.scanEnd + 0.05, PH.cadEnd - 0.01);
    this.supportsHolo.visible = grow > 0 && holoOut < 1;
    if (this.supportsHolo.visible) {
      const o = this._o || (this._o = new Object3D());
      const n = this.supportBases.length;
      this.supportBases.forEach((b, i) => {
        const g = clamp01(grow * 1.6 - (i / n) * 0.6);
        o.position.copy(b);
        o.scale.set(1, Math.max(0.0001, (RAFT_Y - b.y) * easeOut(g)), 1);
        o.updateMatrix();
        this.supportsHolo.setMatrixAt(i, o.matrix);
      });
      this.supportsHolo.instanceMatrix.needsUpdate = true;
      this.supportsHolo.material.opacity = 0.5 * (1 - holoOut);
    }
    const gridO = seg(p, PH.scanEnd + 0.03, PH.scanEnd + 0.09) * (1 - holoOut);
    this.gridMat.uniforms.uOpacity.value = gridO;
    this.bracketMat.opacity = gridO * 0.7;

    /* --- printer materialise / dematerialise --- */
    const matIn = seg(p, PH.cadEnd - 0.01, PH.matEnd + 0.02);
    const matOut = seg(p, PH.supportsEnd, PH.presentEnd + 0.02);
    // sweeping bottom → top to materialise, then top → bottom to leave
    this.cutPrinter.uCutY.value = matOut > 0 ? 12 - ease(matOut) * 15 : -3 + ease(matIn) * 15;
    this.printer.visible = matIn > 0.0001 && matOut < 0.999;
    this.floor.visible = this.printer.visible;

    /* --- plate motion --- */
    const descend = seg(p, PH.matEnd, PH.descendEnd);
    const print = seg(p, PH.descendEnd, PH.printEnd);
    const lift = seg(p, PH.printEnd, PH.liftEnd);
    let plateY;
    if (p < PH.matEnd) plateY = PLATE_TOP;
    else if (p < PH.descendEnd) plateY = PLATE_TOP * (1 - ease(descend));
    else if (p < PH.printEnd) plateY = this.partDepth * print;
    else plateY = this.partDepth + (PLATE_TOP - this.partDepth) * ease(lift);

    // exposure cycle + peel
    const printing = p > PH.descendEnd && p < PH.printEnd;
    const cyc = (time % 0.9) / 0.9;
    const uvOn = printing ? (cyc < 0.68 ? 1 : 0) : 0;
    const peel = printing ? Math.sin(clamp01((cyc - 0.68) / 0.32) * Math.PI) * 0.07 : 0;
    this.carriage.position.y = plateY + peel;

    /* --- part --- */
    const supportsGone = seg(p, PH.liftEnd, PH.supportsEnd);
    const present = ease(seg(p, PH.supportsEnd, PH.presentEnd));
    this.part.visible = p >= PH.descendEnd - 0.002;
    const spin = present * Math.sin(time * 0.35) * 0.4;
    this.part.position.set(0, plateY + peel - present * 0.15, present * 1.2);
    this.part.rotation.set(-present * 0.12, spin, 0);
    this.cutPart.uCutY.value = peel;
    const capCol = PALETTE.uvHot;
    this.cutPart.uCapColor.value.copy(uvOn ? capCol : PALETTE.resin).multiplyScalar(uvOn ? 2.4 : 0.85);
    this.cutPart.uGlow.value = uvOn ? 2.6 : 0.2;
    this.cutSupports.uCapColor.value.copy(this.cutPart.uCapColor.value);
    this.cutSupports.uGlow.value = this.cutPart.uGlow.value;
    if (supportsGone > 0) {
      // dissolve supports from the plate down to the flange
      this.cutSupports.uCutDir.value = -1;
      this.cutSupports.uCutY.value = this.part.position.y + 0.05 - supportsGone * (SUPPORT_LEN + 0.16);
      this.cutSupports.uCapColor.value.copy(PALETTE.uvHot).multiplyScalar(2.2);
      this.cutSupports.uGlow.value = 2.5;
    } else {
      this.cutSupports.uCutDir.value = 1;
      this.cutSupports.uCutY.value = peel;
    }
    this.supports.visible = this.raft.visible = supportsGone < 1;

    // finish: wet resin → cured & characterised
    const charT = ease(seg(p, PH.presentEnd - 0.03, 1.0));
    this.char.uChar.value = charT;
    this.teethMat.roughness = 0.2 + charT * 0.1;
    this.teethMat.clearcoat = 0.8 - charT * 0.35;
    this.gumMat.roughness = 0.26 + charT * 0.2;
    this.gumMat.clearcoat = 0.6 - charT * 0.3;

    /* --- UV light + LCD slices --- */
    this.uvLight.intensity = (printing ? 5.5 * uvOn + 0.6 : 0) * this.printer.visible;
    this.lcdMat.emissiveIntensity = printing ? 0.25 + uvOn * 1.4 : 0;
    const layer = printing ? Math.max(1, Math.round((plateY / this.partDepth) * this.layers)) : p >= PH.printEnd ? this.layers : 0;
    if (printing && layer !== this._lastLayer) {
      this._drawSlice(-plateY);
      this._lastLayer = layer;
    }

    /* --- drips --- */
    this._updateDrips(dt, p, plateY);

    /* --- cure ring --- */
    const cure = seg(p, PH.supportsEnd + 0.02, PH.presentEnd) * (1 - seg(p, 0.985, 1.0) * 0.6);
    this.cureRing.visible = cure > 0.001;
    this.ringDotsMat.uniforms.uOpacity.value = cure;
    this.turntableMat.opacity = cure * 0.9;
    this.turntableLine.material.opacity = cure * 0.8;
    this.cureRing.rotation.y = time * 0.4;
    this.cureLight.intensity = cure * 6;

    /* --- camera --- */
    const u = this._camParam(p);
    this.camPos.getPoint(u, this._tmpPos);
    this.camTgt.getPoint(u, this._tmpTgt);
    // narrow (portrait) screens: dolly out so the arch stays in frame
    const aspect = this.w / this.h;
    if (aspect < 1) {
      const k = 1 + (1 - aspect) * 0.75;
      this._tmpPos.sub(this._tmpTgt).multiplyScalar(k).add(this._tmpTgt);
    }
    const breathe = Math.sin(time * 0.4) * 0.12;
    this._tmpPos.x += this.pointerS.x * 0.9 + breathe;
    this._tmpPos.y += this.pointerS.y * 0.5 + Math.cos(time * 0.33) * 0.08;
    this.camera.position.copy(this._tmpPos);
    this.camera.lookAt(this._tmpTgt);

    /* --- readout --- */
    const r = this.readout;
    r.step = p < STEP_BOUNDS[0] ? 0 : p < STEP_BOUNDS[1] ? 1 : p < STEP_BOUNDS[2] ? 2 : 3;
    r.points = Math.round(this.pointCount * clamp01(scan));
    r.supports = Math.round(this.supportCount * grow);
    r.layer = layer;
    r.layers = this.layers;
    r.z = Math.max(0, (p < PH.descendEnd ? 0 : Math.min(plateY, this.partDepth)) * 10);
    r.progress = p;
    r.uvOn = uvOn;
  }

  _updateDrips(dt, p, plateY) {
    const wet = seg(plateY + this.partBottom, RESIN_LEVEL + 0.05, RESIN_LEVEL + 0.4) * (1 - seg(p, PH.liftEnd + 0.005, PH.supportsEnd));
    const o = this._od || (this._od = new Object3D());
    const tmp = this._vd || (this._vd = new Vector3());
    let any = false;
    this.dripState.forEach((d, i) => {
      if (d.active && p > PH.supportsEnd) d.active = false;
      if (!d.active) {
        d.wait -= dt;
        if (wet > 0.05 && d.wait <= 0 && p > PH.printEnd) {
          d.active = true;
          d.t = 0;
          d.v = 0;
          d.a = (Math.random() * this.dripAnchors.length) | 0;
          d.size = 0.025 + Math.random() * 0.025;
          d.fall = false;
        }
      }
      if (d.active) {
        any = true;
        tmp.copy(this.dripAnchors[d.a]);
        this.part.localToWorld(tmp);
        if (!d.fall) {
          d.t += dt * (0.8 + Math.random() * 0.4);
          const g = Math.min(1, d.t / 0.9);
          o.position.set(tmp.x, tmp.y - d.size * g * 1.6, tmp.z);
          o.scale.set(d.size * g, d.size * (1 + g * 1.8), d.size * g);
          if (d.t > 0.9) {
            d.fall = true;
            d.y = o.position.y;
          }
        } else {
          d.v += 9.8 * dt * 0.6;
          d.y -= d.v * dt;
          o.position.set(tmp.x, d.y, tmp.z);
          o.scale.set(d.size * 0.85, d.size * 1.7, d.size * 0.85);
          if (d.y < RESIN_LEVEL) {
            d.active = false;
            d.wait = 0.2 + Math.random() * (1.6 / Math.max(wet, 0.1));
          }
        }
      } else {
        o.scale.setScalar(0);
        o.position.set(0, -50, 0);
      }
      o.updateMatrix();
      this.drips.setMatrixAt(i, o.matrix);
    });
    this.drips.visible = any;
    this.drips.instanceMatrix.needsUpdate = true;
  }

  _drawSlice(localY) {
    const ctx = this.sliceCtx;
    const W = this.sliceCanvas.width;
    const H = this.sliceCanvas.height;
    const sx = W / VAT.w;
    const sz = H / VAT.d;
    const X = (x) => W / 2 + x * sx;
    const Z = (z) => H / 2 + z * sz;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#ffe3a8';
    ctx.strokeStyle = '#ffe3a8';
    ctx.lineCap = 'round';
    const pathArch = () => {
      ctx.beginPath();
      for (let i = 0; i <= 80; i++) {
        const pt = this.archCurve.getPointAt(i / 80);
        const x = X(pt.x);
        const z = Z(pt.z + this.zCentre);
        if (i === 0) ctx.moveTo(x, z);
        else ctx.lineTo(x, z);
      }
    };
    if (localY > RAFT_Y - 0.02) {
      pathArch();
      ctx.lineWidth = 1.0 * sx;
      ctx.stroke();
    }
    // supports
    this.supportBases.forEach((b) => {
      if (localY < RAFT_Y && localY > b.y - 0.06) {
        ctx.beginPath();
        ctx.arc(X(b.x), Z(b.z), 2, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    // flange
    const gy = localY - this.gumOffsetY; // gum-local height
    const cy = 0.18;
    const bb = gy > cy ? 0.34 : 0.38;
    const e = (gy - cy) / bb;
    if (Math.abs(e) < 1) {
      const half = 0.46 * Math.pow(1 - Math.pow(Math.abs(e), 2.5), 0.4);
      pathArch();
      ctx.lineWidth = Math.max(1, half * 2 * sx);
      ctx.stroke();
    }
    // crowns (hanging, crown coordinate grows downwards)
    const yc = -(localY - this.gumOffsetY);
    this.layout.teeth.forEach((t) => {
      if (yc < 0 || yc > t.h) return;
      const s = yc / t.h;
      const k = s < 0.7 ? 0.8 + 0.25 * Math.sin((s / 0.7) * Math.PI * 0.6) : Math.sqrt(Math.max(0, 1 - (s - 0.7) / 0.3)) * 0.9;
      const ang = Math.atan2(t.tangent.z, t.tangent.x);
      ctx.save();
      ctx.translate(X(t.pos.x), Z(t.pos.z + this.zCentre));
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.max(0.5, (t.w / 2) * k * sx), Math.max(0.5, (t.d / 2) * k * sz), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    this.sliceTex.needsUpdate = true;
  }

  render() {
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.renderer.dispose();
  }
}
