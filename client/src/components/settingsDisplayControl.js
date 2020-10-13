import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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
export default DisplayControl;
