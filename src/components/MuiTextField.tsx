import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { RemoveRedEyeOutlinedIcon, VisibilityOffOutlinedIcon } from "./icons/icons";

function MuiTextField() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name outlined" variant="outlined" />
        <TextField label="Name filled" variant="filled" />
        <TextField label="Name standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField size="small" color="secondary" label=" small secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField size="small" color="secondary" label="Form Input " required />
        <TextField size="small" color="secondary" label="Form Input " />
        {/* error prop */}

        <TextField
          size="small"
          color="secondary"
          label="password"
          type="password"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          error={!value}
          helperText={value ? "Do not share your password with anyone" : "required"}
        />
        {/* read only is passed in input props */}
        <TextField
          size="small"
          color="secondary"
          label="read only"
          type="password"
          InputProps={{ readOnly: true }}
          helperText="this field is read-only"
        />
      </Stack>
      {/* Adding Adornments */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type={isVisible ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={handleVisibility}
                sx={{ ":hover": { cursor: "pointer" } }}
                position="end"
              >
                {isVisible ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
