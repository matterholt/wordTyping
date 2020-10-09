import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export const WordCountSettings = ({ numberOfWords, updateWordCount }) => {
  return (
    <FormControl>
      <InputLabel id="wordCount label"> Select Number of Words</InputLabel>
      <Select
        labelId="wordCount label"
        id="wordCount select"
        value={numberOfWords}
        onChange={updateWordCount}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>
    </FormControl>
  );
};
