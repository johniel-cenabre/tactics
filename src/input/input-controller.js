// Input controller: translates pointer/touch/wheel into camera moves and, on a
// click, into game intents dispatched through the command bus. It owns the local
// interaction state (which unit is selected, and whether we're in move / attack /
// skill / facing targeting) and drives the highlight overlay. It never mutates the
// sim directly — every action becomes an intent.

import { pointerToNdc, createTilePicker } from './raycast.js';
import { getReachable, getTilesInManhattanRange, hasLineOfSight } from '../world/grid.js';
import { getEffectiveStat } from '../sim/unit.js';
import { getAvailableSkills, getSkillTargetTiles, getSkillRangeTiles } from '../sim/skills.js';
import { cardinalFacingsForUnit, facingHighlightTiles } from '../ai/helpers.js';
import { facingToward } from '../sim/unit.js';

const CLICK_DRAG_THRESHOLD_PX = 5;
/** Matches camera-controller ROTATE_SENSITIVITY — twist radians → rotate() pixel args. */
const ROTATE_SENSITIVITY = 0.004;

function normalizeAngle(a) {
  while (a > Math.PI) a -= 2 * Math.PI;
  while (a < -Math.PI) a += 2 * Math.PI;
  return a;
}

function snapFacingToward(unit, gx, gy, allowedFacings) {
  if (!allowedFacings.length) return unit.facing;
  const direct = facingToward(unit.x, unit.y, gx, gy);
  if (direct && allowedFacings.some((f) => f.dx === direct.dx && f.dy === direct.dy)) return direct;
  return snapFacingFromTile(null, unit, gx, gy, allowedFacings);
}

function snapFacingFromTile(view, unit, gx, gy, allowedFacings) {
  if (!allowedFacings.length) return unit.facing;
  let angle;
  if (view) {
    const unitPos = view.worldPos(unit.x, unit.y);
    const clickPos = view.worldPos(gx, gy);
    const dx = clickPos.x - unitPos.x;
    const dz = clickPos.z - unitPos.z;
    angle = dx * dx + dz * dz > 1e-6 ? Math.atan2(dx, dz) : Math.atan2(unit.facing.dx, unit.facing.dy);
  } else {
    const dx = gx - unit.x;
    const dy = gy - unit.y;
    angle = dx !== 0 || dy !== 0 ? Math.atan2(dx, dy) : Math.atan2(unit.facing.dx, unit.facing.dy);
  }
  let best = allowedFacings[0];
  let bestDiff = Math.abs(normalizeAngle(angle - Math.atan2(best.dx, best.dy)));
  for (let i = 1; i < allowedFacings.length; i++) {
    const f = allowedFacings[i];
    const d = Math.abs(normalizeAngle(angle - Math.atan2(f.dx, f.dy)));
    if (d < bestDiff) {
      bestDiff = d;
      best = f;
    }
  }
  return best;
}

export class InputController {
  constructor({ view, state, controller, camera, highlights, bus, dispatch, units }) {
    this.view = view;
    this.state = state;
    this.controller = controller;
    // Outbound intent sink: controller.dispatch offline, or the netplay sender
    // online (so local moves are also forwarded to the peer). Swappable by main.
    this.dispatch = dispatch || ((intent) => controller.dispatch(intent));
    this.camera = camera;
    this.highlights = highlights;
    this.units = units;
    this.bus = bus;
    this.container = view.container;
    this.pickTile = createTilePicker(view);

    this.selectedUnitId = null;
    this.mode = 'move'; // 'move' | 'attack' | 'skill' | 'facing'
    this.skillIndex = -1;
    this.rangeKeys = new Set(); // valid target/move tile keys
    this._allowedFacings = [];
    this.busy = false;
    /** When false, pointer/touch/wheel are ignored (e.g. map editor is active). */
    this.enabled = true;

    this._isPanning = false;
    this._isRotating = false;
    this._ctrlOnDown = false;
    this._prevNdc = null;
    this._downPixel = { x: 0, y: 0 };
    this._isTouch = false;
    this._pinchDist = null;
    this._pinchAngle = null;

    this._bind();
    this._subscribe();
  }

  _key(gx, gy) {
    return gy * this.state.world.w + gx;
  }

