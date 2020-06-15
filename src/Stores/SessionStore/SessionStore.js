import { types } from "mobx-state-tree";
import { SESSION_STORE } from "../constants";
import {
  getMode,
  saveMode,
} from "../../utils/localStorageHelpers/sessionStoreHelpers";

export const SessionStore = types
  .model(SESSION_STORE, {})
  .volatile((self) => ({
    catMode: getMode(),
  }))
  .views((self) => ({
    get isCatMode() {
      return self.catMode;
    },
  }))
  .actions((self) => ({
    toggleCatMode() {
      self.catMode = !self.catMode;
      saveMode(self.catMode);
    },
  }));
