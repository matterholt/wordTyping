import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

export const WordCountSettings = () => {
  const [numberOfWords, seNumberOfWords] = useState(5);
  return (
    <FormControl component="fieldset">
      <InputLabel id="wordCount label"> Select Number of Words</InputLabel>
      <Select
        labelId="wordCount label"
        id="wordCount select"
        value={numberOfWords}
        onChange={(e) => seNumberOfWords(e.target.value)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>
    </FormControl>
  );
};
