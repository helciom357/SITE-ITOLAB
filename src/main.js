import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { SplitText } from 'gsap/SplitText.js';
import { SmoothScroll } from './core/smooth.js';
import { CONFIG } from './config.js';
import { initCaseForm } from './ui/form.js';
import { initMagnetic, initCursor, initSpotlight } from './ui/pointer.js';

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileMQ = matchMedia('(max-width: 900px)');
const fmt = new Intl.NumberFormat('pt-BR');
const smooth = new SmoothScroll();

const STEPS = [
  { title: 'Envie o caso', text: 'Compartilhe arquivos digitais, modelos, fotos e as informações do caso.' },
  { title: 'Alinhamento técnico', text: 'Revisamos com você planejamento, materiais e particularidades antes de produzir.' },
  { title: 'Produção CAD/CAM', text: 'Desenho, fabricação, acabamento e revisão técnica, com fresagem e impressão 3D.' },
  { title: 'Entrega e suporte', text: 'Você recebe o trabalho finalizado e segue com o nosso acompanhamento.' },
];
const STEP_RANGES = [
  [0, 0.14],
  [0.14, 0.28],
  [0.28, 0.86],
  [0.86, 1],
];
const SOLUTION_NAMES = ['Zircônia', 'Dissilicato de lítio', 'PMMA', 'Protocolos e reabilitações', 'Placas oclusais', 'Modelos e impressão 3D'];

/* ===================================================================== state */

const state = {
  hero: null,
  heroVisible: true,
  scrollP: 0,
  introStart: null,
  lab: null,
  labVisible: false,
  step: -1,
  activeSolution: 0,
  pointer: { x: 0, y: 0 },
  shift: { x: 0, y: 0 },
};

/* ===================================================================== loader */

const loader = {
  el: $('.loader'),
  bar: $('.loader__bar i'),
  pct: $('.loader__pct'),
  logo: $('.loader__logo'),
  shown: 0,
  target: 0,
};
const loaderTick = gsap.ticker.add(() => {
  loader.shown += (loader.target - loader.shown) * 0.12;
  const v = loader.shown;
  loader.bar.style.transform = `scaleX(${v})`;
  loader.pct.textContent = `${Math.round(v * 100)}%`;
  // the logo is "printed" from left to right as assets load
  loader.logo.style.clipPath = `inset(0 ${(100 - v * 100).toFixed(2)}% 0 0)`;
});
const setLoad = (v) => (loader.target = Math.max(loader.target, v));

function hideLoader() {
  return new Promise((resolve) => {
    loader.target = 1;
    const tl = gsap.timeline({
      delay: 0.25,
      onComplete: () => {
        gsap.ticker.remove(loaderTick);
        loader.el.remove();
        resolve();
      },
    });
    tl.to(loader.logo, { y: -24, opacity: 0, duration: 0.7, ease: 'expo.in' }, 0.15)
      .to('.loader__bar, .loader__meta', { opacity: 0, duration: 0.3 }, 0.15)
      .to(loader.el, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '-=0.2');
  });
}

/* ===================================================================== split helpers */

function revealTitle(el, { scroll = true } = {}) {
  const split = SplitText.create(el, { type: 'lines,words', linesClass: 'split-line', mask: 'lines' });
  const anim = gsap.from(split.words, {
    yPercent: 115,
    duration: 1.2,
    ease: 'expo.out',
    stagger: 0.035,
    paused: true,
    onComplete: () => split.revert(),
  });
  if (scroll) ScrollTrigger.create({ trigger: el, start: 'top 86%', once: true, onEnter: () => anim.play() });
  return anim;
}

/* ===================================================================== header + nav */

