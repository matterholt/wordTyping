import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  infoSettings: {
    color: theme.palette.info.dark,
    fontWeight: 900,
    borderBottom: `2px solid ${theme.palette.info.dark}`,
  },
}));

const SettingInd = ({ ...otherProps }) => {
  const classes = useStyles();

  return <span className={classes.infoSettings} {...otherProps} />;
};

export default SettingInd;
