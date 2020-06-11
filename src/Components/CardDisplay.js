import React from "react";
import { Card } from "./Card";
import { makeStyles, Grid } from "@material-ui/core";
import "../App.css";
import { importedCatCards } from "../utils/CardPictures/importedCatCards";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const CardDisplay = () => {
  const classes = useStyles();

  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  const deck = shuffle(importedCatCards);

  return (
    <div className="cardContainer">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card card={deck[0].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[1].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[2].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[3].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[4].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[5].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[6].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[7].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[8].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[9].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[10].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[11].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[12].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[13].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[14].image} />
          </Grid>
          <Grid item xs={3}>
            <Card card={deck[15].image} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
