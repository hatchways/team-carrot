import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../../assets/logo.png";
import HeaderButtons from "./DashHeaderComponents/HeaderButtons";
import HeaderProfile from "./DashHeaderComponents/HeaderProfile";
import { connect } from "react-redux";
import { loadNotifications } from "../../../stores/actions/getNotifications";

class DashHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Expand did mount");
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };

    this.props.loadNotifications(headers);
  }

  render() {
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
    console.log("DashHeader Props");
    console.log(this.props);
    console.log("DashHeader Props user");
    console.log(this.props.currentUser.user);
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
            <HeaderButtons
              notifications={this.props.currentNotifications.notifications.reverse()}
            />
            <HeaderProfile
              // user={
              //   Object.keys(this.props.currentUser.user).length === 0
              //     ? { name: "Dev Default" }
              //     : this.props.currentUser.user.payload.user
              // }
              user={this.props.currentUser.user.body.user}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNotifications: state.currentNotifications
  };
}

export default connect(
  mapStateToProps,
  { loadNotifications }
)(DashHeader);
