import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { useGameStore, useTimerStore } from "../Stores/hooks";

export const Stopwatch = observer(() => {
  const [seconds, setSeconds] = useState(0);
  const [roundedSeconds, setRoundedSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const { correctCounter, resetCorrectCounter } = useGameStore();

  const {
    timerStarter,
    timerEnder,
    handleTimerStarter,
    handleTimerEnder,
  } = useTimerStore();

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
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds > 0) {
      let num = seconds.toFixed(1);
      setRoundedSeconds(num);
    }
  });

  return (
    <div className="Stopwatch">
      <h1 className="time">{roundedSeconds}s</h1>
    </div>
  );
});
