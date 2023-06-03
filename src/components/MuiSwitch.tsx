import React, { useState } from "react";
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from "@mui/material";

function MuiSwitch() {
  const [checked, setChecked] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = checked.indexOf(event.target.value);
    if (index === -1) setChecked([...checked, event.target.value]);
    else setChecked(checked.filter((value) => value !== event.target.value));
  };
  console.log({ checked });
  return (
    <Box>
      <Box>
        <FormControlLabel label="Dark Mode" control={<Switch onChange={handleChange} />} />
      </Box>
      <hr />
      <FormControl error>
        <FormLabel> Form Group row</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="Cookies"
            control={<Switch onChange={handleChange} value="cookies" />}
          />
          <FormControlLabel
            label="Local storage"
            control={<Switch onChange={handleChange} value="localStorage" />}
          />
          <FormControlLabel
            label="Session storage"
            control={<Switch onChange={handleChange} value="sessionStorage" />}
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default MuiSwitch;
