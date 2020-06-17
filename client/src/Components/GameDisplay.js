import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { Stopwatch } from "./Stopwatch";
import { CatDogSwitch } from "./CatDogSwitch";
import { Button } from "@material-ui/core";

export const GameDisplay = observer(() => {
  // TODO: create restart handler that doesn't rely on page refresh
  // TODO: add "areWeRestarting" key-value to mobx that will be read by card component to fire setstate calls to false
  const tempRestartHandler = () => {
    window.location.reload();
  };

  const [state, setState] = useState({ apiResponse: "" });

  const url = "http://localhost:9000/testAPI";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => setState({ apiResponse: res }));
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="gameDisplayBox noselect">
      <CatDogSwitch />
      <Stopwatch />
      <Button
        className="restart"
        variant="contained"
        color="primary"
        onClick={tempRestartHandler}
      >
        Restart
      </Button>
    </div>
  );
});
