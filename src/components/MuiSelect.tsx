import { TextField, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <Stack spacing={3}>
      <Stack width={250}>
        <Typography variant="h6">Multiple select</Typography>
        {/* Multi select */}
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          color="secondary"
          helperText="please select countries"
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Autralia</MenuItem>
        </TextField>
      </Stack>
      <hr />
      <Stack width={250}>
        <TextField label="Select country" select value={country} onChange={handleChange2} fullWidth>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Autralia</MenuItem>
        </TextField>
      </Stack>
    </Stack>
  );
}

export default MuiSelect;
