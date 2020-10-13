import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import Setting from "../components/Setting";
import SettingInd from "../components/settingindicator";

import { useWordList } from "../hooks/useWordList";

export const Home = () => {
  const { wordsToType, GetCustomWordList } = useWordList();
  const [wordList, setWordList] = useState("Random");
  const [numberOfWords, seNumberOfWords] = useState(5);

  const updateWordList = (e) => {
    setWordList(e.target.value);
  };
  const updateWordCount = (event, newValue) => {
    seNumberOfWords(newValue);
  };

  /*
  model for settings which contains a custom word or random words
  and number of words that wish to practice typing
   and a button to get thing set and then switched to testing page
  */
  function setWordGameSettings() {
    /*
    once the  user has his/hers settings on the game that they wish
    to play. they will click the "start typing" button. which will fire
    off this function that would save setting to the and be redirected to the
    typing practice page where the game will began.

    */
  }

  return (
    <Grid container direction="column">
      <Header />

      <Typography variant="body1">Start Learning how to type words</Typography>

      <Setting
        wordList={wordList}
        updateWordList={updateWordList}
        updateWordCount={updateWordCount}
        numberOfWords={numberOfWords}
      />

      <Typography variant="h6">
        Practice Typing, <SettingInd>{numberOfWords}</SettingInd> words in from
        a <SettingInd>{wordList}</SettingInd> word list
      </Typography>

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
