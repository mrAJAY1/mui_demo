import { Box, Stack } from "@mui/material";
import React from "react";

function MuiLayout() {
  return (
    <>
      {/* Box is similar to div but has access to sx which enables to interact with theming, the component of box can be changed to anything from div using component prop */}
      <Box
        sx={{
          backgroundColor: "error.dark",
          color: "white",
          width: 100,
          height: 100,
          padding: 2,
          // giving number to padding will be a multiplication of 8px. here it is 2 so the padding will be 16px
          "&:hover": {
            backgroundColor: "error.light",
          },
        }}
        component="section"
      >
        Hello
      </Box>
      {/* style props */}
      <Box
        display="flex"
        width={100}
        height={100}
        bgcolor="primary.light"
        p={2}
        sx={{ ":hover": { backgroundColor: "black", color: "white" } }}
      >
        Hello again
      </Box>
      {/* for more , navigate to website of  material-Ui - system - properties  */}
    </>
  );
}

export default MuiLayout;
