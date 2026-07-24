import { LitElement, html } from 'lit';
import { SignalWatcher, uiState } from '../../core/store.js';
import { actions } from '../actions.js';
import { STAGES, describeObjectives, resolveClassPool } from '../../data/stages.js';
import { CLASSES } from '../../data/classes.js';
import { getUnlockedStageIndex } from '../../data/story-progress.js';

class StorySelect extends SignalWatcher(LitElement) {
  createRenderRoot() { return this; }

  _unlocked() {
    return uiState.value.unlockedStageIndex != null
      ? uiState.value.unlockedStageIndex
      : getUnlockedStageIndex();
  }

  _classNames(stage) {
    const pool = [...resolveClassPool(stage.classPool)];
    return pool.map((k) => CLASSES[k]?.name || k).join(', ');
  }

  render() {
    if (uiState.value.screen !== 'story-select') return html``;
    const unlocked = this._unlocked();

    return html`
      <div id="story-select-overlay">
        <div class="story-select-scroll">
          <div class="story-select-inner">
            <header class="story-select-header">
              <button type="button" class="story-back-btn" @click=${() => actions.toModeSelect()}>← Main menu</button>
              <h1 class="story-select-title">Story</h1>
              <p class="story-select-tagline">Draft your squad and complete each stage’s objectives.</p>
            </header>

            <ul class="story-stage-list" aria-label="Story stages">
              ${STAGES.map((stage, index) => {
                const locked = index > unlocked;
                const objectives = describeObjectives(stage.objectives);
                return html`
                  <li>
                    <article class="story-stage-card ${locked ? 'locked' : ''}">
                      <div class="story-stage-num">${index + 1}</div>
                      <div class="story-stage-body">
                        <h2 class="story-stage-name">${stage.name}</h2>
                        <p class="story-stage-desc">${stage.description}</p>
                        <ul class="story-stage-objectives">
                          ${objectives.map((o) => html`<li>${o}</li>`)}
                        </ul>
                        <p class="story-stage-meta">
                          ${stage.maxPlayerUnits} unit${stage.maxPlayerUnits === 1 ? '' : 's'}
                          · ${stage.map.w}×${stage.map.h}
                          ${stage.maxTurns ? html` · ${stage.maxTurns} turns` : ''}
                        </p>
                        <p class="story-stage-classes">Classes: ${this._classNames(stage)}</p>
                      </div>
                      <div class="story-stage-actions">
                        ${locked
                          ? html`<span class="story-locked-label">Locked</span>`
                          : html`<button type="button" class="mode-play-btn story-play-btn"
                              @click=${() => actions.startStage(stage.id)}>
                              <span class="mode-play-text">Play</span>
                            </button>`}
                      </div>
                    </article>
                  </li>
                `;
              })}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('story-select-screen', StorySelect);
