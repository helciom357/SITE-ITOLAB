import { gsap } from 'gsap';

const fine = () => matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Buttons that lean toward the pointer */
export function initMagnetic(root = document) {
  if (!fine()) return;
  root.querySelectorAll('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.22);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.32);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)' });
    });
  });
}

/* Soft follower ring; grows on links, shows a label over [data-cursor] */
export function initCursor() {
  const el = document.querySelector('.cursor');
  if (!el || !fine()) return;
  const label = el.querySelector('.cursor__label');
  const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    el.classList.add('is-on');
    xTo(e.clientX);
    yTo(e.clientY);
    const t = e.target instanceof Element ? e.target : null;
    const lab = t && t.closest('[data-cursor]');
    const link = t && t.closest('a, button, label, [role="listitem"]');
    el.classList.toggle('is-label', !!lab);
    el.classList.toggle('is-link', !lab && !!link);
    if (lab) label.textContent = lab.getAttribute('data-cursor');
  });
  document.addEventListener('pointerleave', () => el.classList.remove('is-on'));
}

/* Radial highlight that follows the pointer inside cards */
export function initSpotlight(selector) {
  if (!fine()) return;
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}
