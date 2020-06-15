import { types } from "mobx-state-tree";
import { TIMER_STORE } from "../constants";

export const TimerStore = types
  .model(TIMER_STORE, { timerStarter: false, timerEnder: false })
  .volatile((self) => ({}))
  .views((self) => ({}))
  .actions((self) => ({
    startTimer(value) {
      self.timerStarter = true;
    },
    handleTimerStarter(value) {
      self.timerStarter = false;
    },
    handleTimerEnder(value) {
      self.timerEnder = false;
    },
  }));
