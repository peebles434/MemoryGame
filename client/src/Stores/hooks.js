import { GameStore } from "./GameStore/GameStore";
import { TimerStore } from "./TimerStore/TimerStore";
import { SessionStore } from "./SessionStore/SessionStore";
import { useMemo } from "react";
import { DefaultGameStore } from "./GameStore/DefaultGameStore";
import { DefaultTimerStore } from "./TimerStore/DefaultTimerStore";
import { DefaultSessionStore } from "./SessionStore/DefaultSessionStore";

let _gameStore;
export const useGameStore = () => {
  const store = useMemo(() => {
    if (!_gameStore) _gameStore = GameStore.create(DefaultGameStore);
    return _gameStore;
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

let _sessionStore;
export const useSessionStore = () => {
  const store = useMemo(() => {
    if (!_sessionStore)
      _sessionStore = SessionStore.create(DefaultSessionStore);
    return _sessionStore;
  }, []);
  return store;
};
