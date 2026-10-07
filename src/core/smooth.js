/*
 * Minimal smooth wheel scrolling on top of native scroll (keeps position: sticky and
 * ScrollTrigger working without proxies). Touch devices and reduced-motion use native scroll.
 */
import { gsap } from 'gsap';

export class SmoothScroll {
  constructor({ damping = 8.5 } = {}) {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = matchMedia('(pointer: coarse)').matches;
    this.enabled = !reduced && !coarse;
    this.reduced = reduced;
    this.damping = damping;
    this.current = window.scrollY;
    this.target = this.current;
    this.running = false;
    this.locked = false;
    this.tween = null;
    if (!this.enabled) return;
    window.addEventListener('wheel', this._onWheel, { passive: false });
    window.addEventListener('scroll', this._onScroll, { passive: true });
  }

  get max() {
    return document.documentElement.scrollHeight - window.innerHeight;
  }

  _onWheel = (e) => {
    if (e.ctrlKey || this.locked) return;
    const t = e.target;
    if (t && t.closest && t.closest('textarea, select, [data-native-scroll]')) return;
    e.preventDefault();
    if (this.tween) {
      this.tween.kill();
      this.tween = null;
    }
    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 40;
    else if (e.deltaMode === 2) d *= window.innerHeight;
    if (!this.running) this.current = window.scrollY;
    this.target = Math.min(this.max, Math.max(0, (this.running ? this.target : this.current) + d));
    this.running = true;
  };

  _onScroll = () => {
    if (!this.running && !this.tween) {
      this.current = this.target = window.scrollY;
    }
  };

  update(dt) {
    if (!this.enabled || !this.running || this.tween) return;
    const k = 1 - Math.exp(-this.damping * dt);
    this.current += (this.target - this.current) * k;
    if (Math.abs(this.target - this.current) < 0.4) {
      this.current = this.target;
      this.running = false;
    }
    window.scrollTo(0, this.current);
  }

  scrollTo(y, { duration } = {}) {
    y = Math.min(this.max, Math.max(0, y));
    if (this.reduced) {
      window.scrollTo(0, y);
      return;
    }
    if (!this.enabled) {
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }
    this.running = false;
    if (this.tween) this.tween.kill();
    const state = { y: window.scrollY };
    const dist = Math.abs(y - state.y);
    const dur = duration ?? Math.min(2.4, 0.9 + dist / 4000);
    this.tween = gsap.to(state, {
      y,
      duration: dur,
      ease: 'expo.inOut',
      onUpdate: () => {
        window.scrollTo(0, state.y);
        this.current = this.target = state.y;
      },
      onComplete: () => {
        this.tween = null;
      },
    });
  }
}
