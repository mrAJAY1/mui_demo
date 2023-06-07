import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

// Define the Skill type with two properties: id - a number and label - a string
type Skill = {
  id: number;
  label: string;
};

// Define an array of strings called "skills"
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
];

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log({ skill });
  return (
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skills} // Pass the "skills" array as options to the Autocomplete component
        renderInput={(params) => <TextField {...params} label="Skills" />} // Pass the Textfield component's props to the Autocomplete's renderInput prop
        value={value}
        onChange={(_e: unknown, newValue: string | null) => setValue(newValue)}
      />
      {/* Free solo will allow the user to add random input data which is not included in autocomplete list */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(_e: unknown, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      {/* AutoComplete takes object as options. This is the most common method that is used. */}
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_e: unknown, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
