// Map editor interaction: paint tiles, place/erase units, resize, load/save.
// Active only while ui screen === 'editor'. Reuses the game scene/camera/units.

import { pointerToNdc, createTilePicker } from '../input/raycast.js';
import { TileType } from '../world/tile-types.js';
import {
  createBlankMap,
  mapFromWorld,
  worldFromMap,
  unitsFromMap,
  validateMap,
} from '../world/map-format.js';
import { createUnit, defaultFacing } from '../sim/unit.js';
import { patchUi, uiState } from '../core/store.js';
import { DEFAULT_SETTINGS } from '../config.js';

const CLICK_DRAG_THRESHOLD_PX = 5;
const ROTATE_SENSITIVITY = 0.004;
const BLOCKED = new Set([TileType.TREE, TileType.WATER, TileType.ROCK]);

function normalizeAngle(a) {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
}

export class EditorController {
  constructor({ view, state, camera, units, bus }) {
    this.view = view;
    this.state = state;
    this.camera = camera;
    this.units = units;
    this.bus = bus;
    this.container = view.container;
    this.pickTile = createTilePicker(view);

    this.enabled = false;
    this.mapName = 'Untitled';
    this.tool = 'terrain'; // 'terrain' | 'unit' | 'erase'
    this.tileType = TileType.PATH;
    this.height = 1;
    this.unitPlayer = 1;
    this.unitClass = 'knight';
    this.unitLevel = 1;
    this.unitFacing = defaultFacing(this.unitPlayer);

    this._painting = false;
    this._wantPaint = false; // true when this gesture should paint (click or Shift-drag)
    this._dirty = false;
    this._lastPaintKey = -1;
    this._isPanning = false;
    this._isRotating = false;
    this._ctrlOnDown = false;
    this._shiftOnDown = false;
    this._prevNdc = null;
    this._downPixel = { x: 0, y: 0 };
    this._isTouch = false;
    this._pinchDist = null;
    this._pinchAngle = null;

    this._bind();
  }

  setEnabled(on) {
    this.enabled = !!on;
    if (!on) {
      this._painting = false;
      this._wantPaint = false;
      this._dirty = false;
      this._prevNdc = null;
      this._isPanning = false;
      this._isRotating = false;
    } else {
      this.container.style.cursor = 'grab';
    }
  }

  _syncUi(extra = {}) {
    const cur = uiState.value.editor || {};
    patchUi({
      editor: {
        ...cur,
        mapName: this.mapName,
        tool: this.tool,
        tileType: this.tileType,
        height: this.height,
        unitPlayer: this.unitPlayer,
        unitClass: this.unitClass,
        unitLevel: this.unitLevel,
        unitFacing: { ...this.unitFacing },
        w: this.state.world?.w ?? 0,
        h: this.state.world?.h ?? 0,
        unitCount: this.state.units.length,
        ...extra,
      },
    });
  }

  setTool(tool) {
    this.tool = tool;
    this._syncUi();
  }

  setTileType(t) {
    this.tileType = t;
    this.tool = 'terrain';
    this._syncUi();
  }

  setHeight(h) {
    this.height = Math.max(0, Math.min(2, h | 0));
    this.tool = 'terrain';
    this._syncUi();
  }

  setUnitPlayer(p) {
    this.unitPlayer = p === 2 ? 2 : 1;
    this.unitFacing = defaultFacing(this.unitPlayer);
    this.tool = 'unit';
    this._syncUi();
  }

  setUnitClass(classKey) {
    this.unitClass = classKey;
    this.tool = 'unit';
    this._syncUi();
  }

  setUnitLevel(level) {
    this.unitLevel = Math.max(1, Math.min(3, level | 0));
    this.tool = 'unit';
    this._syncUi();
  }

  setUnitFacing(facing) {
    const dx = Math.sign(facing?.dx || 0);
    const dy = Math.sign(facing?.dy || 0);
    if (Math.abs(dx) + Math.abs(dy) !== 1) return;
    this.unitFacing = { dx, dy };
    this.tool = 'unit';
    this._syncUi();
  }

  setMapName(name) {
    this.mapName = String(name || 'Untitled');
    this._syncUi();
  }

  /** Start a fresh blank map and enter editor mode. */
  open(w = DEFAULT_SETTINGS.gridW, h = DEFAULT_SETTINGS.gridH) {
    const map = createBlankMap(w, h, 'Untitled');
    this.load(map);
    this.setEnabled(true);
  }

