// GameController: the single command bus. Human input, AI, and the network all
// produce the same intent objects and call `dispatch`. The controller applies
// them to the pure sim, draws any RNG through the shared seeded generator (so
// both online peers and tests agree), emits events for presentation, and gates
// turn flow on the optional animator's promises.
//
// Intents:
//   { type: 'move',      unitId, toGx, toGy }
//   { type: 'attack',    unitId, targetId }
//   { type: 'skill',     unitId, targetId, skillIndex }
//   { type: 'endTurn',   unitId, facing? }
//   { type: 'draftPick', classKey }
//   { type: 'draftPlace', gx, gy }

import { getPath } from '../world/grid.js';
import { facingToward } from './unit.js';
import { computeStrikes, applyDamage } from './combat.js';
import { getAvailableSkills, applySkillEffect } from './skills.js';
import { endTurn as simEndTurn, checkGameOver } from './turn.js';
import { buildInitiativeOrder, reanimateDeadUnit, handleUnitDeath } from './summon.js';
import { tryCollectPowerup, spawnPowerup } from './powerups.js';
import { pickClass as draftPickClass, placeUnit as draftPlaceUnit, getCurrentDraftPlayer } from './draft.js';

export class GameController {
  constructor(state, events) {
    this.state = state;
    this.events = events;
    this.animator = null;
    this._chain = Promise.resolve();
    this._deathAnims = [];

    this.ctx = {
      state,
      rng: state.rng,
      emit: (type, payload) => events.emit(type, payload),
      onDeath: (victim, killer) => this._onDeath(victim, killer),
    };

    events.on('unitDied', ({ unit }) => {
      this._deathAnims.push(this._anim('animateDeath', unit));
    });
    events.on('powerupCheck', ({ unit }) => {
      if (unit && unit.hp > 0) tryCollectPowerup(this.ctx, unit);
    });
  }

  setAnimator(animator) {
    this.animator = animator;
  }

  _onDeath(victim, killer) {
    // Delegate to the summon/death system (handles cascade + events).
    handleUnitDeath(this.ctx, victim, killer);
  }

  async _anim(method, ...args) {
    if (this.animator && typeof this.animator[method] === 'function') {
      try {
        await this.animator[method](...args);
      } catch (err) {
        console.error(`[animator] ${method}`, err);
      }
    }
  }

  async _awaitDeathAnims() {
    if (this._deathAnims.length === 0) return;
    const pending = this._deathAnims;
    this._deathAnims = [];
    await Promise.all(pending);
  }

  async _resolveDeathsAndCheckGameOver() {
    await this._awaitDeathAnims();
    checkGameOver(this.ctx);
  }

  /** Serialize intents so animations never overlap. Returns a promise. */
  dispatch(intent) {
    const run = () => this._apply(intent);
    this._chain = this._chain.then(run, run);
    return this._chain;
  }

  async _apply(intent) {
    switch (intent.type) {
      case 'move': return this._move(intent);
      case 'attack': return this._attack(intent);
      case 'skill': return this._skill(intent);
      case 'endTurn': return this._endTurn(intent);
      case 'draftPick': return this._draftPick(intent);
      case 'draftPlace': return this._draftPlace(intent);
      default: console.warn('[dispatch] unknown intent', intent);
    }
  }

  // --- Playing-phase intents ---

  async _move(intent) {
    const { state } = this;
    const unit = state.getUnitById(intent.unitId);
    if (!unit || unit.hp <= 0 || state.hasMoved) return;
    if (unit.id !== state.initiativeOrder[state.currentTurnIndex]) return;
    const path = getPath(state.world, unit.x, unit.y, intent.toGx, intent.toGy, state.units, unit);
    if (!path || path.length <= 1) return;

    const fromGx = unit.x;
    const fromGy = unit.y;
    await this._anim('animateMove', unit, path);
    const last = path[path.length - 1];
    const prev = path[path.length - 2];
    unit.x = last.x;
    unit.y = last.y;
    // Face the direction of the final step (matches the walk animation).
    unit.facing = facingToward(prev.x, prev.y, last.x, last.y) || unit.facing;
    state.updateUnitTileIndex(unit, fromGx, fromGy);
    state.hasMoved = true;
    tryCollectPowerup(this.ctx, unit);
    this.events.emit('unitMoved', { unit, from: { gx: fromGx, gy: fromGy }, to: { gx: unit.x, gy: unit.y }, path });
    this._finishAction(unit);
  }

