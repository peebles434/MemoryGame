import { GameStore } from "./GameStore/GameStore";
import { useMemo } from "react";
import { DefaultGameStore } from "./GameStore/DefaultGameStore";

let _store;
export const useGameStore = () => {
  const store = useMemo(() => {
    if (!_store) _store = GameStore.create(DefaultGameStore);
    return _store;
  }, []);
  return store;
};
