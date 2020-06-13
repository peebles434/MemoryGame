import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { useGameStore } from "../Stores/hooks";

export const Stopwatch = observer(() => {
  const [seconds, setSeconds] = useState(0);
  const [roundedSeconds, setRoundedSeconds] = useState(0);
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
        setSeconds((seconds) => seconds + 0.001);
      }, 1);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds > 0) {
      let num = seconds.toFixed(3);
      setRoundedSeconds(num);
    }
  });

  return (
    <div className="Stopwatch">
      <h1 className="time">{roundedSeconds}s</h1>
    </div>
  );
});
