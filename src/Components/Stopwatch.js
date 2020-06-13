import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { useGameStore } from "../Stores/hooks";

export const Stopwatch = observer(() => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const {
    timerStarter,
    handleTimerStarter,
    timerEnder,
    handleTimerEnder,
    correctCounter,
    resetCorrectCounter,
  } = useGameStore();

  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    if (timerStarter) {
      toggle();
      handleTimerStarter();
    }
  });

  useEffect(() => {
    if (timerEnder) {
      toggle();
      handleTimerEnder();
    }
  });

  useEffect(() => {
    if (correctCounter === 16) {
      toggle();
      resetCorrectCounter();
    }
  });

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="Stopwatch">
      <h1 className="time">{seconds}s</h1>
    </div>
  );
});