function initHeader() {
  const header = $('.site-header');
  const toggle = $('.menu-toggle');
  const menu = $('#menu-mobile');
  let open = false;

  const setMenu = (v) => {
    open = v;
    toggle.setAttribute('aria-expanded', String(v));
    toggle.querySelector('.sr-only').textContent = v ? 'Fechar menu' : 'Abrir menu';
    if (v) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add('is-open'));
      smooth.locked = true;
    } else {
      menu.classList.remove('is-open');
      smooth.locked = false;
      setTimeout(() => !open && (menu.hidden = true), 800);
    }
  };
  toggle.addEventListener('click', () => setMenu(!open));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && open && setMenu(false));

  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const y = self.scroll();
      header.classList.toggle('is-scrolled', y > 24);
      header.classList.toggle('is-hidden', !open && self.direction === 1 && y > 240);
      $('.wa-float').classList.toggle('is-visible', y > window.innerHeight * 0.9 && !state.inContact);
    },
  });

  // current section in nav
  const links = $$('.nav a');
  const map = { laboratorio: '#laboratorio', solucoes: '#solucoes', diferenciais: '#diferenciais', contato: '#contato' };
  Object.entries(map).forEach(([id, href]) => {
    const sec = document.getElementById(id);
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (s) => links.forEach((a) => a.getAttribute('href') === href && a.setAttribute('aria-current', String(s.isActive))),
    });
  });
  ScrollTrigger.create({
    trigger: '.contact',
    start: 'top 70%',
    end: 'bottom top',
    onToggle: (s) => (state.inContact = s.isActive),
  });

  // anchor links
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    if (open) setMenu(false);
    let y;
    if (id === 'inicio') y = 0;
    else if (id === 'processo') y = $('.build').offsetTop + $('.build__stage').offsetHeight * 0.75;
    else y = target.getBoundingClientRect().top + window.scrollY;
    smooth.scrollTo(y);
    history.replaceState(null, '', `#${id}`);
  });
}

/* ===================================================================== hero / build */

function autoProgress(t) {
  // scan 3.2 s → CAD 2.8 s → printer appears 1.4 s → first layers 1.2 s → slow print
  const keys = [
    [0, 0],
    [3.2, 0.14],
    [6.0, 0.28],
    [7.4, 0.345],
    [8.6, 0.4],
    [55, 0.47],
  ];
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, p0] = keys[i];
    const [t1, p1] = keys[i + 1];
    if (t <= t1) return p0 + ((t - t0) / (t1 - t0)) * (p1 - p0);
  }
  return keys[keys.length - 1][1];
}

