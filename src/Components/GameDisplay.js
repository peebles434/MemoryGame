import React from "react";
import { observer } from "mobx-react";
import { Stopwatch } from "./Stopwatch";
import { Button } from "@material-ui/core";

export const GameDisplay = () => {
  // TODO: create restart handler that doesn't rely on page refresh
  const tempRestartHandler = () => {
    window.location.reload();
  };
  return (
    <div className="gameDisplayBox noselect">
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
};