  _subscribe() {
    const refresh = () => this.onTurnRefreshed();
    this.bus.on('turnChanged', () => { this._exitFacingMode(); refresh(); });
    this.bus.on('playingStarted', refresh);
    this.bus.on('actionResolved', refresh);
    this.bus.on('turnEndRequested', () => {
      if (this.state.phase !== 'playing' || !this.state.isHumanTurn()) return;
      this.enterFacingMode();
    });
  }

  onTurnRefreshed() {
    if (this.mode === 'facing') return;
    this.clearSelection();
    const state = this.state;
    if (state.phase !== 'playing' || !state.isHumanTurn()) return;
    const unit = state.getActiveUnit();
    if (unit && unit.hp > 0) this.selectUnitForMove(unit);
  }

  // --- interaction modes (called by UI / clicks) ---

  selectUnitForMove(unit) {
    this.selectedUnitId = unit.id;
    this.mode = 'move';
    this.skillIndex = -1;
    if (this.state.hasMoved) {
      this.rangeKeys = new Set();
      this.highlights.clear();
    } else {
      const reachable = getReachable(this.state.world, unit.x, unit.y, getEffectiveStat(unit, 'agi'), this.state.units, unit);
      const tiles = [];
      this.rangeKeys = new Set();
      reachable.forEach((d, k) => {
        if (d === 0) return;
        const gx = k % this.state.world.w;
        const gy = (k / this.state.world.w) | 0;
        tiles.push({ gx, gy });
        this.rangeKeys.add(k);
      });
      this.highlights.show(tiles, 'move');
    }
    this._emitSelection();
  }

  enterAttackMode() {
    const unit = this._activeHumanUnit();
    if (!unit || this.state.hasAttacked) return;
    this.selectedUnitId = unit.id;
    this.mode = 'attack';
    this.skillIndex = -1;
    const range = unit.range != null ? unit.range : 1;
    const raw = getTilesInManhattanRange(this.state.world, unit.x, unit.y, range);
    const tiles = [];
    this.rangeKeys = new Set();
    raw.forEach((d, k) => {
      const gx = k % this.state.world.w;
      const gy = (k / this.state.world.w) | 0;
      if (!hasLineOfSight(this.state.world, unit.x, unit.y, gx, gy)) return;
      tiles.push({ gx, gy });
      this.rangeKeys.add(k);
    });
    this.highlights.show(tiles, 'attack');
    this._emitSelection();
  }

  enterSkillMode(skillIndex) {
    const unit = this._activeHumanUnit();
    if (!unit || this.state.hasAttacked) return;
    const skills = getAvailableSkills(this.state, unit);
    const skill = skills[skillIndex];
    if (!skill || skill.disabled) return;
    this.selectedUnitId = unit.id;
    this.mode = 'skill';
    this.skillIndex = skillIndex;
    const tiles = getSkillRangeTiles(this.state, unit, skill);
    const targets = getSkillTargetTiles(this.state, unit, skill);
    this.rangeKeys = new Set(targets.map((t) => this._key(t.gx, t.gy)));
    this.highlights.show(tiles, 'skill');
    this._emitSelection();
  }

  enterFacingMode() {
    const unit = this._activeHumanUnit();
    if (!unit) return;
    this.selectedUnitId = unit.id;
    this.mode = 'facing';
    this.skillIndex = -1;
    this._allowedFacings = cardinalFacingsForUnit(this.state, unit);
    const tiles = facingHighlightTiles(this.state, unit);
    this.rangeKeys = new Set(tiles.map((t) => this._key(t.gx, t.gy)));
    this.highlights.show(tiles, 'facing');
    if (this.units) {
      this.units.setFacingMode(true);
      this.units.showFacingArrow(unit.id);
      const initial = this._allowedFacings[0] || unit.facing;
      this.units.setFacingPreview(unit.id, initial);
    }
    this._emitSelection();
  }

  _exitFacingMode() {
    if (this.mode !== 'facing') return;
    if (this.units) {
      this.units.hideFacingArrow();
      this.units.setFacingMode(false);
    }
    this._allowedFacings = [];
  }

  clearSelection() {
    this._exitFacingMode();
    this.selectedUnitId = null;
    this.mode = 'move';
    this.skillIndex = -1;
    this.rangeKeys = new Set();
    this.highlights.clear();
    this._emitSelection();
  }

  _activeHumanUnit() {
    const state = this.state;
    if (state.phase !== 'playing' || !state.isHumanTurn()) return null;
    const unit = state.getActiveUnit();
    return unit && unit.hp > 0 ? unit : null;
  }

