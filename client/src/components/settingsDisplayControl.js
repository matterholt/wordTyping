import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useDisplayStyle = makeStyles((theme) => ({
  root: {},
}));

const DisplayControl = ({ component, whenClosed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useDisplayStyle();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {whenClosed}
        </AccordionSummary>
        <AccordionDetails>{component}</AccordionDetails>
      </Accordion>
    </div>
  );
};
export default DisplayControl;