function initBuild() {
  const build = $('.build');
  const stage = $('.build__stage');
  const copy = $('.hero-copy');
  const caption = $('.step-caption');
  const cue = $('.scroll-cue');
  const railItems = $$('.process-rail li');
  const railBars = $$('.process-rail__bar b');
  const numEl = $('[data-step-num]');
  const titleEl = $('[data-step-title]');
  const textEl = $('[data-step-text]');
  const ro = { la: $('[data-ro-label-a]'), a: $('[data-ro-a]'), lb: $('[data-ro-label-b]'), b: $('[data-ro-b]') };

  ScrollTrigger.create({
    trigger: build,
    start: 'top top',
    end: () => `+=${Math.max(1, build.offsetHeight - 2 * stage.offsetHeight)}`,
    invalidateOnRefresh: true,
    onUpdate: (s) => (state.scrollP = s.progress),
  });

  // manifesto slides over the pinned stage
  const dim = document.createElement('div');
  dim.style.cssText = 'position:absolute;inset:0;background:#0f141a;opacity:0;pointer-events:none;z-index:4';
  stage.appendChild(dim);
  gsap.timeline({
    scrollTrigger: {
      trigger: '.manifesto',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      onLeave: () => (state.heroVisible = false),
      onEnterBack: () => (state.heroVisible = true),
    },
  })
    .to(stage, { scale: 0.92, ease: 'none' }, 0)
    .to(dim, { opacity: 0.7, ease: 'none' }, 0)
    .to('.manifesto', { borderTopLeftRadius: 0, borderTopRightRadius: 0, ease: 'none' }, 0);

  const copySet = {
    o: gsap.quickSetter(copy, 'opacity'),
    y: gsap.quickSetter(copy, 'y', 'px'),
  };
  let lastCopy = -1;
  let lastCap = -1;

  const setStep = (i) => {
    if (i === state.step) return;
    const first = state.step < 0;
    state.step = i;
    railItems.forEach((li, k) => {
      li.classList.toggle('is-active', k === i);
      li.classList.toggle('is-done', k < i);
    });
    const apply = () => {
      const k = state.step;
      numEl.textContent = String(k + 1).padStart(2, '0');
      titleEl.textContent = STEPS[k].title;
      textEl.textContent = STEPS[k].text;
    };
    if (first || reduced) return apply();
    gsap.killTweensOf([titleEl, textEl]);
    gsap.to([titleEl, textEl], {
      opacity: 0,
      y: -12,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        apply();
        gsap.fromTo([titleEl, textEl], { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'expo.out' });
      },
    });
  };

  let roTimer = 0;
  state.updateBuildDom = (dt) => {
    const hero = state.hero;
    const sp = state.scrollP;
    // hero copy ↔ step caption
    const copyOut = reduced ? (sp > 0.02 ? 1 : 0) : clamp01(sp / 0.05);
    const capIn = clamp01((sp - 0.035) / 0.04);
    if (Math.abs(copyOut - lastCopy) > 0.001) {
      copySet.o(1 - copyOut);
      copySet.y(-copyOut * 40);
      copy.style.visibility = copyOut >= 1 ? 'hidden' : 'visible';
      copy.style.filter = copyOut > 0 && copyOut < 1 ? `blur(${copyOut * 8}px)` : '';
      cue.style.opacity = String(1 - clamp01(copyOut * 3));
      lastCopy = copyOut;
    }
    if (Math.abs(capIn - lastCap) > 0.001) {
      caption.style.opacity = String(capIn);
      caption.style.visibility = capIn > 0 ? 'visible' : 'hidden';
      caption.style.transform = `translateY(${(1 - capIn) * 30}px)`;
      lastCap = capIn;
    }

    if (!hero) {
      setStep(Math.min(3, Math.floor(sp * 4)));
      return;
    }
    const p = hero.p;
    const r = hero.readout;
    setStep(r.step);
    STEP_RANGES.forEach(([a, b], k) => {
      railBars[k].style.transform = `scaleX(${clamp01((p - a) / (b - a))})`;
    });

    // live readout (≈12 fps)
    roTimer += dt;
    if (roTimer > 0.08) {
      roTimer = 0;
      let la, a, lb, b;
      if (r.step === 0) {
        la = 'Escaneamento';
        a = `${fmt.format(r.points)} pontos`;
        lb = 'Arquivo';
        b = 'Arcada superior';
      } else if (r.step === 1) {
        la = 'Suportes gerados';
        a = fmt.format(r.supports);
        lb = 'Revisão';
        b = 'Planejamento e materiais';
      } else if (r.step === 2) {
        if (r.layer > 0) {
          la = 'Camada';
          a = `${fmt.format(r.layer)} de ${fmt.format(r.layers)}`;
          lb = 'Altura';
          b = `${r.z.toFixed(1).replace('.', ',')} mm`;
        } else {
          la = 'Impressora';
          a = 'Preparando';
          lb = 'Resina';
          b = 'Cor de dente';
        }
      } else {
        la = 'Pós-processamento';
        a = 'Lavagem e cura';
        lb = 'Acabamento';
        b = 'Caracterização';
      }
      if (ro.la.textContent !== la) ro.la.textContent = la;
      if (ro.a.textContent !== a) ro.a.textContent = a;
      if (ro.lb.textContent !== lb) ro.lb.textContent = lb;
      if (ro.b.textContent !== b) ro.b.textContent = b;
    }

    // composition: subject to the right of the copy on wide screens, higher on phones
    const mobile = mobileMQ.matches;
    const tx = mobile ? 0 : 0.16 * (1 - copyOut) + 0.12 * copyOut;
    const ty = mobile ? -0.13 : 0;
    state.shift.x += (tx - state.shift.x) * Math.min(1, dt * 4);
    state.shift.y += (ty - state.shift.y) * Math.min(1, dt * 4);
    hero.setShift(state.shift.x, state.shift.y);

    // progress: intro plays by itself, scrolling takes over
    let target;
    if (reduced) target = 0.26 + 0.74 * sp;
    else {
      const t = state.introStart == null ? 0 : (performance.now() - state.introStart) / 1000;
      const auto = autoProgress(t);
      target = sp > 0.0005 ? Math.max(auto, 0.4 + 0.6 * sp) : auto;
    }
    hero.setProgress(target);
  };
}

/* ===================================================================== manifesto + facts */

function initManifesto() {
  const text = $('[data-fill]');
  if (!reduced) {
    const split = SplitText.create(text, { type: 'words', wordsClass: 'word' });
    gsap.to(split.words, {
      opacity: 1,
      stagger: 0.12,
      ease: 'none',
      scrollTrigger: { trigger: text, start: 'top 82%', end: 'bottom 42%', scrub: 0.6 },
    });
  }
  gsap.from('.fact', {
    y: 28,
    opacity: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.facts', start: 'top 88%', once: true },
  });
}

/* ===================================================================== solutions */

