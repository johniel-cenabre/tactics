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
    const label = draft
      ? (draft.pendingClassKey
        ? `Draft: Player ${draft.player} — place ${CLASSES[draft.pendingClassKey]?.name || 'unit'}`
        : `Draft: Player ${draft.player} — pick a class`)
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
      <div id="ui">
        <h1>TACTICS</h1>
        <div class="turn">${draft ? '' : 'Turn: '}<span id="turn-player">${label}</span></div>
        <div class="turns-left ${lowTurns ? 'turns-left-low' : ''}" id="turns-left" style="display:${showTurnsLeft ? 'block' : 'none'}">
          Turns left: <span id="turns-left-value">${s.turnsLeft}</span>
        </div>
        <div class="instructions">${instructions}</div>
      </div>
    `;
  }
}
customElements.define('hud-bar', Hud);
