import React from "react";
import { observer } from "mobx-react";
import { useSessionStore } from "../Stores/hooks";
import { useGameStore } from "../Stores/hooks";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const CatDogSwitch = observer(() => {
  const { isCatMode, toggleCatMode } = useSessionStore();
  const { isGameStarted } = useGameStore();

  return (
    <FormGroup>
      <Typography component="div">
        <Grid
          component="label"
          container
          alignItems="center"
          spacing={1}
          justify="center"
        >
          <Grid item>Dog Person</Grid>
          <Grid item>
            <Switch
              disabled={isGameStarted}
              checked={isCatMode}
              onChange={toggleCatMode}
              color="default"
            />
          </Grid>
          <Grid item>Cat Person</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
});
