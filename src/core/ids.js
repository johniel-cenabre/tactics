// Monotonic id generator for units. Kept tiny and injectable so a match can be
// reset (and so tests get predictable ids).

export class IdGenerator {
  constructor(start = 1) {
    this._next = start;
  }

  next() {
    return this._next++;
  }

  reset(start = 1) {
    this._next = start;
  }
}
