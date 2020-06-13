import { GameStore } from "./GameStore/GameStore";
import { TimerStore } from "./TimerStore/TimerStore";
import { useMemo } from "react";
import { DefaultGameStore } from "./GameStore/DefaultGameStore";
import { DefaultTimerStore } from "./TimerStore/DefaultTimerStore";

let _store;
export const useGameStore = () => {
  const store = useMemo(() => {
    if (!_store) _store = GameStore.create(DefaultGameStore);
    return _store;
  }, []);
  return store;
};

let _timerStore;
export const useTimerStore = () => {
  const store = useMemo(() => {
    if (!_timerStore) _timerStore = TimerStore.create(DefaultTimerStore);
    return _timerStore;
  }, []);
  return store;
};
