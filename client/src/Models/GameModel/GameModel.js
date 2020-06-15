import { types } from "mobx-state-tree";
import { GAME_MODEL } from "../constants";

// Figure out how to correctly connect to GameStore
export const GameModel = types
  .model(GAME_MODEL, {
    isGameStarted: types.boolean,
    isFirstCardClicked: types.boolean,
    firstCardId: types.string,
    secondCardId: types.string,
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({}));
