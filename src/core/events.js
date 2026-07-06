// Tiny synchronous pub/sub event bus.
//
// The simulation emits domain events ("unitMoved", "unitDamaged", "turnChanged",
// ...) and never imports the renderer or the DOM. Presentation layers (Three.js
// renderer, VFX, UI store bindings) subscribe to those events. This is the seam
// that keeps rules decoupled from how they are shown.

export class EventBus {
  constructor() {
    /** @type {Map<string, Set<Function>>} */
    this._handlers = new Map();
    /** @type {Set<Function>} */
    this._any = new Set();
  }

  /** Subscribe to a named event. Returns an unsubscribe function. */
  on(type, handler) {
    let set = this._handlers.get(type);
    if (!set) {
      set = new Set();
      this._handlers.set(type, set);
    }
    set.add(handler);
    return () => set.delete(handler);
  }

  /** Subscribe once. */
  once(type, handler) {
    const off = this.on(type, (payload) => {
      off();
      handler(payload);
    });
    return off;
  }

  /** Subscribe to every event; handler receives (type, payload). */
  onAny(handler) {
    this._any.add(handler);
    return () => this._any.delete(handler);
  }

  /** Emit an event synchronously to all subscribers. */
  emit(type, payload) {
    const set = this._handlers.get(type);
    if (set) {
      for (const handler of [...set]) handler(payload);
    }
    if (this._any.size) {
      for (const handler of [...this._any]) handler(type, payload);
    }
  }

  clear() {
    this._handlers.clear();
    this._any.clear();
  }
}
