// Unit presentation: owns the per-unit meshes, tile borders, the active-turn
// pointer, and the move/attack/skill/death animations. It subscribes to sim
// events and also implements the animator interface consumed by GameController
// (animateMove / animateAttack / animateSkill return promises the sim awaits).

import * as THREE from 'three';
import { TILE_SIZE } from '../config.js';
import { createTilingNoiseTexture } from './tiles.js';
import { createHumanFigure, setWalkPose, resetWalkPose, setMeleeAttackPose, meleeLungeFactor, resetAttackPose, clearWoundedPose, refreshDamagedPose, setDamageFlinchPose, setDeathPose, applyDeathTint, applyWoundedTint, syncWoundedBaseY, woundedSinkOffset, setMeshFacing } from './figure.js';
import { isPooledGeometry, isPooledMaterial } from './figure-assets.js';
import { easeInOutQuad, linear } from '../core/tween.js';

const MELEE_ATTACK_MS = 400;
const RANGED_ATTACK_MS = 280;
const DAMAGE_FLINCH_MS = 320;
const PROJECTILE_MS = 280;
const DEATH_ANIMATION_MS = 780;
const SUMMON_GROW_MS = 400;
const LEVEL_UP_ANIMATION_MS = 600;

const PLAYER1_BORDER_COLOR = 0x3366ff;
const PLAYER2_BORDER_COLOR = 0xcc3333;
const TILE_BORDER_THICKNESS = 0.02;
const LOW_HP_VISUAL_THRESHOLD = 0.35;
const BORDER_MATS = {
  1: new THREE.MeshBasicMaterial({ color: PLAYER1_BORDER_COLOR, side: THREE.DoubleSide }),
  2: new THREE.MeshBasicMaterial({ color: PLAYER2_BORDER_COLOR, side: THREE.DoubleSide }),
};
const PROJECTILE_GEO = new THREE.CylinderGeometry(0.035, 0.035, 0.4, 5);

/** P1 (bottom base) faces toward the top; P2 (top base) faces toward the bottom. */
function defaultFacingForPlayer(player) {
  return player === 1 ? Math.PI : 0;
}

/** Mesh yaw from a sim facing vector (world x≈gx, world z≈gy → yaw = atan2(dx, dy)). */
function facingAngle(unit) {
  const f = unit.facing;
  if (f && (f.dx !== 0 || f.dy !== 0)) return Math.atan2(f.dx, f.dy);
  return defaultFacingForPlayer(unit.player);
}

export class UnitRenderer {
  constructor(sceneView, state, bus, tween) {
    this.view = sceneView;
    this.state = state;
    this.bus = bus;
    this.tween = tween;
    this.meshes = new Map();
    this.bumpMap = createTilingNoiseTexture(64);
    /** Optional camera-follow callback(mesh.position) set by the camera controller. */
    this.cameraFollow = null;

    this.bordersGroup = new THREE.Group();
    this.view.scene.add(this.bordersGroup);
    this.borderGeo = this._makeBorderGeometry(TILE_SIZE, TILE_BORDER_THICKNESS);

    this.turnPointer = this._makeTurnPointer();
    this.view.scene.add(this.turnPointer);

    this.facingArrow = this._makeFacingArrow();
    this.view.scene.add(this.facingArrow);
    this._facingMode = false;
    this._lastHp = new Map();

    this.view.onFrame = (now) => this._updateDamagedIdle(now);
    this._subscribe();
  }

  // --- event wiring ---

