import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import SettingModal from "../components/SettingModal";

import { useRandomWordList } from "../hooks/useRandomWordList";

export const Home = () => {
  const [numberOfWords, seNumberOfWords] = useState(5);

  const [open, setOpen] = React.useState(false);

  const { wordsToType, GetCustomWordList } = useRandomWordList();
  function GetRandomWordList() {
    // fetches randoms word from some api
  }

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
    <div>
      <Header />
      <Typography variant="body1">Start Learning how to type words</Typography>

      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>

      <SettingModal
        open={open}
        GetCustomWordList={GetCustomWordList}
        handleClose={handleClose}
      />

      {wordsToType}

      <Button
        variant="contained"
        size="large"
        color="primary"
        href="/TypingPractice"
      >
        Start Typing
      </Button>
    </div>
  );
};
