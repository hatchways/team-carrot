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

const DashHeader = props => {
  console.log("DashHeader Props");
  console.log(props);
  console.log("DashHeader Props user");
  console.log(props.currentUser.user);
  return (
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
          <HeaderProfile
            user={
              Object.keys(props.currentUser.user).length === 0
                ? { name: "Dev Default" }
                : props.currentUser.user.payload.user
            }
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DashHeader;
