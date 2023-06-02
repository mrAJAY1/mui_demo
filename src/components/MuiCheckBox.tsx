import { Box, FormControlLabel, Checkbox } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React, { useState } from "react";

function MuiCheckBox() {
  const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  console.log({ acceptTnC });
  return (
    <Box>
      <Box>
        {/* Basic Checkbox */}
        <FormControlLabel
          control={<Checkbox onChange={handleChange} checked={acceptTnC} />}
          label="I accept the terms and conditions"
        />
      </Box>
      <Box>
        {/* Checkbox with Icon */}
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon color="warning" />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
