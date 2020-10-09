import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    fontSize: "1rem",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Typing Practice</h1>
    </div>
  );
};

export default Header;
