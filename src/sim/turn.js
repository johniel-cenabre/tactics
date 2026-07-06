// Turn/initiative system: level-ups, end-of-turn upkeep (buff/debuff ticks, MP
// regen, poison, base/center level-ups), initiative advance, and win/timeout
// checks. Emits events; the controller sequences animations around them.

import { getEffectiveStat } from './unit.js';
import { TileType } from '../world/tile-types.js';
import { getCenterTiles } from '../world/worldgen.js';
import { buildInitiativeOrder, handleUnitDeath } from './summon.js';
import { recordGameOver } from './records.js';

const TEMP_DEBUFF_DAMAGERS = ['poison'];

export function levelUpUnit(ctx, unit) {
  if (unit.level >= 3) return;
  const hpRatio = unit.maxHp > 0 ? unit.hp / unit.maxHp : 1;
  unit.level += 1;
  const boost = (v) => Math.max(1, Math.ceil(v * 1.1));
  unit.maxHp = boost(unit.maxHp);
  unit.maxMp = boost(unit.maxMp);
  unit.hp = Math.max(1, Math.min(unit.maxHp, Math.ceil(hpRatio * unit.maxHp)));
  unit.mp = Math.max(1, Math.min(unit.maxMp, Math.ceil(hpRatio * unit.maxMp)));
  unit.str = boost(unit.str);
  unit.agi = boost(unit.agi);
  unit.vit = boost(unit.vit);
  unit.dex = boost(unit.dex);
  unit.luk = boost(unit.luk);
  unit.int = boost(unit.int);
  if (unit.range > 3) unit.range = boost(unit.range);
  ctx.emit('levelUp', { unit, level: unit.level });
  ctx.emit('unitStatsChanged', { unit });
}

/** Advance to the next living unit. Returns turn payload for the controller to
 *  emit after death animations; may end the game by turn limit synchronously. */
export function endTurn(ctx) {
  const { state } = ctx;
  const n = state.initiativeOrder.length;
  if (n === 0) return;

  const currentUnit = state.getActiveUnit();
  if (currentUnit && currentUnit.tempDebuff) {
    currentUnit.tempDebuff.duration--;
    if (currentUnit.tempDebuff.duration <= 0) currentUnit.tempDebuff = undefined;
  }
  if (currentUnit && currentUnit.tempBuff) {
    currentUnit.tempBuff.duration--;
    if (currentUnit.tempBuff.duration <= 0) currentUnit.tempBuff = undefined;
  }
  if (currentUnit && currentUnit.hp > 0) {
    const regen = Math.ceil(getEffectiveStat(currentUnit, 'int') * 0.15);
    currentUnit.mp = Math.min(currentUnit.maxMp, currentUnit.mp + regen);
    ctx.emit('unitStatsChanged', { unit: currentUnit });
  }
  if (currentUnit && currentUnit.hp > 0) {
    const gx = currentUnit.x;
    const gy = currentUnit.y;
    if (state.world.type[gy][gx] === TileType.CENTER && currentUnit.level === 1) levelUpUnit(ctx, currentUnit);
    const enemyBase = currentUnit.player === 1 ? TileType.BASE_TOP : TileType.BASE_BOTTOM;
    if (state.world.type[gy][gx] === enemyBase && currentUnit.level === 2) levelUpUnit(ctx, currentUnit);
  }

  state.turnCount++;
  if (state.turnCount >= state.settings.maxTurns) {
    endGameByTurnLimit(ctx);
    return;
  }

  const prevTurnIndex = state.currentTurnIndex;
  let next = (prevTurnIndex + 1) % n;
  let steps = 0;
  while (steps < n) {
    const u = state.getUnitById(state.initiativeOrder[next]);
    if (u && u.hp > 0) break;
    next = (next + 1) % n;
    steps++;
  }
  const startingNewRound = n > 0 && next <= prevTurnIndex;
  state.currentTurnIndex = next;

  // Poison tick at start of the next unit's turn (may kill and skip forward).
  const nextUnit = state.getActiveUnit();
  for (let s2 = 0; s2 < n; s2++) {
    const cur = state.getActiveUnit();
    if (!cur || cur.hp <= 0) break;
    const tempDebuffs = cur.tempDebuff || {};
    const name = TEMP_DEBUFF_DAMAGERS.find((k) => !isNaN(tempDebuffs[k]));
    const value = tempDebuffs[name] || 0;
    if (value <= 0) break;
    cur.hp = Math.max(0, cur.hp - value);
    ctx.emit('floatingText', { gx: cur.x, gy: cur.y, text: String(value), kind: name });
    ctx.emit('unitStatsChanged', { unit: cur });
    if (cur.hp <= 0) {
      handleUnitDeath(ctx, cur, null);
      let nn = (state.currentTurnIndex + 1) % n;
      let s3 = 0;
      while (s3 < n) {
        const u = state.getUnitById(state.initiativeOrder[nn]);
        if (u && u.hp > 0) break;
        nn = (nn + 1) % n;
        s3++;
      }
      state.currentTurnIndex = nn;
      continue;
    }
    break;
  }

  // Start-of-turn auto-heal buff.
  const starting = state.getActiveUnit();
  if (starting && starting.hp > 0) {
    const buff = starting.tempBuff;
    const healAmt = buff && buff.heal != null && !isNaN(buff.heal) ? Number(buff.heal) : 0;
    if (healAmt > 0) {
      const before = starting.hp;
      starting.hp = Math.min(starting.maxHp, starting.hp + healAmt);
      const applied = starting.hp - before;
      if (applied > 0) {
        ctx.emit('floatingText', { gx: starting.x, gy: starting.y, text: `+${applied}`, kind: 'heal' });
        ctx.emit('unitStatsChanged', { unit: starting });
      }
    }
  }

  state.currentPlayer = starting && starting.hp > 0 ? starting.player : 1;
  state.hasMoved = false;
  state.hasAttacked = false;

  if (startingNewRound) {
    state.initiativeOrder = buildInitiativeOrder(state);
    state.currentTurnIndex = 0;
  }

  return {
    unit: state.getActiveUnit(),
    currentPlayer: state.currentPlayer,
    turnCount: state.turnCount,
  };
}

