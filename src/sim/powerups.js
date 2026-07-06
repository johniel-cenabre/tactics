// Powerups: gems that spawn on the central path at set turn thresholds and grant
// a temporary buff (or heal) when a unit steps on them. Sim tracks type + tile;
// the renderer owns the gem/glow meshes via events.

import { TileType } from '../world/tile-types.js';

export const POWERUP_TYPES = ['red', 'yellow', 'purple', 'blue', 'green'];
export const POWERUP_COLORS = { red: 0xe53935, yellow: 0xfdd835, purple: 0x8e24aa, blue: 0x1e88e5, green: 0x43a047 };

export function getValidPowerupSpawnTiles(state) {
  const { world } = state;
  const centerY = Math.floor(world.h / 2);
  const tiles = [];
  for (let gx = 0; gx < world.w; gx++) {
    const gy = centerY;
    if (world.type[gy][gx] !== TileType.PATH) continue;
    if (state.getUnitAtTile(gx, gy) != null) continue;
    const key = state.tileKey(gx, gy);
    if (state.powerups.has(key)) continue;
    tiles.push({ gx, gy });
  }
  return tiles;
}

export function spawnPowerup(ctx, turnsLeft) {
  const { state, rng } = ctx;
  const valid = getValidPowerupSpawnTiles(state);
  if (valid.length === 0) return;
  const tile = valid[Math.floor(rng.next() * valid.length)];
  const type = POWERUP_TYPES[Math.floor(rng.next() * POWERUP_TYPES.length)];
  const key = state.tileKey(tile.gx, tile.gy);
  state.powerups.set(key, { type });
  ctx.emit('powerupSpawned', { key, type, gx: tile.gx, gy: tile.gy, turnsLeft });
}

export function tryCollectPowerup(ctx, unit) {
  const { state } = ctx;
  const key = state.tileKey(unit.x, unit.y);
  const pu = state.powerups.get(key);
  if (!pu) return;
  state.powerups.delete(key);
  ctx.emit('powerupCollected', { key, type: pu.type, unit, gx: unit.x, gy: unit.y });
  if (pu.type === 'green') {
    unit.hp = Math.min(unit.maxHp, unit.hp + 6);
    ctx.emit('floatingText', { gx: unit.x, gy: unit.y, text: '+6 HP', kind: 'buff' });
  } else {
    const duration = 3;
    let label = '';
    if (pu.type === 'red') { unit.tempBuff = { str: 4, duration }; label = 'STR'; }
    else if (pu.type === 'yellow') { unit.tempBuff = { agi: 4, duration }; label = 'AGI'; }
    else if (pu.type === 'purple') { unit.tempBuff = { int: 4, duration }; label = 'INT'; }
    else if (pu.type === 'blue') { unit.tempBuff = { dex: 4, duration }; label = 'DEX'; }
    ctx.emit('floatingText', { gx: unit.x, gy: unit.y, text: `+4 ${label}`, kind: 'buff' });
  }
  ctx.emit('unitStatsChanged', { unit });
  ctx.emit('buffAnimation', { unit });
}
