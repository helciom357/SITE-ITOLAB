/*
 * Procedural dental geometry.
 * Units: 1 unit = 1 cm. Crowns are generated upright (occlusal +Y, margin at Y=0).
 */
import {
  BufferGeometry,
  Float32BufferAttribute,
  Color,
  Vector3,
  Matrix4,
  CatmullRomCurve3,
  Shape,
  ExtrudeGeometry,
  CylinderGeometry,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const mix = (a, b, t) => a + (b - a) * t;

/* Shade palette (approximate VITA tones) used as vertex colours */
export const SHADE = {
  cervical: new Color('#cdb085'),
  body: new Color('#e6d4b6'),
  enamel: new Color('#d9dcda'),
  gumDeep: new Color('#a95c66'),
  gumLight: new Color('#dc9a9d'),
};

/* Upper-arch tooth table (FDI order from midline back). w = mesiodistal, d = buccolingual, h = crown height */
export const UPPER = [
  { fdi: 1, type: 'incisor', w: 0.86, d: 0.7, h: 1.05 },
  { fdi: 2, type: 'incisor', w: 0.66, d: 0.62, h: 0.9 },
  { fdi: 3, type: 'canine', w: 0.77, d: 0.8, h: 1.0 },
  { fdi: 4, type: 'premolar', w: 0.7, d: 0.9, h: 0.82 },
  { fdi: 5, type: 'premolar', w: 0.67, d: 0.9, h: 0.78 },
  { fdi: 6, type: 'molar', w: 1.02, d: 1.1, h: 0.74 },
  { fdi: 7, type: 'molar', w: 0.92, d: 1.04, h: 0.7 },
];

const TYPE = {
  molar: { n: 3.1, wall: 0.62, marginR: 0.8, peakS: 0.38, rimR: 0.9 },
  premolar: { n: 2.6, wall: 0.64, marginR: 0.78, peakS: 0.4, rimR: 0.88 },
  canine: { n: 2.25, wall: 0.6, marginR: 0.74, peakS: 0.42, rimR: 0.82 },
  incisor: { n: 2.1, wall: 0.78, marginR: 0.76, peakS: 0.45, rimR: 1.0 },
};

const g2 = (x, z, cx, cz, s) => Math.exp(-((x - cx) ** 2 + (z - cz) ** 2) / (s * s));

/* Occlusal relief T(q, X, Z) in [~0.3, ~1.05]; q = 0 at rim, 1 at centre */
function relief(type, q, X, Z) {
  const shoulder = 1 - (1 - Math.min(q / 0.3, 1)) ** 2;
  const blend = smooth(0.05, 0.45, q);
  const r2 = X * X + Z * Z;
  let f = 0;
  if (type === 'molar') {
    f =
      g2(X, Z, -0.44, 0.42, 0.34) * 1.0 +
      g2(X, Z, 0.44, 0.42, 0.34) * 0.92 +
      g2(X, Z, -0.42, -0.44, 0.34) * 0.88 +
      g2(X, Z, 0.42, -0.42, 0.32) * 0.72 -
      0.42 * Math.exp(-r2 / 0.09) -
      0.22 * Math.exp(-(Z * Z) / 0.005) * (1 - smooth(0.55, 0.85, Math.abs(X))) -
      0.18 * Math.exp(-(X * X) / 0.005) * (1 - smooth(0.5, 0.8, Math.abs(Z)));
    return shoulder * 0.5 + blend * f * 0.55;
  }
  if (type === 'premolar') {
    f =
      g2(X, Z, 0, 0.46, 0.4) * 1.0 +
      g2(X, Z, 0, -0.46, 0.4) * 0.78 -
      0.3 * Math.exp(-(Z * Z) / 0.008) * (1 - smooth(0.5, 0.8, Math.abs(X)));
    return shoulder * 0.5 + blend * f * 0.55;
  }
  if (type === 'canine') {
    f = Math.exp(-((X * X) / 0.2 + ((Z - 0.12) ** 2) / 0.35));
    return shoulder * 0.38 + blend * f * 0.7;
  }
  // incisor: gently rounded incisal edge
  f = 0.3 * (1 - Math.min(1, X * X));
  return shoulder * 0.72 + blend * f;
}

/**
 * Upright crown geometry with vertex colours.
 * @returns {BufferGeometry}
 */
export function makeTooth({ type = 'molar', w = 1, d = 1, h = 0.8, segU = 64, rows = [5, 20, 18] } = {}) {
  const T = TYPE[type];
  const n = T.n;
  const hw = h * T.wall;
  const hOcc = h - hw;
  const [nb, nw, no] = rows;
  const pos = [];
  const col = [];
  const c = new Color();

  const shapeXZ = (u) => {
    const cu = Math.cos(u);
    const su = Math.sin(u);
    return [Math.sign(cu) * Math.abs(cu) ** (2 / n), Math.sign(su) * Math.abs(su) ** (2 / n)];
  };

  // wall scale at s (0 margin .. 1 rim)
  const wallScale = (s) => {
    if (type === 'incisor') {
      const sx = (w / 2) * mix(T.marginR, 1.0, smooth(0, 0.7, s));
      const sz = (d / 2) * mix(0.95, 0.36, Math.pow(s, 1.35));
      return [sx, sz];
    }
    const r = s < T.peakS ? mix(T.marginR, 1, smooth(0, T.peakS, s)) : mix(1, T.rimR, smooth(T.peakS, 1, s));
    return [(w / 2) * r, (d / 2) * r];
  };

  const colourAt = (y, isTop) => {
    const t = y / h;
    if (t < 0.5) c.copy(SHADE.cervical).lerp(SHADE.body, smooth(0, 0.5, t));
    else c.copy(SHADE.body).lerp(SHADE.enamel, smooth(0.55, 1.0, t) * (type === 'incisor' ? 1 : 0.7));
    if (isTop && type !== 'incisor') c.lerp(SHADE.body, 0.25);
    return c;
  };

  const ringCount = nb + nw + no;
  // ring generator: returns {x,y,z} for ring j at angle u
  const ringPoint = (j, u, out) => {
    const [ex, ez] = shapeXZ(u);
    if (j < nb) {
      // base (intaglio) from centre to margin
      const qb = (j + 1) / nb;
      const [sx, sz] = wallScale(0);
      out.x = ex * sx * qb;
      out.z = ez * sz * qb;
      out.y = h * 0.22 * (1 - qb * qb);
      out.top = false;
      return out;
    }
    if (j < nb + nw) {
      const s = (j - nb) / (nw - 1);
      const [sx, sz] = wallScale(s);
      out.x = ex * sx;
      out.z = ez * sz;
      out.y = s * hw;
      out.top = false;
      return out;
    }
    const q = (j - nb - nw + 1) / (no + 1);
    const [sx, sz] = wallScale(1);
    const rx = ex * sx * (1 - q);
    const rz = ez * sz * (1 - q);
    const X = rx / (w / 2);
    const Z = rz / (d / 2);
    out.x = rx;
    out.z = rz;
    out.y = hw + hOcc * relief(type, q, X, Z);
    out.top = true;
    return out;
  };

  const p = { x: 0, y: 0, z: 0, top: false };
  for (let j = 0; j < ringCount; j++) {
    for (let i = 0; i < segU; i++) {
      const u = (i / segU) * Math.PI * 2;
      ringPoint(j, u, p);
      pos.push(p.x, p.y, p.z);
      colourAt(p.y, p.top);
      col.push(c.r, c.g, c.b);
    }
  }
  // poles
  const bottomPole = ringCount * segU;
  pos.push(0, h * 0.22, 0);
  colourAt(0, false);
  col.push(c.r, c.g, c.b);
  const topPole = bottomPole + 1;
  const topY = hw + hOcc * relief(type, 1, 0, 0);
  pos.push(0, topY, 0);
  colourAt(topY, true);
  col.push(c.r, c.g, c.b);

  const idx = [];
  for (let j = 0; j < ringCount - 1; j++) {
    for (let i = 0; i < segU; i++) {
      const a = j * segU + i;
      const b = j * segU + ((i + 1) % segU);
      const c2 = (j + 1) * segU + i;
      const d2 = (j + 1) * segU + ((i + 1) % segU);
      idx.push(a, c2, b, b, c2, d2);
    }
  }
  for (let i = 0; i < segU; i++) {
    idx.push(bottomPole, i, (i + 1) % segU);
    const base = (ringCount - 1) * segU;
    idx.push(base + i, topPole, base + ((i + 1) % segU));
  }

  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

/* ----------------------------------------------------------- arch ----------- */

/** Half-arch curve (right side) from the midline backwards, in the XZ plane, front = +Z. */
export function makeArchCurve(scale = 1) {
  const pts = [
    [0, 2.35],
    [0.86, 2.18],
    [1.56, 1.7],
    [2.05, 1.0],
    [2.35, 0.2],
    [2.55, -0.72],
    [2.66, -1.62],
    [2.72, -2.3],
  ].map(([x, z]) => new Vector3(x * scale, 0, z * scale));
  return new CatmullRomCurve3(pts, false, 'centripetal');
}

/**
 * Place the upper teeth along the arch. Returns per-tooth transforms (both sides).
 */
export function layoutArch({ teeth = UPPER, gap = 0.025, scale = 1 } = {}) {
  const half = makeArchCurve(scale);
  const L = half.getLength();
  const out = [];
  let s = gap * 0.5;
  for (const t of teeth) {
    const centre = s + t.w / 2;
    s += t.w + gap;
    const u = Math.min(centre / L, 1);
    const p = half.getPointAt(u);
    const tan = half.getTangentAt(u).normalize();
    for (const side of [1, -1]) {
      const pos = new Vector3(p.x * side, 0, p.z);
      const tx = new Vector3(tan.x * side, 0, tan.z);
      // outward (buccal) normal in the XZ plane
      const nz = new Vector3(tx.z, 0, -tx.x).multiplyScalar(side);
      if (nz.dot(pos) < 0) nz.negate();
      out.push({ ...t, side, pos, tangent: tx, normal: nz, arc: centre * side });
    }
  }
  return { teeth: out, halfCurve: half, halfLength: L, usedLength: s };
}

/** Full arch curve (left end → midline → right end) through tooth area. */
export function makeFullArchCurve(scale = 1, trim = 0.0) {
  const half = makeArchCurve(scale);
  const pts = [];
  const N = 40;
  for (let i = N; i >= 1; i--) {
    const p = half.getPointAt((i / N) * (1 - trim));
    pts.push(new Vector3(-p.x, 0, p.z));
  }
  for (let i = 0; i <= N; i++) {
    const p = half.getPointAt((i / N) * (1 - trim));
    pts.push(new Vector3(p.x, 0, p.z));
  }
  return new CatmullRomCurve3(pts, false, 'centripetal');
}

/** Matrix for a tooth placed on the arch; `down` flips the crown to hang (upper jaw). */
export function toothMatrix(t, { down = false, y = 0 } = {}) {
  const m = new Matrix4();
  const up = new Vector3(0, 1, 0);
  // keep the basis right-handed (mirrored side would flip triangle winding)
  const x = t.tangent.clone();
  if (new Vector3().crossVectors(x, up).dot(t.normal) < 0) x.negate();
  m.makeBasis(x, up, t.normal);
  if (down) {
    const flip = new Matrix4().makeRotationZ(Math.PI);
    m.multiply(flip);
  }
  m.setPosition(t.pos.x, y, t.pos.z);
  return m;
}

/** Merge all arch teeth into one geometry. */
export function makeArchTeeth({ down = true, segU = 48, rows = [4, 16, 14], scale = 1, y = 0 } = {}) {
  const lay = layoutArch({ scale });
  const geos = lay.teeth.map((t) => {
    const g = makeTooth({ type: t.type, w: t.w * scale, d: t.d * scale, h: t.h * scale, segU, rows });
    g.applyMatrix4(toothMatrix(t, { down, y }));
    return g;
  });
  const merged = mergeGeometries(geos);
  geos.forEach((g) => g.dispose());
  return { geometry: merged, layout: lay };
}

/**
 * Gingiva / flange swept along the full arch with scalloped (festooned) margins.
 * For an upper prosthesis (`down` = true) the flange sits above the crowns.
 */
export function makeGum({ layout, scale = 1, segS = 220, segC = 28, a = 0.5, bTop = 0.42, bLow = 0.3, festoon = 0.2, cy = 0.22, down = true } = {}) {
  const curve = makeFullArchCurve(scale, 0.02);
  const L = curve.getLength();
  // tooth arc positions along the full curve (approximate via projection)
  const centres = layout.teeth.map((t) => ({ p: t.pos, w: t.w * scale }));
  const pos = [];
  const col = [];
  const c = new Color();
  const tmp = new Vector3();
  const up = new Vector3(0, 1, 0);
  const sgn = down ? 1 : -1;

  const festoonAt = (pt) => {
    // distance to nearest tooth centre relative to its half-width
    let best = 1e9;
    let bw = 1;
    for (const ct of centres) {
      const dd = tmp.copy(pt).sub(ct.p).setY(0).length();
      if (dd < best) {
        best = dd;
        bw = ct.w;
      }
    }
    const k = Math.min(1, best / (bw * 0.5));
    return Math.pow(k, 2.2); // 0 at zenith, 1 at papilla
  };

  for (let i = 0; i <= segS; i++) {
    const u = i / segS;
    const P = curve.getPointAt(u);
    const Tg = curve.getTangentAt(u);
    const N = new Vector3().crossVectors(Tg, up).normalize();
    if (N.dot(P) < 0) N.negate();
    const endT = Math.min(smooth(0, 0.035, u), smooth(1, 0.965, u));
    const taper = Math.sqrt(Math.max(endT, 0.0001));
    const fe = festoonAt(P);
    for (let j = 0; j < segC; j++) {
      const phi = (j / segC) * Math.PI * 2;
      const cphi = Math.cos(phi);
      const sphi = Math.sin(phi);
      const ex = Math.sign(cphi) * Math.abs(cphi) ** 0.55;
      const ey = Math.sign(sphi) * Math.abs(sphi) ** (sphi > 0 ? 0.45 : 0.8);
      const lower = ey < 0;
      const bb = lower ? bLow + festoon * fe : bTop;
      // buccal side slightly fuller
      const aa = a * (ex > 0 ? 1.05 : 0.92);
      const off = N.clone().multiplyScalar(ex * aa * taper);
      const yy = (cy + ey * bb * taper) * sgn;
      pos.push(P.x + off.x, yy, P.z + off.z);
      const t = lower ? smooth(0, 1, -ey) : 0;
      c.copy(SHADE.gumDeep).lerp(SHADE.gumLight, 0.35 + 0.65 * t);
      col.push(c.r, c.g, c.b);
    }
  }
  const idx = [];
  for (let i = 0; i < segS; i++) {
    for (let j = 0; j < segC; j++) {
      const a0 = i * segC + j;
      const b0 = i * segC + ((j + 1) % segC);
      const c0 = (i + 1) * segC + j;
      const d0 = (i + 1) * segC + ((j + 1) % segC);
      if (down) idx.push(a0, c0, b0, b0, c0, d0);
      else idx.push(a0, b0, c0, b0, d0, c0);
    }
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new Float32BufferAttribute(col, 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return { geometry: geo, curve, length: L, cy, bTop, a };
}

/** Support pillar positions (comb) along the crest of the flange. */
export function supportPoints({ curve, rows = [-0.2, 0.0, 0.2], count = 60, topY = 0.64 } = {}) {
  const pts = [];
  const up = new Vector3(0, 1, 0);
  for (let i = 0; i < count; i++) {
    const u = 0.03 + (i / (count - 1)) * 0.94;
    const P = curve.getPointAt(u);
    const T = curve.getTangentAt(u);
    const N = new Vector3().crossVectors(T, up).normalize();
    if (N.dot(P) < 0) N.negate();
    rows.forEach((r, k) => {
      const jitter = ((i * 7 + k * 13) % 5) * 0.004;
      pts.push(new Vector3(P.x + N.x * (r + jitter), topY - Math.abs(r) * 0.35, P.z + N.z * (r + jitter)));
    });
  }
  return pts;
}

/** Flat horseshoe slab following the arch (raft / model base / splint). */
export function makeHorseshoe({ curve, inner = 0.55, outer = 0.6, depth = 0.08, bevel = 0.02, steps = 120 } = {}) {
  const up = new Vector3(0, 1, 0);
  const outerPts = [];
  const innerPts = [];
  for (let i = 0; i <= steps; i++) {
    const u = i / steps;
    const P = curve.getPointAt(u);
    const T = curve.getTangentAt(u);
    const N = new Vector3().crossVectors(T, up).normalize();
    if (N.dot(P) < 0) N.negate();
    outerPts.push([P.x + N.x * outer, P.z + N.z * outer]);
    innerPts.push([P.x - N.x * inner, P.z - N.z * inner]);
  }
  const shape = new Shape();
  // 2D shape in (x, -z) so that after rotating -90° about X it maps back to (x, z)
  shape.moveTo(outerPts[0][0], -outerPts[0][1]);
  outerPts.forEach(([x, z]) => shape.lineTo(x, -z));
  // round end cap
  const endO = outerPts[outerPts.length - 1];
  const endI = innerPts[innerPts.length - 1];
  shape.quadraticCurveTo(
    (endO[0] + endI[0]) / 2 + (endO[0] - innerPts[innerPts.length - 3][0]) * 0.4,
    -((endO[1] + endI[1]) / 2 + (endO[1] - innerPts[innerPts.length - 3][1]) * 0.4),
    endI[0],
    -endI[1]
  );
  for (let i = innerPts.length - 1; i >= 0; i--) shape.lineTo(innerPts[i][0], -innerPts[i][1]);
  const sO = outerPts[0];
  const sI = innerPts[0];
  shape.quadraticCurveTo(
    (sO[0] + sI[0]) / 2 + (sO[0] - outerPts[2][0]) * 0.4,
    -((sO[1] + sI[1]) / 2 + (sO[1] - outerPts[2][1]) * 0.4),
    sO[0],
    -sO[1]
  );
  const geo = new ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevel > 0,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelSegments: 3,
    curveSegments: 6,
    steps: 1,
  });
  geo.rotateX(-Math.PI / 2);
  return geo;
}

/** Support pillar: tapered cylinder with a contact tip, height 1 (scaled per instance), pivot at bottom. */
export function makeSupportGeometry(radius = 0.018) {
  const body = new CylinderGeometry(radius, radius * 1.15, 1, 6, 1, false);
  body.translate(0, 0.5, 0);
  const tip = new CylinderGeometry(radius, radius * 0.3, 0.08, 6, 1, false);
  tip.translate(0, -0.04, 0);
  const g = mergeGeometries([body.toNonIndexed(), tip.toNonIndexed()]);
  g.computeVertexNormals();
  return g;
}

/** Sample surface points from geometries (by triangle area) for point-cloud effects. */
export function samplePoints(geometries, count) {
  const tris = [];
  let total = 0;
  const a = new Vector3();
  const b = new Vector3();
  const c = new Vector3();
  const ab = new Vector3();
  const ac = new Vector3();
  for (const g of geometries) {
    const P = g.attributes.position;
    const C = g.attributes.color;
    const I = g.index;
    const n = I ? I.count : P.count;
    for (let i = 0; i < n; i += 3) {
      const i0 = I ? I.getX(i) : i;
      const i1 = I ? I.getX(i + 1) : i + 1;
      const i2 = I ? I.getX(i + 2) : i + 2;
      a.fromBufferAttribute(P, i0);
      b.fromBufferAttribute(P, i1);
      c.fromBufferAttribute(P, i2);
      const area = ab.subVectors(b, a).cross(ac.subVectors(c, a)).length() * 0.5;
      if (area <= 0) continue;
      total += area;
      tris.push({ g: P, C, i0, i1, i2, acc: total });
    }
  }
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const ca = new Color();
  const cb = new Color();
  const cc = new Color();
  for (let k = 0; k < count; k++) {
    const r = Math.random() * total;
    let lo = 0;
    let hi = tris.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tris[mid].acc < r) lo = mid + 1;
      else hi = mid;
    }
    const t = tris[lo];
    let u = Math.random();
    let v = Math.random();
    if (u + v > 1) {
      u = 1 - u;
      v = 1 - v;
    }
    const w = 1 - u - v;
    a.fromBufferAttribute(t.g, t.i0);
    b.fromBufferAttribute(t.g, t.i1);
    c.fromBufferAttribute(t.g, t.i2);
    positions[k * 3] = a.x * w + b.x * u + c.x * v;
    positions[k * 3 + 1] = a.y * w + b.y * u + c.y * v;
    positions[k * 3 + 2] = a.z * w + b.z * u + c.z * v;
    if (t.C) {
      ca.fromBufferAttribute(t.C, t.i0);
      cb.fromBufferAttribute(t.C, t.i1);
      cc.fromBufferAttribute(t.C, t.i2);
      colors[k * 3] = ca.r * w + cb.r * u + cc.r * v;
      colors[k * 3 + 1] = ca.g * w + cb.g * u + cc.g * v;
      colors[k * 3 + 2] = ca.b * w + cb.b * u + cc.b * v;
    } else {
      colors[k * 3] = colors[k * 3 + 1] = colors[k * 3 + 2] = 1;
    }
  }
  return { positions, colors };
}
