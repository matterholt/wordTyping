import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

export const WordListSetting = () => {
  return (
    <FormControl component="fieldset" color="primary">
      <FormLabel component="legend"> Word List </FormLabel>
      <RadioGroup>
        <FormControlLabel
          value="Random"
          control={<Radio color="default" />}
          label="Random"
        />
        <FormControlLabel
          value="Custom"
          control={<Radio color="default" />}
          label="Custom"
        />
      </RadioGroup>
    </FormControl>
  );
};
