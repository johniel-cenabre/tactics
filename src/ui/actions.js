// Mutable action hub the Lit UI calls into. main.js populates these once the game
// controller, input controller, and match lifecycle are wired. Keeping them in one
// place avoids threading callbacks through every component.

export const actions = {
  /** Start a match from the mode-select screen. cfg = { mode, settings, ... }. */
  startMatch: (_cfg) => {},
  /** Return to the mode-select screen. */
  toModeSelect: () => {},
  /** Open the story level-select screen. */
  openStorySelect: () => {},
  /** Start a story stage by id. */
  startStage: (_stageId) => {},
  /** Retry the current story stage. */
  retryStage: () => {},
  /** Advance to the next unlocked story stage. */
  nextStage: () => {},
  /** Draft: choose a class. */
  draftPick: (_classKey) => {},
  /** Turn menu: enter attack targeting. */
  attack: () => {},
  /** Turn menu: enter skill targeting by available-skill index. */
  skill: (_index) => {},
  /** Turn menu: end the current unit's turn. */
  endTurn: () => {},
  /** Cancel current targeting/selection. */
  cancel: () => {},

  // --- Online (WebRTC copy/paste signaling) ---
  /** Open the online connect overlay for the given match config. */
  onlineStart: (_cfg) => {},
  /** Host: create an offer code for the given player name. */
  onlineHost: (_name) => {},
  /** Host: apply the guest's reply code to complete the connection. */
  onlineHostConnect: (_replyCode) => {},
  /** Guest: consume the host's offer code and produce a reply code. */
  onlineJoin: (_offerCode, _name) => {},
  /** Close the connect overlay and tear down any pending connection. */
  onlineCancel: () => {},

  // --- Map editor ---
  openEditor: () => {},
  closeEditor: () => {},
  editorSetTool: (_tool) => {},
  editorSetTileType: (_t) => {},
  editorSetHeight: (_h) => {},
  editorSetUnitPlayer: (_p) => {},
  editorSetUnitClass: (_classKey) => {},
  editorSetUnitLevel: (_level) => {},
  editorSetUnitFacing: (_facing) => {},
  editorSetName: (_name) => {},
  editorResize: (_w, _h) => {},
  editorNew: () => {},
  editorSave: () => {},
  editorLoad: (_map) => {},
  editorError: (_msg) => {},
};
