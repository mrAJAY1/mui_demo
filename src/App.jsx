import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import MuiTypography from "./components/MuiTypography";
import "./App.css";
import MuiButton from "./components/MuiButton.tsx";
// This is the App component that returns some JSX to be rendered.
function App() {
  // Here we are defining a state variable called "value" and its corresponding update function "setValue"
  const [value, setValue] = useState(0);

  // We are also defining an array of React components used as menu items
  const menuItems = [<MuiTypography />, <MuiButton />];

  // This component returns an array of JSX elements which will be rendered on the page
  return (
    <>
      {/* We are rendering an element from the "menuItems" array based on the current value of "value" */}
      {menuItems[value]}

      {/* We are rendering a BottomNavigation component from Material-UI */}
      <BottomNavigation
        sx={{
          width: "100%",
          position: "absolute",
          background: "#98dcf7",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%,0)",
        }}
        showLabels
        value={value}
        // The onChange event will update the state variable "value" when the user interacts with the BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* The BottomNavigationAction components display icons and labels to represent different sections of the app */}
        <BottomNavigationAction label="TypoGraphy" icon={<TextFieldsIcon />} />
        <BottomNavigationAction label="Buttons" icon={<SmartButtonIcon />} />
      </BottomNavigation>
    </>
  );
}

export default App;
