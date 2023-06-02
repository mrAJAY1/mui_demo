import { Box, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";

function MuiCheckBox() {
  return (
    <Box>
      <Box>
        <FormControlLabel control={<Checkbox />} label="I accept the terms and conditions" />
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
