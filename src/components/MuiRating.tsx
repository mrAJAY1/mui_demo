import { FormControl, FormControlLabel, Stack, styled } from "@mui/material";
import Rating, { IconContainerProps } from "@mui/material/Rating";

import { FavoriteBorder, Favorite } from "@mui/icons-material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

import React, { useState } from "react";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <span {...other}>{customIcons[value].icon}</span>;
}
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
            <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              value={value}
              IconContainerComponent={IconContainer}
              getLabelText={(count: number) => customIcons[count].label}
              highlightSelectedOnly
              onChange={handleChange}
            />
          }
        />
      </FormControl>
    </Stack>
  );
}

export default MuiRating;
