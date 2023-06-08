import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import {
  MuiTypography,
  MuiButton,
  MuiTextField,
  MuiSelect,
  MuiCheckBox,
  MuiRadio,
  MuiSwitch,
  MuiRating,
  MuiAutoComplete,
  MuiLayout,
} from "./components";
import "./App.css";
import {
  CheckBoxOutlinedIcon,
  CheckCircleOutlineIcon,
  GradeIcon,
  RadioButtonCheckedOutlinedIcon,
  SmartButtonIcon,
  TextFieldsIcon,
  TitleIcon,
  ToggleOnIcon,
  AutoAwesome,
  DashboardIcon,
} from "./components/icons/icons";
// This is the App component that returns some JSX to be rendered.
function App() {
  // Here we are defining a state variable called "value" and its corresponding update function "setValue"
  const [value, setValue] = useState(0);

  // We are also defining an array of React components used as menu items
  const menuItems = [
    { component: <MuiTypography />, icon: <TitleIcon />, label: "Typography" },
    { component: <MuiButton />, icon: <SmartButtonIcon />, label: "Button" },
    { component: <MuiTextField />, icon: <TextFieldsIcon />, label: "Text field" },
    { component: <MuiSelect />, icon: <CheckCircleOutlineIcon />, label: "Select" },
    { component: <MuiCheckBox />, icon: <CheckBoxOutlinedIcon />, label: "Check Box" },
    { component: <MuiRadio />, icon: <RadioButtonCheckedOutlinedIcon />, label: "Radio Button" },
    { component: <MuiSwitch />, icon: <ToggleOnIcon />, label: "Switch" },
    { component: <MuiRating />, icon: <GradeIcon />, label: "Rating" },
    { component: <MuiAutoComplete />, icon: <AutoAwesome />, label: "AutoComplete" },
    { component: <MuiLayout />, icon: <DashboardIcon />, label: "Layout" },
  ];
  // This component returns an array of JSX elements which will be rendered on the page
  return (
    <>
      {/* We are rendering an element from the "menuItems" array based on the current value of "value" */}
      {menuItems[value].component}

      {/* We are rendering a BottomNavigation component from Material-UI */}
      <div
        style={{
          overflowX: "auto",
          bottom: 0,
          left: 0,
          width: "100vw",
          position: "fixed",
        }}
      >
        <BottomNavigation
          sx={{ background: "#98dcf7", width: "fit-content", justifyContent: "flex-start" }}
          showLabels
          value={value}
          // The onChange event will update the state variable "value" when the user interacts with the BottomNavigation
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {/* The BottomNavigationAction components display icons and labels to represent different sections of the app */}
          {menuItems.map((item) => (
            <BottomNavigationAction label={item.label} icon={item.icon} />
          ))}
        </BottomNavigation>
      </div>
    </>
  );
}

export default App;
