import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

export const WordCountSettings = ({ numberOfWords, updateWordCount }) => {
  return (
    <div>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Small steps
      </Typography>
      <Slider
        defaultValue={10}
        onChange={updateWordCount}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={5}
        max={25}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

/*

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



*/
