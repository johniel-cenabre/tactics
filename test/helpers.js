// Shared test helpers: a flat all-walkable world and a no-op SimContext.

import { TileType } from '../src/world/tile-types.js';
import { Rng } from '../src/core/rng.js';

/** A flat w×h world where every tile is walkable PATH. */
export function flatWorld(w = 8, h = 8) {
  const type = [];
  const height = [];
  const path = [];
  for (let y = 0; y < h; y++) {
    type.push(new Array(w).fill(TileType.PATH));
    height.push(new Array(w).fill(0));
    path.push(new Array(w).fill(true));
  }
  return { w, h, type, height, path, centerTiles: [] };
}

/** Minimal SimContext capturing emitted events for assertions. */
export function makeCtx(state, seed = 1) {
  const events = [];
  const deaths = [];
  const ctx = {
    state,
    rng: new Rng(seed),
    emit: (type, payload) => events.push({ type, payload }),
    onDeath: (victim, killer) => deaths.push({ victim, killer }),
  };
  return { ctx, events, deaths };
}