  _emitSelection() {
    const unit = this.selectedUnitId != null ? this.state.getUnitById(this.selectedUnitId) : null;
    this.bus.emit('selectionChanged', { unit, mode: this.mode, skillIndex: this.skillIndex });
  }

  _updateFacingFromPointer(clientX, clientY) {
    const unit = this._activeHumanUnit();
    if (!unit || this.mode !== 'facing' || !this._allowedFacings.length) return;
    const ndc = pointerToNdc(this.container, clientX, clientY);
    const tile = this.pickTile(ndc.x, ndc.y);
    if (!tile) return;
    const facing = snapFacingToward(unit, tile.gx, tile.gy, this._allowedFacings);
    if (this.units) this.units.setFacingPreview(unit.id, facing);
  }

  // --- click resolution ---

  async _onTileClick(gx, gy) {
    if (this.busy) return;
    const state = this.state;

    if (state.phase === 'draft') {
      if (state.gameMode === 'online' && this.controller.currentDraftPlayer !== state.localPlayerNumber) return;
      const d = state.draft;
      if (d && d.pendingClassKey && d.placementTiles && d.placementTiles.some((t) => t.gx === gx && t.gy === gy)) {
        this.busy = true;
        await this.dispatch({ type: 'draftPlace', gx, gy });
        this.busy = false;
      }
      return;
    }

    if (state.phase !== 'playing' || state.gameMode === 'cvcpu') return;
    const unit = this._activeHumanUnit();

    if (this.mode === 'facing' && unit) {
      const facing = snapFacingToward(unit, gx, gy, this._allowedFacings);
      await this._confirmEndTurn(unit, facing);
      return;
    }

    if (this.mode === 'skill' && unit) {
      const skills = getAvailableSkills(state, unit);
      const skill = skills[this.skillIndex];
      if (!skill) { this.clearSelection(); return; }
      if (skill.target === 'self' && gx === unit.x && gy === unit.y) {
        await this._dispatch({ type: 'skill', unitId: unit.id, targetId: null, skillIndex: this.skillIndex });
        return;
      }
      if (!this.rangeKeys.has(this._key(gx, gy))) return;
      const target = state.getUnitAtTile(gx, gy);
      const targetId = target ? target.id : null;
      await this._dispatch({ type: 'skill', unitId: unit.id, targetId, skillIndex: this.skillIndex });
      return;
    }

    if (this.mode === 'attack' && unit) {
      const target = state.getUnitAtTile(gx, gy);
      if (!this.rangeKeys.has(this._key(gx, gy))) return;
      if (target && target.player !== unit.player) {
        await this._dispatch({ type: 'attack', unitId: unit.id, targetId: target.id });
      }
      return;
    }

    // Default (move) mode.
    const unitAt = state.getUnitAtTile(gx, gy);
    if (unitAt) {
      if (unitAt.id === (unit && unit.id) && unit) {
        this.selectUnitForMove(unit);
      } else {
        this.bus.emit('previewUnit', { unit: unitAt });
      }
      return;
    }
    this.bus.emit('previewUnit', { unit: null });

    if (unit && this.selectedUnitId === unit.id && !state.hasMoved && this.rangeKeys.has(this._key(gx, gy))) {
      await this._dispatch({ type: 'move', unitId: unit.id, toGx: gx, toGy: gy });
    }
  }

  async _confirmEndTurn(unit, facing) {
    this.busy = true;
    this._exitFacingMode();
    this.highlights.clear();
    this.rangeKeys = new Set();
    this.mode = 'move';
    try {
      await this.dispatch({ type: 'endTurn', unitId: unit.id, facing: facing || unit.facing });
    } finally {
      this.busy = false;
    }
  }

  async _dispatch(intent) {
    this.busy = true;
    this.highlights.clear();
    this.rangeKeys = new Set();
    try {
      await this.dispatch(intent);
    } finally {
      this.busy = false;
    }
  }

  // --- DOM wiring ---

  _bind() {
    const c = this.container;
    c.style.cursor = 'grab';
    this._onPointerDown = this._onPointerDown.bind(this);
    this._onPointerMove = this._onPointerMove.bind(this);
    this._onPointerUp = this._onPointerUp.bind(this);
    this._onWheel = this._onWheel.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);

