import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import SettingModal from "../components/SettingModal";

import { useWordList } from "../hooks/useWordList";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export const Home = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const { wordsToType, GetCustomWordList } = useWordList();

  /*
  model for settings which contains a custom word or random words
  and number of words that wish to practice typing
   and a button to get thing set and then switched to testing page
  */
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <Header />
      <ButtonGroup>
        <Button type="button" onClick={handleOpen}>
          Setting
        </Button>
        <Button type="button" onClick={handleOpen}>
          Setting
        </Button>
      </ButtonGroup>

      <Typography variant="body1">Start Learning how to type words</Typography>

      <SettingModal
        open={open}
        GetCustomWordList={GetCustomWordList}
        handleClose={handleClose}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        href="/TypingPractice"
      >
        Start Typing
      </Button>
    </Grid>
  );
};
