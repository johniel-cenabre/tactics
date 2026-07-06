// Pointer -> tile raycasting helpers shared by the input controller.

import * as THREE from 'three';
import { BASE_HEIGHT } from '../config.js';
import { worldPointToTileCoords } from '../world/grid.js';

export function pointerToNdc(container, clientX, clientY) {
  const rect = container.getBoundingClientRect();
  return {
    x: ((clientX - rect.left) / rect.width) * 2 - 1,
    y: -((clientY - rect.top) / rect.height) * 2 + 1,
  };
}

function tileHitFromIntersect(world, hit) {
  const o = hit.object;
  if (o.isInstancedMesh && o.userData.tileGridGround) {
    const id = hit.instanceId;
    if (id == null || id < 0) return null;
    const gxa = o.userData.insideTileGx;
    const gya = o.userData.insideTileGy;
    if (gxa && gya && id < gxa.length) return { gx: gxa[id], gy: gya[id] };
    return null;
  }
  if (o.userData.mergedOutsidePick) {
    return worldPointToTileCoords(world, hit.point);
  }
  return null;
}

/** Walkable path tile surface height (elev=1); used so decoration never blocks picks. */
const PICK_PLANE_Y = (BASE_HEIGHT + BASE_HEIGHT * 0.35) / 2 + BASE_HEIGHT / 2;

export function createTilePicker(view) {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -PICK_PLANE_Y);
  const hitPoint = new THREE.Vector3();

  return function pickTile(ndcX, ndcY) {
    pointer.set(ndcX, ndcY);
    raycaster.setFromCamera(pointer, view.camera);

    // Project through trees/rocks onto the board plane so vertical decoration
    // cannot steal clicks meant for a tile underneath.
    if (raycaster.ray.intersectPlane(groundPlane, hitPoint)) {
      const tile = worldPointToTileCoords(view.world, hitPoint);
      if (tile) return tile;
    }

    const intersects = raycaster.intersectObjects(view.tilesGroup.children, true);
    let fallback = null;
    for (const hit of intersects) {
      const tile = tileHitFromIntersect(view.world, hit);
      if (!tile) continue;
      if (view.world.path[tile.gy][tile.gx]) return tile;
      if (!fallback) fallback = tile;
    }
    return fallback;
  };
}
