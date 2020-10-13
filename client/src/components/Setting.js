import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import DisplayControl from "./settingsDisplayControl";
import { WordListSetting } from "./settingsComp/WordListSetting";
import { WordCountSettings } from "./settingsComp/WordCountSetting";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column",
    width: 400,
    minHeight: 300,
    padding: theme.spacing(2, 4, 3),
  },
}));
const Setting = ({
  wordList,
  updateWordList,
  updateWordCount,
  numberOfWords,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <DisplayControl
        whenClosed={`Current settings is ${wordList}`}
        component={
          <WordListSetting
            updateWordList={updateWordList}
            wordList={wordList}
          />
        }
      />

      <DisplayControl
        whenClosed={`Current word count is ${numberOfWords}`}
        component={
          <WordCountSettings
            numberOfWords={numberOfWords}
            updateWordCount={updateWordCount}
          />
        }
      />
    </div>
  );
};
export default Setting;
