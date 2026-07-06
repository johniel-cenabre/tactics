// Netplay over the command bus. Because the sim is fully deterministic (single
// seeded RNG) and every action is an intent, online play just needs both peers to
// apply the same intents in the same order against the same seed. Each peer issues
// intents only on its own turn, dispatches them locally, and forwards them; the
// remote peer dispatches them on arrival. RNG rolls (hit/damage) therefore match
// on both sides with no extra syncing — fixing the old re-roll desync.

export class NetPlay {
  constructor({ transport, controller, localPlayerNumber }) {
    this.transport = transport;
    this.controller = controller;
    this.localPlayerNumber = localPlayerNumber;
    this._outSeq = 0;
    this._seenRemote = new Set();
    this._queue = [];
    this._ready = false;

    transport.onMessage = (msg) => this._onMessage(msg);
  }

  /** Call once the match sim is initialized on both peers. */
  markReady() {
    this._ready = true;
    for (const intent of this._queue) this.controller.dispatch(intent);
    this._queue.length = 0;
  }

  /** A dispatcher the local input/AI use in place of controller.dispatch. */
  localDispatcher() {
    return { dispatch: (intent) => this.sendLocal(intent) };
  }

  sendLocal(intent) {
    const seq = ++this._outSeq;
    this.transport.send({ kind: 'intent', from: this.localPlayerNumber, seq, intent });
    return this.controller.dispatch(intent);
  }

  _onMessage(msg) {
    if (!msg || msg.kind !== 'intent') return;
    const dedupKey = `${msg.from}:${msg.seq}`;
    if (this._seenRemote.has(dedupKey)) return;
    this._seenRemote.add(dedupKey);
    if (!this._ready) { this._queue.push(msg.intent); return; }
    this.controller.dispatch(msg.intent);
  }
}
