// GameState: the single container for all *rules* state (the "entity store" plus
// match/turn/draft state). It holds plain data and cheap index maintenance only.
// All behavior lives in the systems (turn, combat, skills, ...) that operate on a
// GameState instance. Presentation state (selection, camera, meshes) lives
// elsewhere so the sim stays headless and deterministic.

import { IdGenerator } from '../core/ids.js';
import { Rng } from '../core/rng.js';
import { createSettings } from '../config.js';

export class GameState {
  constructor({ seed } = {}) {
    this.settings = createSettings();
    this.rng = new Rng(seed ?? Date.now());
    this.ids = new IdGenerator(1);

    /** @type {object|null} */
    this.world = null;

    // Entity store
    /** @type {object[]} master unit list (dead units remain until removed) */
    this.units = [];
    /** @type {Map<number, object>} */
    this.unitById = new Map();
    /** @type {Map<number, object>} living units keyed by tile key */
    this.unitAtTileKey = new Map();

    // Match / turn
    this.phase = 'draft'; // 'draft' | 'playing' | 'gameover'
    this.gameMode = 'pvp'; // 'pvp' | 'pvcpu' | 'cvcpu' | 'online'
    this.turnCount = 0;
    this.currentPlayer = 1;
    /** @type {number[]} unit ids in initiative order */
    this.initiativeOrder = [];
    this.currentTurnIndex = 0;
    this.hasMoved = false;
    this.hasAttacked = false;

    // Death bookkeeping
    this.deadCorpseCount = 0;
    this.deathOrderSeq = 0;

    // Powerups (sim side: type only; meshes handled by renderer)
    /** @type {Map<number, { type: string }>} */
    this.powerups = new Map();
    this.powerupSpawnedTurnsLeft = { 30: false, 20: false, 10: false };

    // Draft sub-state
    this.draft = createDraftState();

    // Online sub-state
    this.localPlayerNumber = 1;
    this.playerNames = { 1: 'Player 1', 2: 'Player 2' };

    // AI draft preference (mode-select controlled)
    this.aiDraftPreference = 'balanced';
  }

  get world_() {
    return this.world;
  }

  tileKey(gx, gy) {
    return gy * this.world.w + gx;
  }

  // --- Entity index maintenance ---

  addUnit(unit) {
    this.units.push(unit);
    this.unitById.set(unit.id, unit);
    if (unit.hp > 0) this.unitAtTileKey.set(this.tileKey(unit.x, unit.y), unit);
    return unit;
  }

  getUnitById(id) {
    return this.unitById.get(id) || null;
  }

  getUnitAtTile(gx, gy) {
    const u = this.unitAtTileKey.get(this.tileKey(gx, gy));
    return u && u.hp > 0 ? u : null;
  }

  /** Move a unit's tile-index entry after its x/y changed. */
  updateUnitTileIndex(unit, prevGx, prevGy) {
    if (prevGx != null && prevGy != null) {
      const prevKey = this.tileKey(prevGx, prevGy);
      if (this.unitAtTileKey.get(prevKey) === unit) this.unitAtTileKey.delete(prevKey);
    }
    if (unit.hp > 0) this.unitAtTileKey.set(this.tileKey(unit.x, unit.y), unit);
  }

  removeUnitFromTileIndex(unit) {
    const key = this.tileKey(unit.x, unit.y);
    if (this.unitAtTileKey.get(key) === unit) this.unitAtTileKey.delete(key);
  }

  /** Fully remove a unit (used by reanimate consuming a corpse). */
  removeUnit(unit) {
    const idx = this.units.indexOf(unit);
    if (idx >= 0) this.units.splice(idx, 1);
    this.unitById.delete(unit.id);
    this.removeUnitFromTileIndex(unit);
  }

  rebuildIndexes() {
    this.unitById.clear();
    this.unitAtTileKey.clear();
    for (const u of this.units) {
      this.unitById.set(u.id, u);
      if (u.hp > 0) this.unitAtTileKey.set(this.tileKey(u.x, u.y), u);
    }
  }

  clearUnits() {
    this.units = [];
    this.unitById.clear();
    this.unitAtTileKey.clear();
    this.ids.reset(1);
    this.deadCorpseCount = 0;
    this.deathOrderSeq = 0;
  }

  // --- Queries ---

  getLivingUnits() {
    return this.units.filter((u) => u.hp > 0);
  }

  getLivingUnitsForPlayer(player) {
    return this.units.filter((u) => u.hp > 0 && u.player === player);
  }

  /** Non-summoned living units, used for win checks. */
  getCoreLivingUnits(player) {
    return this.units.filter((u) => u.hp > 0 && u.player === player && u.summonedBy == null);
  }

  getActiveUnit() {
    if (!this.initiativeOrder.length) return null;
    const id = this.initiativeOrder[this.currentTurnIndex];
    return this.getUnitById(id);
  }

  /** Whether the local human controls the current turn (mode-aware). */
  isHumanTurn() {
    if (this.gameMode === 'cvcpu') return false;
    if (this.gameMode === 'pvcpu' && this.currentPlayer !== 1) return false;
    if (this.gameMode === 'online' && this.currentPlayer !== this.localPlayerNumber) return false;
    return true;
  }

  isCPUPlayer(player) {
    return (this.gameMode === 'pvcpu' && player === 2) || this.gameMode === 'cvcpu';
  }
}

export function createDraftState() {
  return {
    order: [], // snake pick order (player numbers)
    pickIndex: 0,
    pickCountByPlayer: { 1: 0, 2: 0 },
    availableClasses: new Set(),
    classOrder: [], // shuffled display order
    pendingClassKey: null, // class chosen, awaiting placement
    selectedClassKey: null, // UI card selection
    placementTiles: [], // [{gx,gy}] valid spawn tiles (sorted)
  };
}
