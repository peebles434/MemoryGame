import { types } from "mobx-state-tree";
import { ROOT_STORE, SESSION_STORE, GAME_STORE } from "./constants";
import { GameStore } from "./GameStore";

const RootStoreModel = types.model(ROOT_STORE, {
  [GAME_STORE]: types.optional(GameStore, {}),
});

const RootStoreEnv = {
  accessToken: "",
};

export const rootStore = RootStoreModel.create({}, RootStoreEnv);
