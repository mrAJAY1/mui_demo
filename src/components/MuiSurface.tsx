import { Box, Card, CardContent, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

function MuiSurface() {
  return (
    <Stack px={20} pt={4}>
      {/* paper is a surface related component which is used to provide vision heirarchy */}
      <Paper
        elevation={4}
        sx={{
          padding: 4,
        }}
      >
        <Typography variant="h4" textAlign="center" mb={2}>
          Paper Component
        </Typography>
        <Stack
          sx={{ border: "1px solid " }}
          direction="row"
          spacing={2}
          divider={<Box width={20} height="inherit" bgcolor="success.light" />}
        >
          <Box
            sx={{
              backgroundColor: "error.dark",
              color: "white",
              width: 100,
              height: 100,
              padding: 2,
              "&:hover": {
                backgroundColor: "error.light",
              },
            }}
            component="section"
          >
            Hello
          </Box>
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
        </Stack>
        <Grid container>
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
          <Grid item sx={{ border: "1px solid" }} xs="auto">
            <Box p={2} bgcolor="primary.light">
              Item 3
            </Box>
          </Grid>
          <Grid item sx={{ border: "1px solid" }} xs>
            <Box p={2} bgcolor="primary.light">
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}

export default MuiSurface;
