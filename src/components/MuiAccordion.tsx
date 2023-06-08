import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function MuiAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    //* Accordion allows users to show and hide relative content
    <Stack spacing={4}>
      <Box>
        <Accordion>
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            <Typography variant="h3">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis, repellendus
              obcaecati fugiat magni harum odio aliquid voluptate fugit dolorem, assumenda provident
              corrupti sapiente excepturi amet ducimus? Sunt, ex voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMore />}
          >
            <Typography variant="h3">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis, repellendus
              obcaecati fugiat magni harum odio aliquid voluptate fugit dolorem, assumenda provident
              corrupti sapiente excepturi amet ducimus? Sunt, ex voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMore />}
          >
            <Typography variant="h3">Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis, repellendus
              obcaecati fugiat magni harum odio aliquid voluptate fugit dolorem, assumenda provident
              corrupti sapiente excepturi amet ducimus? Sunt, ex voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Accordion -  one open at a time */}
      <Box p={1} bgcolor="yellow">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(_event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            <Typography variant="h3">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis, repellendus
              obcaecati fugiat magni harum odio aliquid voluptate fugit dolorem, assumenda provident
              corrupti sapiente excepturi amet ducimus? Sunt, ex voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(_event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMore />}
          >
            <Typography variant="h3">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis, repellendus
              obcaecati fugiat magni harum odio aliquid voluptate fugit dolorem, assumenda provident
              corrupti sapiente excepturi amet ducimus? Sunt, ex voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={(_event, isExpanded) => handleChange(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMore />}
          >
            <Typography variant="h3">Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis, repellendus
              obcaecati fugiat magni harum odio aliquid voluptate fugit dolorem, assumenda provident
              corrupti sapiente excepturi amet ducimus? Sunt, ex voluptate?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}

export default MuiAccordion;
