// Powerup pickups renderer. Subscribes to sim events and mirrors the powerup set as
// floating gem + tile-glow meshes. Keyed by tile index like the sim state.

import * as THREE from 'three';
import { POWERUP_COLORS } from '../sim/powerups.js';

const GLOW_SIZE = 0.92;

export class PowerupRenderer {
  constructor(sceneView, bus) {
    this.view = sceneView;
    this.group = new THREE.Group();
    sceneView.scene.add(this.group);
    this.byKey = new Map();
    bus.on('powerupSpawned', ({ gx, gy, type }) => this.add(gx, gy, type));
    bus.on('powerupCollected', ({ gx, gy }) => this.remove(gx, gy));
    bus.on('worldRebuilt', () => this.clear());
  }

  _key(gx, gy) {
    return gy * this.view.world.w + gx;
  }

  add(gx, gy, type) {
    const colorHex = POWERUP_COLORS[type];
    const gem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.22, 0),
      new THREE.MeshStandardMaterial({ color: colorHex, metalness: 0.3, roughness: 0.4 })
    );
    gem.rotation.x = Math.PI / 4;
    gem.castShadow = true;
    gem.receiveShadow = true;
    const pos = this.view.worldPos(gx, gy);
    pos.y += 0.35;
    gem.position.copy(pos);
    this.group.add(gem);

    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(GLOW_SIZE, GLOW_SIZE),
      new THREE.MeshBasicMaterial({ color: colorHex, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
    );
    glow.rotation.x = -Math.PI / 2;
    const gp = this.view.worldPos(gx, gy);
    glow.position.set(gp.x, this.view.surfaceY(gx, gy) + 0.01, gp.z);
    this.group.add(glow);

    this.byKey.set(this._key(gx, gy), { gem, glow });
    this.view.requestRender();
  }

  remove(gx, gy) {
    const key = this._key(gx, gy);
    const entry = this.byKey.get(key);
    if (!entry) return;
    for (const m of [entry.gem, entry.glow]) {
      this.group.remove(m);
      m.geometry.dispose();
      if (m.material && m.material.dispose) m.material.dispose();
    }
    this.byKey.delete(key);
    this.view.requestRender();
  }

  clear() {
    for (const key of Array.from(this.byKey.keys())) {
      const gx = key % this.view.world.w;
      const gy = (key / this.view.world.w) | 0;
      this.remove(gx, gy);
    }
  }
}