  load(map) {
    const result = validateMap(map);
    if (!result.ok) throw new Error(result.error);

    this.mapName = map.name || 'Untitled';
    this.state.clearUnits();
    this.units.clear();

    const world = worldFromMap(map);
    this.state.world = world;
    this.view.setWorld(world);
    this.bus.emit('worldRebuilt', {});

    const placements = unitsFromMap(map);
    for (const p of placements) {
      if (BLOCKED.has(world.type[p.y][p.x])) continue;
      if (this.state.getUnitAtTile(p.x, p.y)) continue;
      const unit = createUnit({
        id: this.state.ids.next(),
        player: p.player,
        classKey: p.class,
        x: p.x,
        y: p.y,
        level: p.level,
        tag: p.tag || null,
      });
      if (p.facing) unit.facing = { dx: p.facing.dx, dy: p.facing.dy };
      this.state.addUnit(unit);
      this.units.addUnit(unit);
    }
    this.units.updateBorders();
    this.view.invalidateShadows();
    this._syncUi({ error: '' });
  }

  serialize() {
    return mapFromWorld(this.state.world, this.state.units, this.mapName);
  }

  newBlank(w, h) {
    const map = createBlankMap(w || this.state.world.w, h || this.state.world.h, this.mapName);
    this.load(map);
  }

  resize(w, h) {
    w = Math.max(5, Math.min(50, w | 0));
    h = Math.max(5, Math.min(50, h | 0));
    const old = this.state.world;
    if (!old || (old.w === w && old.h === h)) {
      this._syncUi();
      return;
    }

    const type = Array.from({ length: h }, (_, y) =>
      Array.from({ length: w }, (_, x) =>
        (y < old.h && x < old.w) ? old.type[y][x] : TileType.GRASS));
    const height = Array.from({ length: h }, (_, y) =>
      Array.from({ length: w }, (_, x) =>
        (y < old.h && x < old.w) ? old.height[y][x] : 0));

    const kept = this.state.units.filter((u) => u.x < w && u.y < h);
    const map = {
      version: 1,
      name: this.mapName,
      w,
      h,
      type,
      height,
      units: kept.map((u) => {
        const entry = {
          player: u.player,
          class: u.class,
          level: u.level,
          x: u.x,
          y: u.y,
          facing: u.facing || defaultFacing(u.player),
        };
        if (u.tag) entry.tag = u.tag;
        return entry;
      }),
    };
    this.load(map);
  }

  _rebuildWorldMeta() {
    const world = this.state.world;
    const map = mapFromWorld(world, [], this.mapName);
    const rebuilt = worldFromMap(map);
    world.path = rebuilt.path;
    world.centerTiles = rebuilt.centerTiles;
    world.topBaseX = rebuilt.topBaseX;
    world.topBaseY = rebuilt.topBaseY;
    world.botBaseX = rebuilt.botBaseX;
    world.botBaseY = rebuilt.botBaseY;
  }

  _flushTerrain() {
    if (!this._dirty) return;
    this._rebuildWorldMeta();
    this.view.setWorld(this.state.world);
    this.bus.emit('worldRebuilt', {});
    // Re-add unit meshes after terrain rebuild (setWorld only rebuilds tiles).
    this.units.clear();
    for (const u of this.state.units) this.units.addUnit(u);
    this.units.updateBorders();
    this.view.invalidateShadows();
    this._dirty = false;
    this._syncUi();
  }

  applyTile(gx, gy) {
    const world = this.state.world;
    if (!world || gx < 0 || gx >= world.w || gy < 0 || gy >= world.h) return;
    const key = gy * world.w + gx;
    if (key === this._lastPaintKey) return;
    this._lastPaintKey = key;

    if (this.tool === 'erase') {
      const unit = this.state.getUnitAtTile(gx, gy);
      if (unit) {
        this.state.removeUnit(unit);
        this.units.removeUnit(unit);
        this._syncUi();
      }
      return;
    }

    if (this.tool === 'unit') {
      if (BLOCKED.has(world.type[gy][gx])) return;
      const existing = this.state.getUnitAtTile(gx, gy);
      if (existing) {
        this.state.removeUnit(existing);
        this.units.removeUnit(existing);
      }
      const unit = createUnit({
        id: this.state.ids.next(),
        player: this.unitPlayer,
        classKey: this.unitClass,
        x: gx,
        y: gy,
        level: this.unitLevel,
      });
      unit.facing = { ...this.unitFacing };
      this.state.addUnit(unit);
      this.units.addUnit(unit);
      this.units.updateBorders();
      this.view.invalidateShadows();
      this._syncUi();
      return;
    }

    // terrain
    world.type[gy][gx] = this.tileType;
    world.height[gy][gx] = this.height;
    world.path[gy][gx] = !BLOCKED.has(this.tileType);
    this._dirty = true;

    if (BLOCKED.has(this.tileType)) {
      const unit = this.state.getUnitAtTile(gx, gy);
      if (unit) {
        this.state.removeUnit(unit);
        this.units.removeUnit(unit);
      }
    }
  }

