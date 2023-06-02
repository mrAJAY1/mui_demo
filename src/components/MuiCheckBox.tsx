import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React, { useState } from "react";

function MuiCheckBox() {
  const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  console.log({ skills });
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
      <Box>
        {/* Checkbox group */}
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="html"
                  onChange={handleSkillChange}
                  checked={skills.includes("html")}
                />
              }
              label="HTML"
            />{" "}
            <FormControlLabel
              control={
                <Checkbox
                  value="javascript"
                  onChange={handleSkillChange}
                  checked={skills.includes("javascript")}
                />
              }
              label="javaScript"
            />{" "}
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  onChange={handleSkillChange}
                  checked={skills.includes("css")}
                />
              }
              label="CSS"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        {/* More props */}
        {/* error */}
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          {/* row */}
          <FormGroup row>
            <FormControlLabel
              // size, color
              control={
                <Checkbox
                  value="html"
                  size="small"
                  color="secondary"
                  onChange={handleSkillChange}
                  checked={skills.includes("html")}
                />
              }
              label="HTML"
            />{" "}
            <FormControlLabel
              control={
                <Checkbox
                  value="javascript"
                  onChange={handleSkillChange}
                  checked={skills.includes("javascript")}
                />
              }
              label="javaScript"
            />{" "}
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  onChange={handleSkillChange}
                  checked={skills.includes("css")}
                />
              }
              label="CSS"
            />
          </FormGroup>
          {/* Form Helper */}
          <FormHelperText>Inalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
