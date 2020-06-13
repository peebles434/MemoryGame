import React from "react";
import { Stopwatch } from "./Stopwatch";
import { Button } from "@material-ui/core";

export const GameDisplay = () => {
  return (
    <div className="gameDisplayBox noselect">
      <Stopwatch />
      <Button className="restart" variant="contained" color="primary">
        Restart
      </Button>
    </div>
  );
};
