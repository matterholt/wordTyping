import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "25%",
    left: "25%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const SettingModal = ({
  open,
  handleClose,
  GetCustomWordList,
  numberOfWords,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-settings"
      aria-describedby="set the option for word typing practice"
    >
      <div className={classes.paper}>
        <h2>SETTINGS</h2>
        <label>Select Word list</label>

        <label>Choose Word Count</label>
      </div>
    </Modal>
  );
};
export default SettingModal;

// const Previous = (
//   <ButtonGroup color="primary" aria-label="small outlined primary button group">
//     <Button onClick={() => GetCustomWordList(numberOfWords)}>
//       Custom List
//     </Button>
//     <Button>Random List</Button>
//   </ButtonGroup>
// );
