// Mutable action hub the Lit UI calls into. main.js populates these once the game
// controller, input controller, and match lifecycle are wired. Keeping them in one
// place avoids threading callbacks through every component.

export const actions = {
  /** Start a match from the mode-select screen. cfg = { mode, settings, ... }. */
  startMatch: (_cfg) => {},
  /** Return to the mode-select screen. */
  toModeSelect: () => {},
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
};
