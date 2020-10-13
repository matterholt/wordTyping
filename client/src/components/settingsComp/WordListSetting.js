import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

export const WordListSetting = ({ wordList, updateWordList }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose word list</FormLabel>
      <RadioGroup
        name="wordList"
        row
        aria-label="position"
        defaultValue="top"
        value={wordList}
        onChange={updateWordList}
      >
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
        <FormControlLabel
          value="import"
          control={<Radio color="default" disabled />}
          label="Import List"
        />
      </RadioGroup>
    </FormControl>
  );
};