  _subscribe() {
    const b = this.bus;
    b.on('unitPlaced', ({ unit }) => { this.addUnit(unit); this.updateBorders(); this.view.invalidateShadows(); });
    b.on('unitSummoned', ({ unit, grayscale }) => {
      this.addUnit(unit, grayscale);
      // Match summoner facing when spawned mid-battle; draft placements keep team default.
      if (unit.summonedBy != null) {
        const summonerMesh = this.meshes.get(unit.summonedBy);
        const mesh = this.meshes.get(unit.id);
        if (summonerMesh && mesh) {
          setMeshFacing(mesh, summonerMesh.userData.facingYaw ?? summonerMesh.rotation.y);
        }
      }
      this.updateBorders();
      this.updatePointer();
    });
    b.on('unitRemoved', ({ unit }) => this.removeUnit(unit));
    b.on('unitStatsChanged', ({ unit, selfCost }) => {
      const prev = this._lastHp.get(unit.id);
      const tookDamage = prev != null && unit.hp < prev && unit.hp > 0;
      this._lastHp.set(unit.id, unit.hp);
      this.updateSlash(unit);
      this.updateLowHp(unit);
      if (tookDamage && !selfCost) {
        const lost = (prev - unit.hp) / Math.max(1, unit.maxHp);
        this.animateDamageFlinch(unit, lost);
      }
    });
    b.on('unitKnockback', ({ unit, to }) => this.moveTo(unit, to.gx, to.gy));
    b.on('unitFacingChanged', ({ unit }) => this.syncFacing(unit));
    b.on('unitMoved', ({ unit }) => { this.updateBorders(); this.updatePointer(); this.view.invalidateShadows(); });
    b.on('buffAnimation', ({ unit }) => this.animatePulse(unit));
    b.on('levelUp', ({ unit }) => this.animateLevelUp(unit));
    b.on('turnChanged', () => { this.updatePointer(); });
    b.on('playingStarted', () => { this.updateBorders(); this.updatePointer(); });
    b.on('actionResolved', () => this.updatePointer());
    b.on('initiativeChanged', () => this.updatePointer());
    b.on('worldRebuilt', () => this.clear());
  }

  // --- mesh lifecycle ---

  addUnit(unit, grayscale = false) {
    if (this.meshes.has(unit.id)) this.removeUnit(unit);
    const body = createHumanFigure(unit.player, unit.class, unit.hairColor, this.bumpMap);
    body.position.copy(this.view.worldPos(unit.x, unit.y));
    body.userData.baseY = body.position.y;
    setMeshFacing(body, facingAngle(unit));
    body.castShadow = true;
    body.userData.unitId = unit.id;
    body.userData.poseMode = 'idle';

    const legH = 0.28, torsoH = 0.28, torsoD = 0.12;
    const slashMark = new THREE.Mesh(
      new THREE.PlaneGeometry(0.18, 0.04),
      new THREE.MeshBasicMaterial({ color: 0x5c2018, side: THREE.DoubleSide, depthTest: true, depthWrite: false })
    );
    slashMark.position.set(0, legH + torsoH / 2, torsoD / 2 + 0.02);
    slashMark.rotation.x = -Math.PI / 2;
    slashMark.rotation.z = Math.PI / 4;
    slashMark.visible = unit.maxHp > 0 && unit.hp < unit.maxHp && unit.hp > 0;
    body.add(slashMark);
    body.userData.slashMark = slashMark;

    this.view.scene.add(body);
    this.meshes.set(unit.id, body);
    this._lastHp.set(unit.id, unit.hp);
    if (grayscale) this._makeGrayscale(body);
    this.updateLowHp(unit);
    this.view.requestRender();
  }

