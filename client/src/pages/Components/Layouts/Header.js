import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Signup from "../../Dialogs/Signup";
import Login from "../../Dialogs/Login";
import logo from "../../../assets/logo.png";
export default props => (
  <AppBar position="static">
    <Toolbar style={{ background: "#eee" }}>
      <Typography
        variant="h6"
        component="h1"
        color="inherit"
        style={{ flex: 1 }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "auto", width: "300px", paddingLeft: "50px" }}
        />
      </Typography>
      <Signup />
      <Login />
    </Toolbar>
  </AppBar>
);
