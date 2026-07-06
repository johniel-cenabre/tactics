// Scene/renderer/camera/lights owner + render loop. Presentation only: it renders
// whatever is in the scene graph and exposes worldPos + requestRender helpers that
// the other render modules use. No game rules live here.

import * as THREE from 'three';
import { TILE_SIZE, BASE_HEIGHT } from '../config.js';
import { buildTileMesh, halfW, halfH } from './tiles.js';

export const INITIAL_ZOOM = 17;

/** Soft vertical gradient: clear blue sky with a pale horizon haze. */
function createAfternoonSkyTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 4;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, '#6a9fd4');
  grad.addColorStop(0.48, '#9ec4e8');
  grad.addColorStop(0.82, '#c8daf0');
  grad.addColorStop(1, '#dce8f4');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 4, 512);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  return tex;
}

/** Outdoor PMREM for unit PBR — bright midday sky, not studio grey. */
function createOutdoorDaylightEnvironment() {
  const env = new THREE.Scene();
  env.add(new THREE.HemisphereLight(0xb8d8f8, 0x3a4030, 1.0));
  const sun = new THREE.DirectionalLight(0xfffaf0, 0.72);
  sun.position.set(0.6, 1.9, 0.5);
  env.add(sun);
  const fill = new THREE.DirectionalLight(0xa0b8d8, 0.14);
  fill.position.set(-1.2, 0.8, -1);
  env.add(fill);
  return env;
}

export class SceneView {
  constructor(container, world) {
    this.container = container;
    this.world = world;
    this.hw = halfW(world);
    this.hh = halfH(world);

    this.scene = new THREE.Scene();
    const horizonFog = 0xc4d4e4;
    this.scene.background = createAfternoonSkyTexture();
    this.scene.fog = new THREE.Fog(horizonFog, 38, 100);

    this.camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 200);

    const ambient = new THREE.AmbientLight(0xf4f8ff, 0.24);
    this.scene.add(ambient);
    const hemi = new THREE.HemisphereLight(0xb0d0f0, 0x3d4a34, 0.36);
    this.scene.add(hemi);
    // High early-afternoon sun — bright, slightly warm white.
    const sun = new THREE.DirectionalLight(0xfff8ee, 1.28);
    sun.position.set(32, 48, 22);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 120;
    sun.shadow.camera.left = -50; sun.shadow.camera.right = 50;
    sun.shadow.camera.top = 50; sun.shadow.camera.bottom = -50;
    sun.shadow.normalBias = 0.02;
    this.scene.add(sun);
    this.sun = sun;
    // Faint cool bounce from the opposite side — keeps shadows readable, not muddy.
    const fill = new THREE.DirectionalLight(0xc0d0e8, 0.14);
    fill.position.set(-24, 28, -18);
    this.scene.add(fill);