function initSolutions() {
  const items = $$('.solution');
  const nameEl = $('[data-lab-name]');
  const section = $('.solutions');
  const frame = $('.lab__frame');

  const setActive = (i) => {
    if (i === state.activeSolution && state.labStarted) return;
    state.activeSolution = i;
    items.forEach((el, k) => el.classList.toggle('is-active', k === i));
    if (state.lab) state.lab.show(i);
    if (nameEl.textContent !== SOLUTION_NAMES[i]) {
      gsap.to(nameEl, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        onComplete: () => {
          nameEl.textContent = SOLUTION_NAMES[i];
          gsap.fromTo(nameEl, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out' });
        },
      });
    }
  };

  items.forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: () => (mobileMQ.matches ? 'top 78%' : 'top 55%'),
      end: () => (mobileMQ.matches ? 'bottom 78%' : 'bottom 55%'),
      invalidateOnRefresh: true,
      onToggle: (s) => s.isActive && setActive(i),
    });
    const go = () => {
      const r = el.getBoundingClientRect();
      const anchor = mobileMQ.matches ? 0.78 : 0.55;
      smooth.scrollTo(window.scrollY + r.top + r.height / 2 - window.innerHeight * anchor, { duration: 1.1 });
      setActive(i);
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go();
      }
    });
  });

  // lazy 3D viewer
  const startLab = async () => {
    if (state.labStarted) return;
    state.labStarted = true;
    try {
      const { LabScene } = await import('./three/lab.js');
      const { detectQuality } = await import('./three/shared.js');
      state.lab = new LabScene($('.lab__canvas'), { quality: detectQuality() });
      state.lab.show(state.activeSolution);
      state.lab.warmUp();
    } catch (err) {
      console.warn('[ITO] viewer indisponível', err);
      frame.classList.add('is-static');
    }
  };
  if (document.documentElement.classList.contains('no-webgl')) return;
  new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && startLab()),
    { rootMargin: '60% 0px' }
  ).observe(section);
  new IntersectionObserver((entries) => entries.forEach((e) => (state.labVisible = e.isIntersecting)), { threshold: 0 }).observe(frame);

  initSpotlight('.solution');
}

/* ===================================================================== diferenciais */

function initDiff() {
  const svg = $('.blueprint svg');
  const strokes = $$('.bp-draw path, .bp-draw circle, .bp-note path, .bp-block path', svg);
  const texts = $$('text', svg).filter((t) => !t.closest('.bp-marker'));
  const markers = $$('.bp-marker', svg);
  if (!reduced) {
    gsap.set(strokes, { strokeDashoffset: 1 });
    gsap.set(texts, { opacity: 0 });
    gsap.set(markers, { opacity: 0, scale: 0.4, transformOrigin: '50% 50%' });
    const tl = gsap.timeline({ scrollTrigger: { trigger: svg, start: 'top 78%', end: 'bottom 62%', scrub: 0.8 } });
    tl.to(strokes, { strokeDashoffset: 0, stagger: 0.04, duration: 1, ease: 'none' })
      .to(texts, { opacity: 1, stagger: 0.03, duration: 0.3 }, 0.6)
      .to(markers, { opacity: 1, scale: 1, stagger: 0.12, duration: 0.3, ease: 'back.out(2)' }, 0.9);
  }
  const list = $$('.diff__list li');
  const on = (key, v) => {
    markers.forEach((m) => m.classList.toggle('is-on', v && m.dataset.marker === key));
    list.forEach((li) => li.classList.toggle('is-on', v && li.dataset.callout === key));
  };
  list.forEach((li) => {
    li.tabIndex = 0;
    li.addEventListener('pointerenter', () => on(li.dataset.callout, true));
    li.addEventListener('pointerleave', () => on(li.dataset.callout, false));
    li.addEventListener('focus', () => on(li.dataset.callout, true));
    li.addEventListener('blur', () => on(li.dataset.callout, false));
  });
  gsap.from(list, {
    y: 24,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.diff__list', start: 'top 85%', once: true },
  });

  // light card widening to full bleed
  if (!reduced) {
    gsap.fromTo(
      '.diff',
      { clipPath: 'inset(0px 3.5vw 0px 3.5vw round 30px 30px 0px 0px)' },
      { clipPath: 'inset(0px 0vw 0px 0vw round 30px 30px 0px 0px)', ease: 'none', scrollTrigger: { trigger: '.diff', start: 'top bottom', end: 'top 25%', scrub: true } }
    );
  }
}