  async _attack(intent) {
    const { state } = this;
    const unit = state.getUnitById(intent.unitId);
    const target = state.getUnitById(intent.targetId);
    if (!unit || unit.hp <= 0 || !target || target.hp <= 0 || state.hasAttacked) return;
    if (unit.id !== state.initiativeOrder[state.currentTurnIndex]) return;

    // Turn to face the target before striking (the victim's own facing decides flanking).
    unit.facing = facingToward(unit.x, unit.y, target.x, target.y) || unit.facing;
    const strikes = intent.strikes || computeStrikes(unit, target, state.rng);
    state.hasAttacked = true;
    this.events.emit('unitAttack', { attacker: unit, target, strikes });
    await this._anim('animateAttack', unit, target, strikes, (strikeIndex) => {
      if (target.hp <= 0) return;
      const s = strikes[strikeIndex];
      if (!s) return;
      applyDamage(this.ctx, { attacker: unit, victim: target, amount: s.damage, preHit: s.isHit });
    });
    await this._resolveDeathsAndCheckGameOver();
    await this._finishAction(unit);
  }

  async _skill(intent) {
    const { state } = this;
    const unit = state.getUnitById(intent.unitId);
    if (!unit || unit.hp <= 0 || state.hasAttacked) return;
    if (unit.id !== state.initiativeOrder[state.currentTurnIndex]) return;

    const skills = getAvailableSkills(state, unit);
    const skill = skills[intent.skillIndex];
    if (!skill || skill.disabled) return;
    const target = intent.targetId != null ? state.getUnitById(intent.targetId) : null;
    if (skill.target === 'enemy' && (!target || target.hp <= 0)) return;

    if (target && (target.x !== unit.x || target.y !== unit.y)) {
      unit.facing = facingToward(unit.x, unit.y, target.x, target.y) || unit.facing;
    }
    unit.mp = Math.max(0, unit.mp - (skill.cost || 0));
    state.hasAttacked = true;
    this.events.emit('unitSkill', { unit, target, skill });
    await this._anim('animateSkill', unit, target, skill);

    applySkillEffect(this.ctx, unit, target, skill, {
      reanimate: (summoner, corpse) => reanimateDeadUnit(this.ctx, summoner, corpse),
    });
    await this._resolveDeathsAndCheckGameOver();
    await this._finishAction(unit);
  }

  async _endTurn(intent) {
    const { state } = this;
    if (state.phase !== 'playing') return;
    if (intent && intent.unitId != null && intent.unitId !== state.initiativeOrder[state.currentTurnIndex]) return;
    const unit = state.getActiveUnit();
    if (unit && intent?.facing) {
      unit.facing = intent.facing;
      this.events.emit('unitFacingChanged', { unit });
    }
    await this._doEndTurn();
  }

  async _doEndTurn() {
    const { state } = this;
    const turnPayload = simEndTurn(this.ctx);
    await this._resolveDeathsAndCheckGameOver();
    if (state.phase !== 'playing') return;
    this._maybeSpawnPowerups();
    if (turnPayload) this.events.emit('turnChanged', turnPayload);
    this.events.emit('afterEndTurn', { unit: state.getActiveUnit() });
  }

  async _finishAction(unit) {
    const { state } = this;
    if (state.phase !== 'playing') return;
    if (unit.hp <= 0) {
      await this._doEndTurn();
    } else if (state.hasMoved && state.hasAttacked) {
      this.events.emit('turnEndRequested', { unit });
    } else {
      this.events.emit('actionResolved', { unit });
    }
  }

  _maybeSpawnPowerups() {
    const { state } = this;
    const turnsLeft = state.settings.maxTurns - state.turnCount;
    for (const threshold of [30, 20, 10]) {
      if (turnsLeft <= threshold && !state.powerupSpawnedTurnsLeft[threshold]) {
        spawnPowerup(this.ctx, turnsLeft);
        state.powerupSpawnedTurnsLeft[threshold] = true;
      }
    }
  }

  // --- Draft intents ---

  _draftPick(intent) {
    draftPickClass(this.ctx, intent.classKey);
  }

  _draftPlace(intent) {
    draftPlaceUnit(this.ctx, intent.gx, intent.gy);
  }

  // --- Transitions ---

  /** Begin the playing phase after the draft completes. */
  startPlaying() {
    const { state } = this;
    state.phase = 'playing';
    state.turnCount = 0;
    state.initiativeOrder = buildInitiativeOrder(state);
    state.currentTurnIndex = 0;
    state.hasMoved = false;
    state.hasAttacked = false;
    const active = state.getActiveUnit();
    state.currentPlayer = active ? active.player : 1;
    this.events.emit('playingStarted', { unit: active, currentPlayer: state.currentPlayer });
    this.events.emit('turnChanged', { unit: active, currentPlayer: state.currentPlayer, turnCount: 0 });
  }

  get currentDraftPlayer() {
    return getCurrentDraftPlayer(this.state);
  }
}
