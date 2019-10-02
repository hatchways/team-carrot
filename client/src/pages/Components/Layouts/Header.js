import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Signup from "../../Dialogs/Signup";
import Login from "../../Dialogs/Login";

const ToolBarStyle = {
  background: "#DF1B1B"
};

export default props => (
  <AppBar position="static">
    <Toolbar style={ToolBarStyle}>
      <Typography
        variant="h6"
        component="h2"
        color="inherit"
        style={{ flex: 1 }}
      >
        Header Component
      </Typography>
      <Signup />
      <Login />
    </Toolbar>
  </AppBar>
);
