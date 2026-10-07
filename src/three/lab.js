/*
 * "Soluções" viewer: one model per solution, switched with a scanning sweep.
 */
import {
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshBasicMaterial,
  DirectionalLight,
  PointLight,
  Color,
  Vector2,
  Vector3,
  Box3,
  Sphere,
  Shape,
  Path,
  ExtrudeGeometry,
  CylinderGeometry,
  SphereGeometry,
  LatheGeometry,
  RingGeometry,
  PlaneGeometry,
  CanvasTexture,
  AdditiveBlending,
  DoubleSide,
  SRGBColorSpace,
} from 'three';
import { makeTooth, makeArchTeeth, makeGum, makeHorseshoe, makeFullArchCurve, UPPER } from './teeth.js';
import { PALETTE, createRenderer, makeEnvironment, makeCut, patchMaterial, damp, ease, clamp01 } from './shared.js';

const FIT_RADIUS = 2.75;

function implantGeometry() {
  const pts = [];
  pts.push(new Vector2(0.0, -1.3));
  pts.push(new Vector2(0.1, -1.28));
  for (let i = 0; i < 11; i++) {
    const y = -1.2 + i * 0.1;
    pts.push(new Vector2(0.15, y));
    pts.push(new Vector2(0.19, y + 0.05));
  }
  pts.push(new Vector2(0.19, -0.05));
  pts.push(new Vector2(0.21, 0.0));
  pts.push(new Vector2(0.16, 0.05));
  pts.push(new Vector2(0.12, 0.35));
  pts.push(new Vector2(0.0, 0.36));
  return new LatheGeometry(pts, 28);
}

function softShadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, 'rgba(0,0,0,0.55)');
  grd.addColorStop(0.55, 'rgba(0,0,0,0.18)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

export class LabScene {
  constructor(canvas, { quality = 'high' } = {}) {
    this.canvas = canvas;
    this.quality = quality;
    this.renderer = createRenderer(canvas, { quality, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.scene = new Scene();
    this.scene.environment = makeEnvironment(this.renderer);
    this.scene.environmentIntensity = 0.5;
    this.camera = new PerspectiveCamera(30, 1, 0.1, 100);
    this.camera.position.set(0, 2.6, 12);
    this.camera.lookAt(0, 0, 0);

    const key = new DirectionalLight('#ffffff', 1.4);
    key.position.set(4, 8, 6);
    const rim = new DirectionalLight('#e8c48a', 1.0);
    rim.position.set(-6, 3, -6);
    const warm = new PointLight('#ff6a4d', 0, 12, 1.5);
    warm.position.set(3, -1, -3);
    this.warm = warm;
    this.scene.add(key, rim, warm);

    this.stage = new Group();
    this.scene.add(this.stage);

    const shadow = new Mesh(new PlaneGeometry(7.5, 7.5), new MeshBasicMaterial({ map: softShadowTexture(), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -2.05;
    this.scene.add(shadow);
    const ring = new Mesh(
      new RingGeometry(3.05, 3.09, 128),
      new MeshBasicMaterial({ color: PALETTE.uv, transparent: true, opacity: 0.55, side: DoubleSide, blending: AdditiveBlending, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -2.04;
    this.scene.add(ring);
    this.platformRing = ring;

    // sweep ring shown at the cut height during transitions
    this.sweep = new Mesh(
      new RingGeometry(3.1, 3.18, 128, 1),
      new MeshBasicMaterial({ color: PALETTE.uv, transparent: true, opacity: 0, side: DoubleSide, blending: AdditiveBlending, depthWrite: false })
    );
    this.sweep.rotation.x = -Math.PI / 2;
    this.scene.add(this.sweep);

    this.models = [];
    this.builders = [
      () => this._zirconia(),
      () => this._disilicate(),
      () => this._pmma(),
      () => this._protocol(),
      () => this._splint(),
      () => this._printedModel(),
    ];
    this.current = -1;
    this.target = 0;
    this.transition = null;
    this.rotY = 0;
    this.velY = 0;
    this.dragging = false;
    this.pointer = new Vector2();
    this.pointerS = new Vector2();
    this._bindDrag();
    this.resize();
    this._activate(0, true);
  }

  /* ---------------------------------------------------------- models --- */

  _wrap(group, { yLift = 0 } = {}) {
    // normalise size + centre on the platform
    const box = new Box3().setFromObject(group);
    const sphere = box.getBoundingSphere(new Sphere());
    const s = FIT_RADIUS / sphere.radius;
    group.scale.setScalar(s);
    const box2 = new Box3().setFromObject(group);
    const c = box2.getCenter(new Vector3());
    group.position.sub(c);
    group.position.y += (box2.max.y - box2.min.y) / 2 - 2.0 + yLift;
    const holder = new Group();
    holder.add(group);
    return holder;
  }

  _mat(params, cut, extra = {}) {
    return patchMaterial(new MeshPhysicalMaterial(params), { cut, ...extra });
  }

  _zirconia() {
    const cut = makeCut({ y: 10, dir: 1, width: 0.08 });
    const char = { uChar: { value: 0.35 }, uMono: { value: new Color('#f6f4ef') } };
    const m = this._mat({ vertexColors: true, roughness: 0.34, clearcoat: 0.55, clearcoatRoughness: 0.25 }, cut, { char });
    const g = new Group();
    const units = [
      { type: 'premolar', w: 0.72, d: 0.92, h: 0.84, x: -1.0 },
      { type: 'molar', w: 1.04, d: 1.08, h: 0.76, x: 0.0 },
      { type: 'molar', w: 1.0, d: 1.08, h: 0.74, x: 1.06 },
    ];
    units.forEach((u) => {
      const mesh = new Mesh(makeTooth({ ...u, segU: 96, rows: [6, 26, 24] }), m);
      mesh.position.x = u.x;
      g.add(mesh);
    });
    [-0.5, 0.53].forEach((x) => {
      const c = new Mesh(new SphereGeometry(0.26, 24, 16), m);
      c.scale.set(1, 0.85, 1.25);
      c.position.set(x, 0.42, 0);
      g.add(c);
    });
    g.rotation.set(0.32, -0.35, 0);
    return { group: this._wrap(g, { yLift: 0.5 }), cuts: [cut], warm: 1 };
  }

  _disilicate() {
    const cut = makeCut({ y: 10, dir: 1, width: 0.08 });
    const m = this._mat(
      {
        vertexColors: true,
        roughness: 0.1,
        transmission: this.quality === 'high' ? 0.45 : 0,
        thickness: 0.8,
        ior: 1.55,
        attenuationColor: new Color('#f0e2c9'),
        attenuationDistance: 2.6,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        specularIntensity: 1,
      },
      cut
    );
    const g = new Group();
    const teeth = [UPPER[1], UPPER[0], UPPER[0], UPPER[1]];
    let x = -(teeth.reduce((a, t) => a + t.w, 0) + 0.06 * 3) / 2;
    teeth.forEach((t, i) => {
      const mesh = new Mesh(makeTooth({ type: 'incisor', w: t.w, d: t.d, h: t.h, segU: 96, rows: [6, 28, 22] }), m);
      const cx = x + t.w / 2;
      x += t.w + 0.06;
      mesh.position.set(cx, 0, -Math.abs(cx) * 0.38);
      mesh.rotation.y = -cx * 0.42;
      g.add(mesh);
    });
    g.rotation.set(0.12, 0, 0);
    return { group: this._wrap(g, { yLift: 0.35 }), cuts: [cut] };
  }

  _pmma() {
    const cut = makeCut({ y: 10, dir: 1, width: 0.08 });
    const discMat = this._mat({ color: '#e7d5b5', roughness: 0.42, clearcoat: 0.25, sheen: 0.4, sheenColor: new Color('#fff1dc') }, cut);
    const crownMat = this._mat({ vertexColors: true, roughness: 0.3, clearcoat: 0.6 }, cut);
    const g = new Group();
    const R = 2.4;
    const T = 1.05;
    const crowns = [
      { type: 'molar', w: 1.02, d: 1.08, h: 0.74, x: -0.95, z: -0.55 },
      { type: 'premolar', w: 0.72, d: 0.9, h: 0.82, x: 0.45, z: -0.85 },
      { type: 'incisor', w: 0.86, d: 0.7, h: 1.0, x: 0.9, z: 0.6 },
      { type: 'molar', w: 1.0, d: 1.06, h: 0.72, x: -0.55, z: 0.95 },
    ];
    const shape = new Shape();
    shape.absarc(0, 0, R, 0, Math.PI * 2, false);
    crowns.forEach((c) => {
      const h = new Path();
      h.absellipse(c.x, -c.z, c.w / 2 + 0.16, c.d / 2 + 0.16, 0, Math.PI * 2, true);
      shape.holes.push(h);
    });
    const disc = new ExtrudeGeometry(shape, { depth: T, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2, curveSegments: 64 });
    disc.rotateX(-Math.PI / 2);
    g.add(new Mesh(disc, discMat));
    // holder shoulder
    const sh = new Shape();
    sh.absarc(0, 0, R + 0.16, 0, Math.PI * 2, false);
    const inner = new Path();
    inner.absarc(0, 0, R - 0.02, 0, Math.PI * 2, true);
    sh.holes.push(inner);
    const shoulder = new ExtrudeGeometry(sh, { depth: 0.22, bevelEnabled: false, curveSegments: 64 });
    shoulder.rotateX(-Math.PI / 2);
    shoulder.translate(0, T * 0.55, 0);
    g.add(new Mesh(shoulder, discMat));
    crowns.forEach((c, i) => {
      const mesh = new Mesh(makeTooth({ ...c, segU: 72, rows: [5, 20, 18] }), crownMat);
      mesh.position.set(c.x, (T - c.h) / 2, c.z);
      mesh.rotation.y = i * 0.7;
      g.add(mesh);
      // sprues
      [0, Math.PI].forEach((a) => {
        const sp = new Mesh(new CylinderGeometry(0.05, 0.05, 0.22, 10), discMat);
        sp.rotation.z = Math.PI / 2;
        sp.position.set(c.x + Math.cos(a) * (c.w / 2 + 0.06), T / 2, c.z);
        g.add(sp);
      });
    });
    g.rotation.set(0.95, 0.3, 0);
    return { group: this._wrap(g, { yLift: 0.4 }), cuts: [cut] };
  }

  _protocol() {
    const cut = makeCut({ y: 10, dir: 1, width: 0.08 });
    const { geometry: teethGeo, layout } = makeArchTeeth({ down: true, segU: 48, rows: [4, 16, 14] });
    const gum = makeGum({ layout, down: true, a: 0.5, bTop: 0.42, cy: 0.2 });
    const tm = this._mat({ vertexColors: true, roughness: 0.24, clearcoat: 0.7, clearcoatRoughness: 0.15 }, cut);
    const gm = this._mat({ vertexColors: true, roughness: 0.38, clearcoat: 0.35 }, cut);
    const ti = this._mat({ color: '#9aa3ab', metalness: 1, roughness: 0.32 }, cut);
    const g = new Group();
    g.add(new Mesh(teethGeo, tm), new Mesh(gum.geometry, gm));
    const imp = implantGeometry();
    const curve = gum.curve;
    [0.12, 0.36, 0.64, 0.88].forEach((u, i) => {
      const p = curve.getPointAt(u);
      const m = new Mesh(imp, ti);
      m.position.set(p.x, 0.62 + 0.55, p.z);
      m.rotation.z = Math.PI + (i === 0 ? -0.35 : i === 3 ? 0.35 : 0);
      m.scale.setScalar(0.9);
      g.add(m);
    });
    g.rotation.set(-0.42, 0, 0);
    return { group: this._wrap(g, { yLift: 0.2 }), cuts: [cut] };
  }

  _splint() {
    const cut = makeCut({ y: 10, dir: 1, width: 0.08 });
    const { geometry: teethGeo, layout } = makeArchTeeth({ down: false, segU: 40, rows: [3, 14, 12] });
    const gum = makeGum({ layout, down: false, a: 0.5, bTop: 0.36, cy: 0.18 });
    const stone = this._mat({ color: '#d9dadb', roughness: 0.7 }, cut);
    const stoneGum = this._mat({ color: '#c9cbcd', roughness: 0.75 }, cut);
    const clear = this._mat(
      {
        color: '#ffffff',
        roughness: 0.03,
        transmission: this.quality === 'high' ? 0.92 : 0,
        transparent: this.quality !== 'high',
        opacity: this.quality === 'high' ? 1 : 0.4,
        thickness: 0.15,
        ior: 1.49,
        clearcoat: 1,
        attenuationColor: new Color('#e3eeff'),
        attenuationDistance: 12,
      },
      cut
    );
    const g = new Group();
    g.add(new Mesh(teethGeo, stone), new Mesh(gum.geometry, stoneGum));
    const base = makeHorseshoe({ curve: makeFullArchCurve(1, 0.02), inner: 0.75, outer: 0.75, depth: 0.55, bevel: 0.08 });
    base.translate(0, -1.05, 0);
    g.add(new Mesh(base, stoneGum));
    const splint = makeHorseshoe({ curve: makeFullArchCurve(1, 0.02), inner: 0.62, outer: 0.66, depth: 0.22, bevel: 0.12 });
    const sm = new Mesh(splint, clear);
    sm.position.y = 0.95;
    g.add(sm);
    this.splintMesh = sm;
    g.rotation.set(0.5, 0, 0);
    return { group: this._wrap(g, { yLift: 0.1 }), cuts: [cut], splint: sm };
  }

  _printedModel() {
    const cut = makeCut({ y: 10, dir: 1, width: 0.08 });
    const layers = { uLayerFreq: { value: 38 }, uLayerAmt: { value: 0.12 } };
    const resin = this._mat(
      {
        color: '#7fd6c4',
        roughness: 0.18,
        transmission: this.quality === 'high' ? 0.55 : 0,
        thickness: 1.2,
        ior: 1.5,
        attenuationColor: new Color('#2fa58e'),
        attenuationDistance: 2.2,
        clearcoat: 1,
      },
      cut,
      { layers }
    );
    const { geometry: teethGeo, layout } = makeArchTeeth({ down: false, segU: 40, rows: [3, 14, 12] });
    const gum = makeGum({ layout, down: false, a: 0.52, bTop: 0.36, cy: 0.18 });
    const g = new Group();
    g.add(new Mesh(teethGeo, resin), new Mesh(gum.geometry, resin));
    const base = makeHorseshoe({ curve: makeFullArchCurve(1, 0.02), inner: 0.72, outer: 0.72, depth: 0.7, bevel: 0.06 });
    base.translate(0, -1.2, 0);
    g.add(new Mesh(base, resin));
    g.rotation.set(0.55, 0, 0);
    return { group: this._wrap(g, { yLift: 0.1 }), cuts: [cut] };
  }

  _get(i) {
    if (!this.models[i]) {
      const m = this.builders[i]();
      m.group.visible = false;
      this.stage.add(m.group);
      this.models[i] = m;
    }
    return this.models[i];
  }

  /** Build remaining models when the browser is idle so switching never stalls. */
  warmUp() {
    const queue = [1, 2, 3, 4, 5];
    const idle = window.requestIdleCallback || ((f) => setTimeout(f, 80));
    const next = async () => {
      const i = queue.shift();
      if (i === undefined) return;
      const m = this._get(i);
      // compile hidden models without drawing them (parallel compile when the GPU supports it)
      try {
        await this.renderer.compileAsync(m.group, this.camera, this.scene);
      } catch (_) {}
      idle(next);
    };
    idle(next);
  }

  /* ----------------------------------------------------------- switching -- */

  show(i) {
    this.target = i;
  }

  _activate(i, instant = false) {
    const next = this._get(i);
    next.group.visible = true;
    if (instant || this.current < 0) {
      next.cuts.forEach((c) => {
        c.uCutY.value = -10;
        c.uCutDir.value = 1;
      });
      this.current = i;
      return;
    }
    const prev = this.models[this.current];
    this.transition = { from: this.current, to: i, t: 0, prev, next };
    next.cuts.forEach((c) => {
      c.uCutDir.value = 1;
      c.uCutY.value = 3.2;
    });
    prev.cuts.forEach((c) => {
      c.uCutDir.value = -1;
      c.uCutY.value = 3.2;
    });
    this.current = i;
  }

  _bindDrag() {
    const el = this.canvas;
    let lastX = 0;
    el.addEventListener('pointerdown', (e) => {
      this.dragging = true;
      lastX = e.clientX;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', (e) => {
      if (!this.dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      this.velY = dx * 0.008;
      this.rotY += this.velY;
    });
    const up = (e) => {
      this.dragging = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch (_) {}
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  }

  setPointer(x, y) {
    this.pointer.set(x, y);
  }

  resize() {
    const w = this.canvas.clientWidth || 600;
    const h = this.canvas.clientHeight || 600;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 0.9 ? 38 : 30;
    this.camera.updateProjectionMatrix();
  }

  update(dt, time) {
    if (!this.transition && this.target !== this.current) this._activate(this.target);
    if (this.transition) {
      const tr = this.transition;
      tr.t += dt / 1.15;
      const k = ease(clamp01(tr.t));
      const y = 3.2 - k * 6.0;
      tr.next.cuts.forEach((c) => (c.uCutY.value = y));
      tr.prev.cuts.forEach((c) => (c.uCutY.value = y));
      this.sweep.position.y = y;
      this.sweep.material.opacity = Math.sin(k * Math.PI) * 0.9;
      if (tr.t >= 1) {
        tr.prev.group.visible = false;
        tr.next.cuts.forEach((c) => (c.uCutY.value = -10));
        this.sweep.material.opacity = 0;
        this.transition = null;
      }
    }
    if (!this.dragging) {
      this.velY *= Math.pow(0.04, dt);
      this.rotY += this.velY + dt * 0.18;
    }
    this.pointerS.x = damp(this.pointerS.x, this.pointer.x, 3, dt);
    this.pointerS.y = damp(this.pointerS.y, this.pointer.y, 3, dt);
    this.stage.rotation.y = this.rotY;
    this.stage.rotation.x = this.pointerS.y * 0.12;
    this.stage.position.y = Math.sin(time * 0.8) * 0.06;
    const cur = this.models[this.current];
    if (cur && cur.splint) cur.splint.position.y = 0.95 + (Math.sin(time * 1.2) * 0.5 + 0.5) * 0.55;
    this.warm.intensity = damp(this.warm.intensity, cur && cur.warm ? 9 : 0, 3, dt);
    this.platformRing.material.opacity = 0.35 + Math.sin(time * 1.4) * 0.12;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