  removeUnit(unit) {
    const id = typeof unit === 'object' ? unit.id : unit;
    const mesh = this.meshes.get(id);
    if (!mesh) return;
    this.view.scene.remove(mesh);
    mesh.traverse((o) => {
      if (o.geometry && !isPooledGeometry(o.geometry)) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => { if (!isPooledMaterial(m)) m.dispose(); });
      }
    });
    this.meshes.delete(id);
    this._lastHp.delete(id);
    this.updateBorders();
    this.view.requestRender();
  }

  clear() {
    for (const id of Array.from(this.meshes.keys())) this.removeUnit(id);
  }

  moveTo(unit, gx, gy) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh) return;
    mesh.position.copy(this.view.worldPos(gx, gy));
    syncWoundedBaseY(mesh);
    this.updateBorders();
    this.view.requestRender();
  }

  updateSlash(unit) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh || !mesh.userData.slashMark) return;
    mesh.userData.slashMark.visible = unit.maxHp > 0 && unit.hp < unit.maxHp && unit.hp > 0;
    this.view.requestRender();
  }

  updateLowHp(unit) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh) return;
    const hpRatio = unit.maxHp > 0 ? unit.hp / unit.maxHp : 1;
    const damageRatio = unit.hp > 0 && unit.maxHp > 0 ? 1 - hpRatio : 0;
    mesh.userData.damageRatio = damageRatio;

    if (damageRatio <= 0) {
      clearWoundedPose(mesh);
      this.view.requestRender();
      return;
    }

    const isLow = hpRatio < LOW_HP_VISUAL_THRESHOLD;
    const severity = isLow
      ? Math.min(1, (LOW_HP_VISUAL_THRESHOLD - hpRatio) / LOW_HP_VISUAL_THRESHOLD)
      : 0;
    mesh.userData.woundedSeverity = severity;
    mesh.userData.baseY = mesh.position.y + woundedSinkOffset(mesh);
    refreshDamagedPose(mesh);
    applyWoundedTint(mesh, Math.max(severity, damageRatio * 0.35));
    if (mesh.userData.slashMark) mesh.userData.slashMark.visible = true;
    this.view.requestRender();
  }

  _updateDamagedIdle(now) {
    let any = false;
    for (const [id, mesh] of this.meshes) {
      const unit = this.state.getUnitById(id);
      if (!unit || unit.hp <= 0 || unit.hp >= unit.maxHp) continue;
      if (mesh.userData.poseMode !== 'idle') continue;
      any = true;
      refreshDamagedPose(mesh, now * 0.003 + id * 0.73);
    }
    this.view._damagedIdleActive = any;
    if (any) this.view.markDirty();
  }

  animateDamageFlinch(unit, damageRatio) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh || mesh.userData.poseMode === 'death') return;
    mesh.userData.poseMode = 'flinch';
    mesh.userData.flinchSide = Math.random() > 0.5 ? 1 : -1;
    const intensity = Math.min(1, 0.3 + damageRatio * 1.6);
    return this._run(DAMAGE_FLINCH_MS, (t) => {
      setDamageFlinchPose(mesh, t, intensity);
      this.view.invalidateShadows();
    }).then(() => {
      mesh.userData.poseMode = 'idle';
      this.updateLowHp(unit);
    });
  }

  _makeGrayscale(mesh) {
    const DULL = 0.55;
    mesh.traverse((child) => {
      if (!child.isMesh || !child.material || !child.material.color) return;
      const c = child.material.color;
      const luminance = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
      const gray = Math.max(0, Math.min(1, luminance * DULL));
      c.setRGB(gray, gray, gray);
    });
  }

  setFacingMode(active) {
    this._facingMode = !!active;
    this.updatePointer();
  }

  syncFacing(unit) {
    const mesh = this.meshes.get(unit.id);
    if (mesh) setMeshFacing(mesh, facingAngle(unit));
    this.view.requestRender();
  }

  showFacingArrow(unitId) {
    const mesh = this.meshes.get(unitId);
    if (!mesh) return;
    this.facingArrow.removeFromParent();
    mesh.add(this.facingArrow);
    this.facingArrow.position.set(0, 1.2, 0);
    this.facingArrow.rotation.set(-Math.PI / 2, 0, Math.PI);
    this.facingArrow.visible = true;
    this.view.requestRender();
  }

  setFacingPreview(unitId, facing) {
    const mesh = this.meshes.get(unitId);
    if (!mesh || !facing) return;
    setMeshFacing(mesh, Math.atan2(facing.dx, facing.dy));
    this.view.requestRender();
  }

  hideFacingArrow() {
    this.facingArrow.visible = false;
    this.facingArrow.removeFromParent();
    this.view.scene.add(this.facingArrow);
    this.view.requestRender();
  }

  _makeFacingArrow() {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.35, 8),
      new THREE.MeshBasicMaterial({ color: 0x44aaff }),
    );
    cone.visible = false;
    return cone;
  }

  // --- borders + turn pointer ---

  _makeBorderGeometry(size, thickness) {
    const half = size / 2;
    const inner = half - thickness;
    const shape = new THREE.Shape();
    shape.moveTo(-half, -half); shape.lineTo(half, -half); shape.lineTo(half, half); shape.lineTo(-half, half); shape.lineTo(-half, -half);
    const hole = new THREE.Path();
    hole.moveTo(-inner, -inner); hole.lineTo(inner, -inner); hole.lineTo(inner, inner); hole.lineTo(-inner, inner); hole.lineTo(-inner, -inner);
    shape.holes.push(hole);
    return new THREE.ShapeGeometry(shape);
  }

  updateBorders(excludeUnitId = null) {
    const units = this.state.units;
    const sig = units.filter((u) => u.hp > 0 && u.id !== excludeUnitId).map((u) => `${u.id},${u.x},${u.y},${u.player}`).sort().join('|');
    if (this._borderSig === sig && this._borderExclude === excludeUnitId) return;
    this._borderSig = sig;
    this._borderExclude = excludeUnitId;

    while (this.bordersGroup.children.length) this.bordersGroup.remove(this.bordersGroup.children[0]);

    units.filter((u) => u.hp > 0 && u.id !== excludeUnitId).forEach((unit) => {
      const p = this.view.worldPos(unit.x, unit.y);
      const y = this.view.surfaceY(unit.x, unit.y) + 0.02;
      const mat = BORDER_MATS[unit.player] || BORDER_MATS[1];
      const mesh = new THREE.Mesh(this.borderGeo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(p.x, y, p.z);
      this.bordersGroup.add(mesh);
    });
    this.view.requestRender();
  }

  _makeTurnPointer() {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.25, 6), new THREE.MeshBasicMaterial({ color: 0x7ba3f5 }));
    cone.rotation.x = Math.PI;
    cone.visible = false;
    return cone;
  }

  updatePointer() {
    const state = this.state;
    const colors = { 1: 0x7ba3f5, 2: 0xee7a8f };
    const hide = () => {
      this.turnPointer.visible = false;
      this.turnPointer.removeFromParent();
      this.view.scene.add(this.turnPointer);
    };
    if (state.phase !== 'playing' || state.initiativeOrder.length === 0 || this._facingMode) return hide();
    const unit = state.getActiveUnit();
    if (!unit || unit.hp <= 0) return hide();
    const mesh = this.meshes.get(unit.id);
    if (!mesh) { this.turnPointer.visible = false; return; }
    this.turnPointer.removeFromParent();
    mesh.add(this.turnPointer);
    this.turnPointer.position.set(0, 1.15, 0);
    if (this.turnPointer.material) this.turnPointer.material.color.setHex(colors[unit.player] ?? colors[1]);
    this.turnPointer.visible = true;
    this.view.requestRender();
  }

  // --- tween helper ---

  _run(duration, onUpdate, ease = easeInOutQuad) {
    return new Promise((resolve) => {
      this.tween.add({ duration, ease, onUpdate: (e) => { onUpdate(e); this.view.requestRender(); }, onComplete: resolve });
    });
  }

  // --- animator interface (awaited by the sim) ---

  async animateMove(unit, path) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh || path.length < 2) return;
    mesh.userData.poseMode = 'walk';
    this.updateBorders(unit.id);

    // One continuous traverse — per-tile ease-in/out made each step hitch like a limp.
    const points = path.map((p) => this.view.worldPos(p.x, p.y).clone());
    const segs = [];
    let totalLen = 0;
    for (let i = 1; i < points.length; i++) {
      const len = points[i].distanceTo(points[i - 1]);
      segs.push({ from: points[i - 1], to: points[i], len, start: totalLen });
      totalLen += len;
    }
    const stepMs = this.state.settings.moveDurationMs || 300;
    const dur = stepMs * (path.length - 1);

    await this._run(dur, (t) => {
      const dist = t * totalLen;
      let seg = segs[segs.length - 1];
      for (let i = 0; i < segs.length; i++) {
        if (dist <= segs[i].start + segs[i].len) {
          seg = segs[i];
          break;
        }
      }
      const local = seg.len > 1e-8 ? Math.min(1, (dist - seg.start) / seg.len) : 1;
      mesh.position.lerpVectors(seg.from, seg.to, local);

      const dx = seg.to.x - seg.from.x;
      const dz = seg.to.z - seg.from.z;
      if (dx * dx + dz * dz > 1e-6) setMeshFacing(mesh, Math.atan2(dx, dz));

      // Gait follows distance traveled so stride rate stays even across the path.
      const bob = setWalkPose(mesh, dist / TILE_SIZE);
      mesh.position.y += bob;
      // Shadow map is manual-update (autoUpdate off); refresh it each frame so
      // the cast shadow tracks the unit instead of freezing at the start tile.
      this.view.invalidateShadows();
      if (this.cameraFollow) this.cameraFollow(mesh.position);
    }, linear);

    mesh.position.copy(points[points.length - 1]);
    resetWalkPose(mesh);
    syncWoundedBaseY(mesh);
    mesh.userData.poseMode = 'idle';
    this.updateBorders();
  }

  async animateAttack(unit, target, strikes, onStrike) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh) return;
    mesh.userData.poseMode = 'attack';
    const start = this.view.worldPos(unit.x, unit.y).clone();
    const end = this.view.worldPos(target.x, target.y).clone();
    const dx = end.x - start.x, dz = end.z - start.z;
    if (dx * dx + dz * dz > 1e-6) setMeshFacing(mesh, Math.atan2(dx, dz));
    const range = unit.range != null ? unit.range : 1;
    const count = Math.max(1, (strikes && strikes.length) || 1);
    const meleeStyle = range <= 1 ? 'slash' : 'thrust';
    const dist = Math.hypot(dx, dz);
    // Close to weapon range: stop just short of the target so meshes don't overlap.
    const stopGap = TILE_SIZE * (meleeStyle === 'slash' ? 0.14 : 0.22);

    for (let i = 0; i < count; i++) {
      if (range > 2) {
        await this._fireProjectile(start, end, 0xffcc44);
        if (onStrike) onStrike(i);
      } else {
        const baseY = start.y;
        const lungeTarget = start.clone();
        if (dist > 1e-6) {
          const lungeDist = Math.max(0, dist - stopGap);
          lungeTarget.add(new THREE.Vector3(dx / dist, 0, dz / dist).multiplyScalar(lungeDist));
        }
        let struck = false;
        await this._run(MELEE_ATTACK_MS, (t) => {
          setMeleeAttackPose(mesh, t, { style: meleeStyle });
          const lunge = meleeLungeFactor(t);
          mesh.position.lerpVectors(start, lungeTarget, lunge);
          // Dip slightly on wind-up, rise into the strike.
          mesh.position.y = baseY + Math.sin(t * Math.PI) * 0.035 * (1 - (mesh.userData.woundedSeverity || 0) * 0.5);
          if (!struck && t >= 0.36 && onStrike) {
            struck = true;
            onStrike(i);
          }
          this.view.invalidateShadows();
        });
        resetAttackPose(mesh);
        syncWoundedBaseY(mesh);
      }
    }
    mesh.position.copy(start);
    syncWoundedBaseY(mesh);
    mesh.userData.poseMode = 'idle';
  }

  async animateSkill(unit, target, skill, onHit) {
    // Lance skills — reuse the melee attack lunge (not a projectile).
    if ((skill?.effectKey === 'pierce' || skill?.effectKey === 'impale') && target) {
      await this.animateAttack(unit, target, [{}], onHit ? () => onHit() : undefined);
      this.updateLowHp(unit);
      return;
    }
    const mesh = this.meshes.get(unit.id);
    if (!mesh) {
      if (onHit) onHit();
      return;
    }
    mesh.userData.poseMode = 'attack';
    if (target && (target.x !== unit.x || target.y !== unit.y)) {
      const start = this.view.worldPos(unit.x, unit.y).clone();
      const end = this.view.worldPos(target.x, target.y).clone();
      const dx = end.x - start.x, dz = end.z - start.z;
      if (dx * dx + dz * dz > 1e-6) setMeshFacing(mesh, Math.atan2(dx, dz));
      const range = (skill && skill.range) || 1;
      if (range > 1) {
        await this._fireProjectile(start, end, 0x66ccff);
        if (onHit) onHit();
        mesh.userData.poseMode = 'idle';
        return;
      }
    }
    // Self / adjacent skill: a quick upward flash; resolve at the peak.
    const baseY = mesh.position.y;
    let struck = false;
    await this._run(220, (e) => {
      mesh.position.y = baseY + Math.sin(e * Math.PI) * 0.18;
      if (!struck && e >= 0.45 && onHit) {
        struck = true;
        onHit();
      }
    });
    if (!struck && onHit) onHit();
    mesh.position.y = baseY;
    mesh.userData.poseMode = 'idle';
    this.updateLowHp(unit);
  }

  _fireProjectile(start, end, colorHex) {
    const mat = new THREE.MeshBasicMaterial({ color: colorHex });
    const proj = new THREE.Mesh(PROJECTILE_GEO, mat);
    const from = start.clone(); from.y += 0.6;
    const to = end.clone(); to.y += 0.6;
    proj.position.copy(from);
    proj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
    this.view.scene.add(proj);
    return this._run(PROJECTILE_MS, (e) => proj.position.lerpVectors(from, to, e), (t) => t).then(() => {
      this.view.scene.remove(proj);
      mat.dispose();
    });
  }

  animateDeath(unit) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh) {
      this.updateBorders();
      this.updatePointer();
      return Promise.resolve();
    }
    const live = this.state.getUnitById(unit.id);
    if (!live || live.hp > 0) return Promise.resolve();
    mesh.userData.poseMode = 'death';
    mesh.userData.deathFallSide = Math.random() > 0.5 ? 1 : -1;
    mesh.userData.deathBaseY = mesh.position.y;
    return this._run(DEATH_ANIMATION_MS, (e) => {
      setDeathPose(mesh, e);
      applyDeathTint(mesh, e);
      this.view.invalidateShadows();
    }, easeInOutQuad).then(() => {
      this.view.invalidateShadows();
      this.removeUnit(unit);
      this.updatePointer();
    });
  }

  animatePulse(unit) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh) return;
    mesh.userData.poseMode = 'attack';
    this._run(SUMMON_GROW_MS, (e) => {
      const s = 1 + Math.sin(e * Math.PI) * 0.18;
      mesh.scale.setScalar(s);
    }).then(() => {
      mesh.userData.poseMode = 'idle';
      this.updateLowHp(unit);
    });
  }

  animateLevelUp(unit) {
    const mesh = this.meshes.get(unit.id);
    if (!mesh) return;
    mesh.userData.poseMode = 'attack';
    // Spin a full turn for flair, then restore the original facing so the unit
    // doesn't end up pointing a new direction after leveling up.
    const baseRot = mesh.userData.facingYaw ?? mesh.rotation.y;
    this._run(LEVEL_UP_ANIMATION_MS, (e) => {
      const s = 1 + Math.sin(e * Math.PI) * 0.25;
      mesh.scale.setScalar(s);
      mesh.rotation.y = baseRot + e * Math.PI * 2;
    }).then(() => {
      setMeshFacing(mesh, baseRot);
      mesh.userData.poseMode = 'idle';
      this.updateLowHp(unit);
    });
  }
}
