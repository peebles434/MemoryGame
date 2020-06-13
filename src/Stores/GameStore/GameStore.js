import { types } from "mobx-state-tree";
import { GAME_STORE } from "../constants";
import { GameModel } from "../../Models/GameModel/GameModel";

export const GameStore = types
  .model(GAME_STORE, {
    isGameStarted: types.boolean,
    timerStarter: types.boolean,
    timerEnder: types.boolean,
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
      self.timerStarter = true;
    },
    endGame(value) {
      self.isGameStarted = false;
    },
    handleTimerStarter(value) {
      self.timerStarter = false;
    },
    handleTimerEnder(value) {
      self.timerEnder = false;
    },
    increaseCorrectCounter(value) {
      self.correctCounter = self.correctCounter + 1;
    },
    resetCorrectCounter(value) {
      self.correctCounter = 0;
    },
  }))
  .actions((self) => ({
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
