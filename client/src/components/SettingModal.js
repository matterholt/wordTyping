import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Typography, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { WordListSetting } from "../components/settingsComp/WordListSetting";
import { WordCountSettings } from "../components/settingsComp/WordCountSetting";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexFlow: "column",
    position: "absolute",
    top: "25%",
    left: "25%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const SettingModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const [wordList, setWordList] = useState("random");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-settings"
      aria-describedby="set the option for word typing practice"
    >
      <div className={classes.paper}>
        <Typography align="center" variant="h3">
          SETTINGS
        </Typography>
        <WordListSetting />
        <WordCountSettings />
        <Button>Accept</Button>
      </div>
    </Modal>
  );
};
export default SettingModal;
