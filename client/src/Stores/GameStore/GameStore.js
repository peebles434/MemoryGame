import { types } from "mobx-state-tree";
import { GAME_STORE } from "../constants";

export const GameStore = types
  .model(GAME_STORE, {
    isGameStarted: types.boolean,
    isFirstCardClicked: types.boolean,
    firstCardId: types.maybeNull(types.string),
    secondCardId: types.maybeNull(types.string),
    correctCounter: types.number,
    isAnswerBeingChecked: types.boolean,
  })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({
    startGame(value) {
      self.isGameStarted = true;
    },
    endGame(value) {
      self.isGameStarted = false;
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
    startCheckingAnswer(value) {
      self.isAnswerBeingChecked = true;
    },
    stopCheckingAnswer(value) {
      self.isAnswerBeingChecked = false;
    },
    resetSelectedCards(value) {
      self.firstCardId = null;
      self.secondCardId = null;
    },
  }));
