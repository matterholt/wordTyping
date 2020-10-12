import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { WordListSetting } from "./settingsComp/WordListSetting";
import { WordCountSettings } from "./settingsComp/WordCountSetting";

const useDisplayStyle = makeStyles((theme) => ({
  root: {
    minHeight: 100,
    display: "flex",
  },
  button: {
    border: "none",
    backgroundColor: "inherit",
  },
}));

const DisplayControl = ({ component, whenClosed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isShown = isOpen ? "block" : "none";
  const classes = useDisplayStyle();
  return (
    <div className={classes.root}>
      <div>
        <button className={classes.button} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </button>
        <div style={{ display: !isOpen ? "inline-block" : "none" }}>
          <p>{whenClosed}</p>
        </div>
      </div>

      <div style={{ display: isShown }}>{component}</div>
    </div>
  );
};

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
