import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../../assets/logo.png";
import HeaderButtons from "./DashHeaderComponents/HeaderButtons";
import HeaderProfile from "./DashHeaderComponents/HeaderProfile";

const styleToolbar = {
  background: "#FFFFFF",
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between"
};

const styleToolbarRight = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center"
};

export default props => (
  <AppBar position="static">
    <Toolbar style={styleToolbar}>
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ height: "auto", width: "300px", paddingLeft: "50px" }}
        />
      </div>
      <div style={styleToolbarRight}>
        <HeaderButtons />
        <HeaderProfile />
      </div>
    </Toolbar>
  </AppBar>
);