/* ===================================================================== gallery */

function initGallery() {
  if (!CONFIG.gallery.length) return;
  const sec = $('.gallery');
  const track = $('[data-gallery]');
  CONFIG.gallery.forEach((g) => {
    const f = document.createElement('figure');
    const img = new Image();
    img.src = g.src;
    img.alt = g.alt || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    f.appendChild(img);
    if (g.caption) {
      const c = document.createElement('figcaption');
      c.textContent = g.caption;
      f.appendChild(c);
    }
    track.appendChild(f);
  });
  sec.hidden = false;
}

/* ===================================================================== footer */

function initFooter() {
  $('[data-year]').textContent = String(new Date().getFullYear());
  if (reduced) return;
  const logo = $('.footer__logo');
  gsap.fromTo(
    logo,
    { '--scan': '-10%' },
    { '--scan': '100%', ease: 'none', scrollTrigger: { trigger: '.site-footer', start: 'top 85%', end: 'bottom bottom', scrub: 0.6 } }
  );
}

/* ===================================================================== loop */

function startLoop() {
  gsap.ticker.add((time, deltaMS) => {
    const dt = Math.min(deltaMS / 1000, 1 / 20);
    smooth.update(dt);
    if (state.updateBuildDom) state.updateBuildDom(dt);
    const hero = state.hero;
    if (hero && state.heroVisible && !document.hidden) {
      hero.setPointer(state.pointer.x, state.pointer.y);
      hero.update(dt, time);
      hero.render();
    }
    const lab = state.lab;
    if (lab && state.labVisible && !document.hidden) {
      lab.setPointer(state.pointer.x, state.pointer.y);
      lab.update(dt, time);
      lab.render();
    }
  });
  window.addEventListener('pointermove', (e) => {
    state.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    state.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  });
  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      state.hero && state.hero.resize();
      state.lab && state.lab.resize();
    }, 120);
  });
}

/* ===================================================================== boot */

async function boot() {
  setLoad(0.12);
  initHeader();
  initBuild();
  initManifesto();
  initSolutions();
  initDiff();
  initGallery();
  initFooter();
  initCaseForm($('.case-form'), CONFIG.whatsapp);
  initMagnetic();
  initCursor();
  startLoop();

  await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2500))]);
  setLoad(0.3);

  // titles (after fonts so lines break correctly)
  $$('[data-split]').forEach((el) => revealTitle(el));
  const heroTitleAnim = revealTitle($('[data-hero-split]'), { scroll: false });
  gsap.set(['.hero-lead', '.hero-actions', '.hero-note', '.process-rail li', '.site-header'], { opacity: 0 });

  // 3D hero
  try {
    const [{ HeroScene }, { detectQuality }] = await Promise.all([import('./three/hero.js'), import('./three/shared.js')]);
    setLoad(0.6);
    await new Promise((r) => requestAnimationFrame(r));
    const hero = new HeroScene($('.build__canvas'), { quality: detectQuality() });
    setLoad(0.85);
    hero.setProgress(reduced ? 0.26 : 0);
    hero.p = reduced ? 0.26 : 0;
    hero.update(0.016, 0);
    hero.renderer.compile(hero.scene, hero.camera);
    hero.render();
    state.hero = hero;
  } catch (err) {
    console.warn('[ITO] WebGL indisponível', err);
    document.documentElement.classList.add('no-webgl');
  }
  setLoad(1);
  await new Promise((r) => setTimeout(r, 450));
  await hideLoader();
  ScrollTrigger.refresh();

  // intro choreography
  state.introStart = performance.now();
  const tl = gsap.timeline();
  tl.add(() => heroTitleAnim.play(), 0)
    .to('.hero-lead', { opacity: 1, duration: 1, ease: 'power2.out' }, 0.45)
    .from('.hero-lead', { y: 20, duration: 1.2, ease: 'expo.out' }, 0.45)
    .to(['.hero-actions', '.hero-note'], { opacity: 1, duration: 1, stagger: 0.1 }, 0.65)
    .from(['.hero-actions', '.hero-note'], { y: 20, duration: 1.2, stagger: 0.1, ease: 'expo.out' }, 0.65)
    .to('.process-rail li', { opacity: 1, duration: 0.8, stagger: 0.08 }, 0.8)
    .to('.site-header', { opacity: 1, duration: 1 }, 0.2);
}

boot();
