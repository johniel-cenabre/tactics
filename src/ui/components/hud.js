import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { CLASSES } from '../../data/classes.js';

// Top-left HUD: title, turn owner, turns-left counter. Light DOM so the existing
// #ui CSS applies.
class Hud extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  render() {
    const s = uiState.value;
    if (s.screen !== 'game') return html``;
    const draft = s.phase === 'draft' ? s.draft : null;
    const player = draft ? draft.player : s.currentPlayer;
    const turnLabel = draft ? 'Draft' : 'Turn';
    const turnValue = draft
      ? (draft.pendingClassKey
        ? `P${draft.player} · place ${CLASSES[draft.pendingClassKey]?.name || 'unit'}`
        : `P${draft.player} · pick class`)
      : `Player ${s.currentPlayer}`;
    const showTurnsLeft = s.phase === 'playing' && s.turnsLeft != null;
    const lowTurns = showTurnsLeft && s.turnsLeft <= 10;
    const instructions = draft
      ? (draft.pendingClassKey
        ? 'Click a highlighted base tile to place your unit.'
        : (draft.isHumanTurn ? 'Choose a class to draft.' : 'Waiting for opponent…'))
      : (s.actionState?.choosingFacing
        ? 'Click a tile or unit to choose facing direction.'
        : 'Select a unit, then click a highlighted tile to move');
    return html`
      <div id="ui" class="player-${player}">
        <div class="hud-brand">
          <h1>TACTICS</h1>
        </div>
        <div class="hud-status">
          <div class="hud-turn-pill turn">
            <span class="hud-turn-label">${turnLabel}</span>
            <span id="turn-player">${turnValue}</span>
          </div>
          <div class="hud-turns-pill turns-left ${lowTurns ? 'turns-left-low' : ''}" id="turns-left" style="display:${showTurnsLeft ? 'flex' : 'none'}">
            <span class="hud-turns-label">Left</span>
            <span id="turns-left-value">${s.turnsLeft}</span>
          </div>
        </div>
        <p class="hud-instructions instructions">${instructions}</p>
      </div>
    `;
  }
}
customElements.define('hud-bar', Hud);