    this.tilesGroup = buildTileMesh(world);
    this.scene.add(this.tilesGroup);
    this._calmTerrainIBL();

    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.shadowMap.autoUpdate = false;
    this.renderer.shadowMap.needsUpdate = true;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    container.appendChild(this.renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(createOutdoorDaylightEnvironment(), 0.04).texture;
    pmrem.dispose();

    this.needsRender = true;
    this.lastInteractionTime = 0;
    this.lastIdleFrameTime = 0;
    this._frameCount = 0;
    this._loopActive = false;
    this._cameraActive = false;
    this._tweensActive = false;
    this._damagedIdleActive = false;
    // Materials that pulse (highlight tiles). Populated by highlights module.
    this.pulseMaterials = [];

    this._resize = this._resize.bind(this);
    this._animate = this._animate.bind(this);
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  worldPos(gx, gy, out) {
    const w = this.world;
    const topY = BASE_HEIGHT + w.height[gy][gx] * 0.35;
    const surfaceY = topY / 2 + BASE_HEIGHT / 2;
    const v = out || new THREE.Vector3();
    v.set(gx * TILE_SIZE - this.hw + TILE_SIZE / 2, surfaceY, gy * TILE_SIZE - this.hh + TILE_SIZE / 2);
    return v;
  }

  surfaceY(gx, gy) {
    const topY = BASE_HEIGHT + this.world.height[gy][gx] * 0.35;
    return topY / 2 + BASE_HEIGHT / 2;
  }

  /** Mark the scene dirty without treating it as user interaction (camera/tween pans). */
  markDirty() {
    this.needsRender = true;
    if (!this._loopActive) this._animate();
  }

  setPresentationActive({ camera = this._cameraActive, tweens = this._tweensActive } = {}) {
    this._cameraActive = camera;
    this._tweensActive = tweens;
    if (camera || tweens) this.markDirty();
  }

  /** Shadow casters moved — recompute the shadow map on the next draw. */
  invalidateShadows() {
    this.renderer.shadowMap.needsUpdate = true;
    this.markDirty();
  }

  requestRender() {
    this.needsRender = true;
    this.lastInteractionTime = performance.now();
    if (!this._loopActive) this._animate();
  }

  setWorld(world) {
    // Dispose old terrain and rebuild for a new world (e.g. short-map PvP).
    this.scene.remove(this.tilesGroup);
    this.tilesGroup.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => m.dispose());
      }
    });
    this.world = world;
    this.hw = halfW(world);
    this.hh = halfH(world);
    this.tilesGroup = buildTileMesh(world);
    this.scene.add(this.tilesGroup);
    this._calmTerrainIBL();
    this.requestRender();
  }

  // Keep the environment map's fill off the terrain so the world doesn't read as
  // over-lit; units still use their own (higher) envMapIntensity for reflections.
  _calmTerrainIBL() {
    this.tilesGroup.traverse((o) => {
      if (!o.isMesh || !o.material) return;
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => { if ('envMapIntensity' in m) m.envMapIntensity = 0.22; });
    });
  }

  _resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.requestRender();
  }

  start() {
    this._loopActive = true;
    this._animate();
  }

  _animate(now = 0) {
    const swayList = this.tilesGroup.userData && this.tilesGroup.userData.swayingFoliage;
    if (this.lastInteractionTime === 0) this.lastInteractionTime = now;
    const isIdle = now - this.lastInteractionTime > 500;
    const hasPulse = this.pulseMaterials.length > 0;
    const hasSway = swayList && swayList.length > 0 && !isIdle;
    const presenting = this._cameraActive || this._tweensActive;

    if (hasSway) {
      const tw = now * 0.0017;
      for (let i = 0; i < swayList.length; i++) {
        const { group: fol, phase } = swayList[i];
        fol.rotation.z = Math.sin(tw + phase) * 0.14;
        fol.rotation.x = Math.sin(tw * 0.79 + phase * 1.55) * 0.09;
        fol.rotation.y = Math.sin(tw * 0.62 + phase * 0.9) * 0.055;
      }
      this.needsRender = true;
    }

    if (this.onFrame) this.onFrame(now);
    this._frameCount++;

    const shouldRender = () => {
      if (!this.needsRender) return;
      const pulse = 0.6 + 0.4 * Math.sin(now * 0.004);
      const pm = this.pulseMaterials;
      for (let i = 0; i < pm.length; i++) {
        const base = i % 2 === 0 ? 0.4 : 0.7;
        pm[i].opacity = base * pulse;
      }
      this.renderer.render(this.scene, this.camera);
      this.renderer.shadowMap.needsUpdate = false;
      this.needsRender = false;
    };

    if (!isIdle && !presenting && this._frameCount % 2 === 0) this.needsRender = true;
    // Camera pans only move the view — half-rate is enough and avoids hitches.
    const skipFrame = presenting && this._cameraActive && !this._tweensActive && this._frameCount % 2 !== 0;

    if (isIdle && !presenting) {
      const idleInterval = this._damagedIdleActive ? 0 : 100;
      if ((hasPulse || this.needsRender) && now - this.lastIdleFrameTime >= idleInterval) {
        this.lastIdleFrameTime = now;
        shouldRender();
      }
    } else if (!skipFrame) {
      shouldRender();
    }

    const keepLoop = hasSway || hasPulse || !isIdle || presenting || this._damagedIdleActive;
    if (keepLoop) {
      this._loopActive = true;
      requestAnimationFrame(this._animate);
    } else {
      this._loopActive = false;
    }
  }
}
