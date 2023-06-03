import { FormControl, FormControlLabel, Rating, Stack } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

import React, { useState } from "react";

function MuiRating() {
  const [value, setValue] = useState<number | null>(3);
  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ): void => {
    setValue(newValue);
  };
  console.log({ value });
  return (
    <Stack spacing={2}>
      {/* precision: The increment between two consecutive allowed values of the rating. In this case, it's set to 0.5, meaning half values are allowed. */}
      {/* Including Icons, readOnly, Highlight */}
      <FormControl>
        <FormControlLabel
          label="Normal"
          control={<Rating size="large" value={value} onChange={handleChange} />}
        />
        <FormControlLabel
          label="Precision = 0.5"
          control={<Rating size="large" value={value} precision={0.5} onChange={handleChange} />}
        />
        <FormControlLabel
          label="Icons"
          control={
            <Rating
              size="large"
              value={value}
              precision={0.5}
              onChange={handleChange}
              icon={<Favorite fontSize="inherit" color="error" />}
              emptyIcon={<FavoriteBorder fontSize="inherit" />}
            />
          }
        />
        <FormControlLabel
          label="Read Only"
          control={
            <Rating
              size="large"
              value={value}
              precision={0.5}
              onChange={handleChange}
              icon={<Favorite fontSize="inherit" color="error" />}
              emptyIcon={<FavoriteBorder fontSize="inherit" />}
              readOnly
            />
          }
        />
        <FormControlLabel
          label="HighLight Selected Only"
          control={
            <Rating
              size="large"
              value={value}
              precision={0.5}
              onChange={handleChange}
              icon={<Favorite fontSize="inherit" color="error" />}
              emptyIcon={<FavoriteBorder fontSize="inherit" />}
              highlightSelectedOnly
            />
          }
        />
      </FormControl>
    </Stack>
  );
}

export default MuiRating;