export function checkGameOver(ctx) {
  const { state } = ctx;
  if (state.phase !== 'playing') return;
  const p1Alive = state.units.some((u) => u.player === 1 && u.hp > 0 && !u.summonedBy);
  const p2Alive = state.units.some((u) => u.player === 2 && u.hp > 0 && !u.summonedBy);
  if (!p1Alive) declareWinner(ctx, 2);
  else if (!p2Alive) declareWinner(ctx, 1);
}

export function endGameByTurnLimit(ctx) {
  const { state } = ctx;
  const world = state.world;
  const centerTiles = getCenterTiles(world);
  const centerKeys = new Set(centerTiles.map((c) => c.gy * world.w + c.gx));
  const onCenter = (p) =>
    state.units.filter((u) => u.hp > 0 && u.player === p && !u.summonedBy && centerKeys.has(u.y * world.w + u.x)).length;
  const totalHp = (p) =>
    state.units.filter((u) => u.hp > 0 && u.player === p && !u.summonedBy).reduce((sum, u) => sum + u.hp, 0);
  const p1OnCenter = onCenter(1);
  const p2OnCenter = onCenter(2);
  let winningPlayer = null;
  let title = '';
  if (p1OnCenter > p2OnCenter) {
    winningPlayer = 1;
    title = `Time's up! ${playerLabel(state, 1)} wins! (${p1OnCenter} vs ${p2OnCenter} units on center base)`;
  } else if (p2OnCenter > p1OnCenter) {
    winningPlayer = 2;
    title = `Time's up! ${playerLabel(state, 2)} wins! (${p2OnCenter} vs ${p1OnCenter} units on center base)`;
  } else {
    const p1TotalHp = totalHp(1);
    const p2TotalHp = totalHp(2);
    if (p1TotalHp > p2TotalHp) {
      winningPlayer = 1;
      title = `Time's up! Draw on center — ${playerLabel(state, 1)} wins on total HP (${p1TotalHp} vs ${p2TotalHp})`;
    } else if (p2TotalHp > p1TotalHp) {
      winningPlayer = 2;
      title = `Time's up! Draw on center — ${playerLabel(state, 2)} wins on total HP (${p2TotalHp} vs ${p1TotalHp})`;
    } else {
      title = `Draw! (equal units on center: ${p1OnCenter}, equal HP)`;
    }
  }
  declareWinner(ctx, winningPlayer, title);
}

function playerLabel(state, player) {
  return state.playerNames[player] || `Player ${player}`;
}

function declareWinner(ctx, winningPlayer, titleOverride) {
  const { state } = ctx;
  if (state.phase === 'gameover') return;
  state.phase = 'gameover';
  const table = recordGameOver(state.units, winningPlayer);
  ctx.emit('gameOver', {
    winner: winningPlayer,
    title: titleOverride != null ? titleOverride : `${playerLabel(state, winningPlayer)} wins!`,
    classRecord: table,
  });
}

export { playerLabel };
