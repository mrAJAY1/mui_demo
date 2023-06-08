import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";

function MuiLayout() {
  return (
    // Stack is used to manage layout in one direction. either the horizontal or vertical
    // default style of stack is display flex and flex-direction coloumn
    // numeric inputs ofspacing, padding and other elements are applied as the product of 8px
    // Stack also accepts adivider props where we can provide a component as divider
    // there is also a divider componetthat is provided by MUI.
    <>
      <Stack
        sx={{ border: "1px solid " }}
        direction="row"
        spacing={2}
        // divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: "primary" }} />}
        divider={<Box width={20} height="inherit" bgcolor="success.light" />}
      >
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
      </Stack>
      {/* Grid enables us to create 2d layouts */}
      {/* Uses flex-box module */}
      {/* contains 12 columns */}
      {/* there are 5 breakpoints  xs,sm,md,lg,xl */}
      {/* number of columns on row are specified in breakpoint props */}
      <Grid container>
        {/* since 6 is half of 12 , column takes half width of contianer */}
        <Grid item sx={{ border: "1px solid" }} xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item sx={{ border: "1px solid" }} xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 2
          </Box>
        </Grid>
        <Grid item sx={{ border: "1px solid" }} xs={9}>
          <Box p={2} bgcolor="primary.light">
            Item 3
          </Box>
        </Grid>
        <Grid item sx={{ border: "1px solid" }} xs={3}>
          <Box p={2} bgcolor="primary.light">
            Item 4
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ m: 2 }} orientation="horizontal" />
      {/*  different width for different breakpoints */}
      <Grid container mt={3} width="100%" ml={0} rowSpacing={2} columnSpacing={3}>
        <Grid item sx={{ border: "1px solid" }} xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item sx={{ border: "1px solid" }} xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 2
          </Box>
        </Grid>
        {/* just specifying the breakpoints occupies the remaing space in the row */}
        <Grid item sx={{ border: "1px solid" }} xs="auto">
          <Box p={2} bgcolor="primary.light">
            Item 3
          </Box>
        </Grid>
        {/* breakpoint="auto" only takes the content width */}
        <Grid item sx={{ border: "1px solid" }} xs>
          <Box p={2} bgcolor="primary.light">
            Item 4
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ m: 2 }} />
    </>
  );
}

export default MuiLayout;
