import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { WordListSetting } from "./settingsComp/WordListSetting";
import { WordCountSettings } from "./settingsComp/WordCountSetting";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column",
    width: 400,
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
      <WordListSetting updateWordList={updateWordList} wordList={wordList} />
      <WordCountSettings
        numberOfWords={numberOfWords}
        updateWordCount={updateWordCount}
      />
    </div>
  );
};
export default Setting;
