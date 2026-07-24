// Draft AI: produces draftPick / draftPlace intents for CPU-controlled players.
// Mirrors the original preference scoring (balanced lineup, tanky, aggressive,
// scout, ranged, caster, random, custom). It only decides; the command bus applies.

import { CLASS_KEYS, CLASSES, CLASS_STAT_VARIANCE } from '../data/classes.js';
import { AI_DRAFT_CUSTOM_ORDER, CLASS_DRAFT_ROLE, getBalancedTargets } from '../data/draft-config.js';
import { getCurrentDraftPlayer } from '../sim/draft.js';
import { pickSpreadPlacementTile } from './helpers.js';

export class DraftAI {
  constructor({ state, controller, bus, isCPU }) {
    this.state = state;
    this.controller = controller;
    this.bus = bus;
    this.isCPU = isCPU; // (player) => boolean
    this._busy = false;

    const tick = () => this._maybeAct();
    bus.on('draftStarted', tick);
    bus.on('draftPickChosen', tick);
    bus.on('draftTurnChanged', tick);
    bus.on('unitPlaced', tick);
  }

  _maybeAct() {
    const state = this.state;
    if (state.phase !== 'draft' || this._busy) return;
    if (this._draftComplete()) return;
    const player = getCurrentDraftPlayer(state);
    if (player == null || !this.isCPU(player)) return;
    this._busy = true;
    // Small delay so the human sees the CPU "think".
    setTimeout(() => this._act(player), 400);
  }

  /** Once every pick is placed there is no valid current player; stop drafting. */
  _draftComplete() {
    const d = this.state.draft;
    const total = d.totalPicks != null ? d.totalPicks : 2 * this.state.settings.draftPicksPerPlayer;
    return d.pickIndex >= total;
  }

  async _act(player) {
    const state = this.state;
    try {
      if (state.phase !== 'draft' || this._draftComplete()) return;
      if (getCurrentDraftPlayer(state) !== player) return;
      const d = state.draft;
      if (!d.pendingClassKey) {
        const key = this._pickClass(player);
        if (key) await this.controller.dispatch({ type: 'draftPick', classKey: key });
      } else {
        const tile = pickSpreadPlacementTile(this.state, player, d.placementTiles);
        if (tile) await this.controller.dispatch({ type: 'draftPlace', gx: tile.gx, gy: tile.gy });
      }
    } finally {
      this._busy = false;
      // Advance again if it's still this CPU's turn (pick -> place).
      this._maybeAct();
    }
  }

  _pickClass(player) {
    const avail = this.state.draft.availableClasses;
    const available = CLASS_KEYS.filter((k) => avail.has(k));
    if (available.length === 0) return null;
    const pref = this.state.aiDraftPreference || 'balanced';
    const C = (k) => CLASSES[k] || {};

    if (pref === 'random') return available[Math.floor(this.state.rng.next() * available.length)];
    if (pref === 'custom') return AI_DRAFT_CUSTOM_ORDER.find((k) => avail.has(k)) || available[0];

    const best2 = (a, b) => {
      let best = available[0], va = a(best), vb = b(best);
      for (let i = 1; i < available.length; i++) {
        const k = available[i], x = a(k), y = b(k);
        if (x > va || (x === va && y > vb)) { best = k; va = x; vb = y; }
      }
      return best;
    };
    if (pref === 'tanky') return best2((k) => C(k).hp ?? 0, (k) => C(k).vit ?? 0);
    if (pref === 'aggressive') return best2((k) => C(k).str ?? 0, (k) => C(k).agi ?? 0);
    if (pref === 'scout') return best2((k) => C(k).agi ?? 0, (k) => C(k).dex ?? 0);
    if (pref === 'ranged') return best2((k) => C(k).range ?? 0, (k) => C(k).dex ?? 0);
    if (pref === 'caster') return best2((k) => C(k).int ?? 0, (k) => C(k).mp ?? 0);

    // balanced: fill role deficits, tie-break on HP then lowest stat variance.
    const n = this.state.settings.draftPicksPerPlayer;
    const targets = getBalancedTargets(n);
    const roleCounts = { tank: 0, melee: 0, support: 0, ranged: 0, caster: 0 };
    for (const u of this.state.units) {
      if (u.player !== player) continue;
      const role = CLASS_DRAFT_ROLE[u.class];
      if (role) roleCounts[role]++;
    }
    const deficit = (r) => Math.max(0, (targets[r] ?? 0) - (roleCounts[r] ?? 0));
    const score = (k) => {
      const role = CLASS_DRAFT_ROLE[k];
      return { def: role != null ? deficit(role) : 0, hp: C(k).hp ?? 0, negVar: -(CLASS_STAT_VARIANCE[k] ?? Infinity) };
    };
    const better = (A, B) => (A.def !== B.def ? A.def > B.def : A.hp !== B.hp ? A.hp > B.hp : A.negVar > B.negVar);
    let best = available[0], sb = score(best);
    for (let i = 1; i < available.length; i++) {
      const s = score(available[i]);
      if (better(s, sb)) { best = available[i]; sb = s; }
    }
    return best;
  }
}