  // --- DOM ---

  _bind() {
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this._onContextMenu = (e) => {
      if (!this.enabled) return;
      if (this._isUiTarget(e.target)) return;
      e.preventDefault();
    };
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);

    window.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    window.addEventListener('wheel', this._onWheel, { passive: false });
    window.addEventListener('contextmenu', this._onContextMenu);
    this.container.addEventListener('touchstart', this._onTouchStart, { passive: false });
    this.container.addEventListener('touchmove', this._onTouchMove, { passive: false });
    this.container.addEventListener('touchend', this._onTouchEnd, { passive: false });
    this.container.addEventListener('touchcancel', this._onTouchEnd, { passive: false });
  }

  _isUiTarget(target) {
    const el = target && (target.nodeType === 1 ? target : target.parentElement);
    return !!(el && el.closest(
      'app-root, #map-editor-panel, #mode-select-overlay:not(.hidden), button, input, select, textarea, a',
    ));
  }

  _onPointerDown(e) {
    if (!this.enabled || e.pointerType === 'touch') return;
    if (this._isUiTarget(e.target)) return;
    // Right / middle button: pan only (no paint).
    const panOnly = e.button === 1 || e.button === 2;
    this._downPixel = { x: e.clientX, y: e.clientY };
    this._isTouch = false;
    this._ctrlOnDown = e.ctrlKey;
    this._shiftOnDown = e.shiftKey;
    this._prevNdc = pointerToNdc(this.container, e.clientX, e.clientY);
    // Left + Shift = paint stroke; plain left = click-to-paint / drag-to-pan.
    // Right / middle = pan only.
    this._wantPaint = e.button === 0 && !e.ctrlKey && !panOnly;
    this._painting = this._wantPaint && e.shiftKey;
    this._lastPaintKey = -1;
    if (panOnly) e.preventDefault();
    this.container.style.cursor = this._painting ? 'crosshair' : 'grab';
  }

  _onPointerMove(e) {
    if (!this.enabled || e.pointerType === 'touch') return;
    this._drag(e.clientX, e.clientY, e.ctrlKey, e.shiftKey);
  }

  _drag(clientX, clientY, ctrlKey, shiftKey = false) {
    if (this._prevNdc == null) return;
    const dx = clientX - this._downPixel.x;
    const dy = clientY - this._downPixel.y;
    if (!this._isPanning && !this._isRotating && !this._painting
      && (Math.abs(dx) > CLICK_DRAG_THRESHOLD_PX || Math.abs(dy) > CLICK_DRAG_THRESHOLD_PX)) {
      if (ctrlKey || this._ctrlOnDown) {
        this._isRotating = true;
        this._wantPaint = false;
      } else if (this._wantPaint && (shiftKey || this._shiftOnDown || this._painting)) {
        // Shift-drag (or already painting): brush stroke
        this._painting = true;
      } else {
        // Default drag = pan (same as in-game)
        this._isPanning = true;
        this._wantPaint = false;
      }
      this.camera.disableFollow();
    }
    if (this._isRotating) {
      this.camera.rotate(dx, dy);
      this._downPixel = { x: clientX, y: clientY };
      this.container.style.cursor = 'grabbing';
    } else if (this._isPanning) {
      const curr = pointerToNdc(this.container, clientX, clientY);
      this.camera.panFromNdc(this._prevNdc, curr, 1);
      this._prevNdc = curr;
      this.container.style.cursor = 'grabbing';
    } else if (this._painting) {
      const ndc = pointerToNdc(this.container, clientX, clientY);
      const tile = this.pickTile(ndc.x, ndc.y);
      if (tile) this.applyTile(tile.gx, tile.gy);
      this.container.style.cursor = 'crosshair';
    }
  }

  _onPointerUp(e) {
    if (!this.enabled || e.pointerType === 'touch') return;
    this._endDrag(e.clientX, e.clientY);
  }

  _endDrag(clientX, clientY) {
    // Click (no pan/rotate/stroke): apply tool once.
    if (this._prevNdc != null && !this._isPanning && !this._isRotating && this._wantPaint) {
      const ndc = pointerToNdc(this.container, clientX, clientY);
      const tile = this.pickTile(ndc.x, ndc.y);
      if (tile) this.applyTile(tile.gx, tile.gy);
    }
    this._flushTerrain();
    this._prevNdc = null;
    this._isPanning = false;
    this._isRotating = false;
    this._ctrlOnDown = false;
    this._shiftOnDown = false;
    this._painting = false;
    this._wantPaint = false;
    this._lastPaintKey = -1;
    this.container.style.cursor = this.enabled ? 'grab' : 'grab';
  }

  _onWheel(e) {
    if (!this.enabled) return;
    if (this._isUiTarget(e.target)) return;
    e.preventDefault();
    this.camera.disableFollow();
    this.camera.zoom(e.deltaY);
  }

  _touchCoords(e) {
    if (e.touches && e.touches.length > 0) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    if (e.changedTouches && e.changedTouches.length > 0) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    return { x: 0, y: 0 };
  }

  _touchDistance(touches) {
    if (!touches || touches.length < 2) return 0;
    return Math.hypot(touches[1].clientX - touches[0].clientX, touches[1].clientY - touches[0].clientY);
  }

  _touchAngle(touches) {
    return Math.atan2(
      touches[1].clientY - touches[0].clientY,
      touches[1].clientX - touches[0].clientX,
    );
  }

  _beginTwoFingerTouch(touches) {
    this._pinchDist = this._touchDistance(touches);
    this._pinchAngle = this._touchAngle(touches);
    this._prevNdc = null;
    this._isPanning = false;
    this._isRotating = false;
    this._painting = false;
  }

  _onTouchStart(e) {
    if (!this.enabled) return;
    if (this._isUiTarget(e.target)) return;
    if (e.touches.length === 2) {
      this._beginTwoFingerTouch(e.touches);
      return;
    }
    if (e.touches.length !== 1) return;
    this._pinchDist = null;
    this._pinchAngle = null;
    const c = this._touchCoords(e);
    this._downPixel = { x: c.x, y: c.y };
    this._isTouch = true;
    this._ctrlOnDown = false;
    this._shiftOnDown = false;
    this._prevNdc = pointerToNdc(this.container, c.x, c.y);
    this._wantPaint = true;
    this._painting = false;
    this._lastPaintKey = -1;
  }

  _onTouchMove(e) {
    if (!this.enabled) return;
    if (this._isUiTarget(e.target)) return;
    if (e.touches.length === 2) {
      e.preventDefault();
      if (this._pinchDist == null) {
        this._beginTwoFingerTouch(e.touches);
        return;
      }
      const d = this._touchDistance(e.touches);
      const angle = this._touchAngle(e.touches);
      if (this._pinchDist != null && this._pinchDist > 0) {
        this.camera.disableFollow();
        this.camera.zoom(-(d - this._pinchDist), 0.15);
      }
      if (this._pinchAngle != null) {
        const delta = normalizeAngle(angle - this._pinchAngle);
        if (Math.abs(delta) > 0.001) {
          this.camera.disableFollow();
          this.camera.rotate(-delta / ROTATE_SENSITIVITY, 0);
        }
      }
      this._pinchDist = d;
      this._pinchAngle = angle;
      return;
    }
    if (e.touches.length !== 1) return;
    e.preventDefault();
    const c = this._touchCoords(e);
    // One-finger drag pans (tap still paints via _endDrag).
    this._drag(c.x, c.y, false, false);
  }

  _onTouchEnd(e) {
    if (!this.enabled) return;
    if (e.touches.length === 1) {
      this._pinchDist = null;
      this._pinchAngle = null;
      const t = e.touches[0];
      this._downPixel = { x: t.clientX, y: t.clientY };
      this._isTouch = true;
      this._prevNdc = pointerToNdc(this.container, t.clientX, t.clientY);
      this._wantPaint = true;
      this._painting = false;
      this._lastPaintKey = -1;
      return;
    }
    if (e.touches.length < 2) {
      this._pinchDist = null;
      this._pinchAngle = null;
    }
    if (e.touches.length >= 1) return;
    const c = this._touchCoords(e);
    this._isTouch = false;
    this._endDrag(c.x, c.y);
  }
}
