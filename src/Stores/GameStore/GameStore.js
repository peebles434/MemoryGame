import { types } from "mobx-state-tree";
import { useMemo } from "react";
import { GAME_STORE } from "../constants";
import { GameModel } from "../../Models/GameModel/GameModel";
import { DefaultGameStore } from "./DefaultGameStore";

export const GameStore = types
  .model(GAME_STORE, {
    isGameStarted: types.boolean,
    isFirstCardClicked: types.boolean,
    firstCardId: types.maybeNull(types.string),
    secondCardId: types.maybeNull(types.string),
    correctCounter: types.number,
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({
    startGame(value) {
      self.isGameStarted = true;
    },
    selectFirstCard(value) {
      self.isFirstCardClicked = true;
      self.firstCardId = value;
    },
    selectSecondCard(value) {
      self.isFirstCardClicked = false;
      self.secondCardId = value;
    },
    resetSelectedCards(value) {
      self.firstCardId = null;
      self.secondCardId = null;
    },
  }));

let _store;
export const useGameStore = () => {
  const store = useMemo(() => {
    if (!_store) _store = GameStore.create(DefaultGameStore);
    return _store;
  }, []);
  return store;
};