    window.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove);
    window.addEventListener('pointerup', this._onPointerUp);
    window.addEventListener('wheel', this._onWheel, { passive: false });
    // Touch stays on the canvas only. Window-level non-passive touchmove
    // blocks native scroll on Android Chrome even when preventDefault is skipped.
    c.addEventListener('touchstart', this._onTouchStart, { passive: false });
    c.addEventListener('touchmove', this._onTouchMove, { passive: false });
    c.addEventListener('touchend', this._onTouchEnd, { passive: false });
    c.addEventListener('touchcancel', this._onTouchEnd, { passive: false });
  }

  _isUiTarget(target) {
    const el = target && (target.nodeType === 1 ? target : target.parentElement);
    // app-root hosts every overlay; include it so scrollable panels
    // (mode-select, turn-menu skill list, unit-details, etc.) keep native touch scroll.
    return !!(el && el.closest(
      'app-root, #turn-menu, #turn-menu-stack, #unit-details-card, #draft-panel, #draft-placement-card, #mode-select-overlay:not(.hidden), #map-editor-panel, #game-over-overlay.visible, #online-connect-overlay, #rotate-overlay, button, input, select, textarea, a',
    ));
  }

  _onPointerDown(e) {
    if (!this.enabled) return;
    if (e.pointerType === 'touch') return; // handled by touch events
    if (this._isUiTarget(e.target)) return;
    this._downPixel = { x: e.clientX, y: e.clientY };
    this._isTouch = false;
    this._ctrlOnDown = e.ctrlKey;
    this._prevNdc = pointerToNdc(this.container, e.clientX, e.clientY);
    this.container.style.cursor = 'grabbing';
  }

  _onPointerMove(e) {
    if (!this.enabled) return;
    if (e.pointerType === 'touch') return;
    if (this.mode === 'facing' && !this._isPanning && !this._isRotating) {
      this._updateFacingFromPointer(e.clientX, e.clientY);
      return;
    }
    this._drag(e.clientX, e.clientY, e.ctrlKey);
  }

  _drag(clientX, clientY, ctrlKey) {
    if (this._prevNdc == null) return;
    const dx = clientX - this._downPixel.x;
    const dy = clientY - this._downPixel.y;
    if (!this._isPanning && !this._isRotating && (Math.abs(dx) > CLICK_DRAG_THRESHOLD_PX || Math.abs(dy) > CLICK_DRAG_THRESHOLD_PX)) {
      if (ctrlKey || this._ctrlOnDown) this._isRotating = true;
      else this._isPanning = true;
      this.camera.disableFollow();
    }
    if (this._isRotating) {
      this.camera.rotate(dx, dy);
      this._downPixel = { x: clientX, y: clientY };
    } else if (this._isPanning) {
      const curr = pointerToNdc(this.container, clientX, clientY);
      this.camera.panFromNdc(this._prevNdc, curr, this._isTouch ? 1 : 1);
      this._prevNdc = curr;
    }
  }

  _onPointerUp(e) {
    if (!this.enabled) return;
    if (e.pointerType === 'touch') return;
    this._endDrag(e.clientX, e.clientY);
  }

  _endDrag(clientX, clientY) {
    if (this._prevNdc != null && !this._isPanning && !this._isRotating) {
      const ndc = pointerToNdc(this.container, clientX, clientY);
      const tile = this.pickTile(ndc.x, ndc.y);
      if (tile) this._onTileClick(tile.gx, tile.gy);
    }
    this._prevNdc = null;
    this._isPanning = false;
    this._isRotating = false;
    this._ctrlOnDown = false;
    this.container.style.cursor = 'grab';
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

  _normalizeAngleDelta(delta) {
    while (delta > Math.PI) delta -= 2 * Math.PI;
    while (delta < -Math.PI) delta += 2 * Math.PI;
    return delta;
  }

  _beginTwoFingerTouch(touches) {
    this._pinchDist = this._touchDistance(touches);
    this._pinchAngle = this._touchAngle(touches);
    this._prevNdc = null;
    this._isPanning = false;
    this._isRotating = false;
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
    this._prevNdc = pointerToNdc(this.container, c.x, c.y);
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
        const delta = this._normalizeAngleDelta(angle - this._pinchAngle);
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
    if (this.mode === 'facing' && !this._isPanning && !this._isRotating) {
      this._updateFacingFromPointer(c.x, c.y);
      return;
    }
    this._drag(c.x, c.y, false);
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
