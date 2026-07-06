// Reactive UI store built on @preact/signals-core plus a small Lit mixin.
//
// The store is a plain-object snapshot of everything the DOM UI needs to render
// (phase, current player, selected unit summary, draft progress, overlays, ...).
// The sim never reads from here; instead `ui/store-bindings.js` listens to sim
// events and writes into these signals, and Lit components read from them. This
// gives us one-directional flow: sim -> events -> store -> UI.

import { signal, computed, effect } from '@preact/signals-core';
import { LitElement } from 'lit';

/** The single app-wide UI state signal. Holds a plain object; replace wholesale. */
export const uiState = signal(createInitialUiState());

export function createInitialUiState() {
  return {
    // High-level flow
    screen: 'mode-select', // 'mode-select' | 'game'
    phase: 'draft', // 'draft' | 'playing' | 'gameover'
    gameMode: 'pvp',
    // Turn HUD
    currentPlayer: 1,
    turnCount: 0,
    maxTurns: 200,
    turnsLeft: null,
    isHumanTurn: true,
    // Selection / unit panel
    selectedUnit: null, // summary object or null
    previewUnit: null,
    availableSkills: [], // [{ skill, disabled, reason }]
    actionState: { attackMode: false, skillMode: false, choosingFacing: false, hasMoved: false, hasAttacked: false },
    // Draft
    draft: null, // { title, message, classes, detail, placement, ... }
    // Overlays
    battleStart: false,
    gameOver: null, // { winner, title, cards, classRecord }
    online: null, // online connect UI state
    rotate: false,
    // Mode-select settings (mirrors the controls)
    settings: null,
  };
}

/** Shallow-merge a patch into the UI state, triggering subscribers. */
export function patchUi(patch) {
  uiState.value = { ...uiState.value, ...patch };
}

/** Replace the whole UI state. */
export function setUi(next) {
  uiState.value = next;
}

export { signal, computed, effect };

/**
 * Lit mixin: re-renders the component whenever any signal read during its last
 * render changes. Keeps components declarative without manual subscriptions.
 */
export function SignalWatcher(Base = LitElement) {
  return class extends Base {
    _disposeEffect = null;

    connectedCallback() {
      super.connectedCallback();
      this._startEffect();
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      if (this._disposeEffect) {
        this._disposeEffect();
        this._disposeEffect = null;
      }
    }

    _startEffect() {
      // Trigger a Lit update whenever a tracked signal changes.
      this._disposeEffect = effect(() => {
        // Reading uiState here subscribes this effect to it. Components that
        // read additional signals in render() will also be tracked because Lit
        // calls performUpdate synchronously within requestUpdate scheduling.
        void uiState.value;
        this.requestUpdate();
      });
    }
  };
}
