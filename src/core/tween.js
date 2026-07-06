// Central animation scheduler.
//
// The original game scattered dozens of ad-hoc requestAnimationFrame loops (unit
// moves, attacks, deaths, level-ups, summons, camera). This consolidates them
// into one RAF loop driving a set of active tweens. Presentation code creates a
// tween with a duration and an onUpdate(t) callback; on every frame the
// scheduler advances all tweens and invokes an optional global onFrame hook
// (used by the renderer to mark the scene dirty).

export const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
export const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);
export const linear = (t) => t;

export class TweenScheduler {
  constructor() {
    /** @type {Set<object>} */
    this._tweens = new Set();
    this._running = false;
    this._raf = null;
    this._lastTime = 0;
    /** Optional hook invoked once per frame while tweens are active. */
    this.onFrame = null;
  }

  /** Whether any tween is currently running. */
  get active() {
    return this._tweens.size > 0;
  }

  /**
   * Start a tween.
   * @param {object} opts
   * @param {number} opts.duration ms (0 completes immediately next frame)
   * @param {(t:number)=>void} opts.onUpdate called with eased progress 0..1
   * @param {()=>void} [opts.onComplete]
   * @param {(t:number)=>number} [opts.ease]
   * @returns {object} handle with cancel()
   */
  add({ duration, onUpdate, onComplete, ease = easeInOutQuad }) {
    const tween = {
      elapsed: 0,
      duration: Math.max(0, duration),
      onUpdate,
      onComplete,
      ease,
      done: false,
      cancel: () => {
        this._tweens.delete(tween);
      },
    };
    this._tweens.add(tween);
    this._ensureRunning();
    return tween;
  }

  /** Convenience: run a callback every frame for `duration` ms. */
  during(duration, onUpdate, onComplete) {
    return this.add({ duration, onUpdate, onComplete, ease: linear });
  }

  _ensureRunning() {
    if (this._running) return;
    this._running = true;
    this._lastTime = performance.now();
    this._raf = requestAnimationFrame(this._tick);
  }

  _tick = (now) => {
    const dt = now - this._lastTime;
    this._lastTime = now;

    for (const tween of [...this._tweens]) {
      tween.elapsed += dt;
      const raw = tween.duration === 0 ? 1 : Math.min(1, tween.elapsed / tween.duration);
      const eased = tween.ease(raw);
      try {
        tween.onUpdate(eased, raw);
      } catch (err) {
        console.error('[tween] onUpdate error', err);
      }
      if (raw >= 1) {
        this._tweens.delete(tween);
        if (tween.onComplete) {
          try {
            tween.onComplete();
          } catch (err) {
            console.error('[tween] onComplete error', err);
          }
        }
      }
    }

    if (this.onFrame) this.onFrame();

    if (this._tweens.size > 0) {
      this._raf = requestAnimationFrame(this._tick);
    } else {
      this._running = false;
      this._raf = null;
    }
  };

  clear() {
    this._tweens.clear();
    if (this._raf) cancelAnimationFrame(this._raf);
    this._running = false;
    this._raf = null;
  }
}
