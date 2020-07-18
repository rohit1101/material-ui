import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { StylesProvider } from "@material-ui/core/styles";
import { Btn } from "./Button/Button.jsx";

function App() {
  return (
    <StylesProvider injectFirst>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Btn />
        </Toolbar>
      </AppBar>
    </StylesProvider>
  );
}

export default App;
