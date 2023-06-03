import React, { useState } from "react";

import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { SendIcon, FormatBoldIcon, FormatItalicIcon, FormatUnderlinedIcon } from "./icons/icons";

function MuiButton() {
  const [format, setFormat] = useState<string[]>([]);
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormat(updatedFormats);
  };
  console.log(format);
  return (
    /* Stack is a layout component provided by Material-UI that allows you to easily
     stack multiple components on top of each other. It simplifies the process of vertically 
     aligning and distributing components. */
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* Button has the features of anchor tag */}
        <Button variant="contained" href="https://www.google.com" target="_blank">
          contained{" "}
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        {/* color prop */}
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      {/* display = block to change display flex. 
      flex may affect button sizes */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        {/* start Icon adds an icon at the starting point for end, the opposite */}
        <Button variant="contained" startIcon={<SendIcon />}>
          {" "}
          Send
        </Button>
        {/* disable elevation, disable ripple  */}
        <Button variant="contained" disableElevation disableRipple endIcon={<SendIcon />}>
          {" "}
          Send
        </Button>
        {/* Icon button */}
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        {/* ButtonGroup */}
        {/* This code creates a ButtonGroup component with 3 Button components
        inside it.  The variant prop is set to "outlined" which gives the
        buttons a bordered appearance. */}
        <ButtonGroup
          variant="outlined"
          orientation="horizontal"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="column" spacing={2}>
        {/* ToggleButtonGroup  */}
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          color="primary"
          onChange={handleFormatChange}
          //  exclusive - this will allow user to select only one at a time. the state
          //  type should be changed to string | null accordingly
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography
          sx={{
            textDecoration: `${format.includes("underline") && "underline"}`,
            fontStyle: `${format.includes("italic") && "italic"}`,
            fontWeight: `${format.includes("bold") && "bold"}`,
          }}
        >
          This is the sample text
        </Typography>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
