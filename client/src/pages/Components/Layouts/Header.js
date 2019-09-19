import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Signup from "../../Dialogs/Signup";
import Login from "../../Dialogs/Login";

export default props => (
  <AppBar position="static">
    <Toolbar style={{ background: "#DF1B1B" }}>
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
