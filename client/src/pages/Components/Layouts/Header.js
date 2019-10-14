import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Signup from "../../Dialogs/Signup";
import Login from "../../Dialogs/Login";
import logo from "../../../assets/logo.png";
import { connect } from "react-redux";
import { authUser } from "../../../stores/actions/auth";

class Header extends Component {
  render() {
    const { authUser, errors } = this.props;
    console.log("These are Props Header");
    console.log(this.props);
    return (
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
          <Signup errors={errors} onAuth={authUser} {...this.props} />
          <Login errors={errors} onAuth={authUser} {...this.props} />
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { authUser }
)(Header);

// export default props => (
//   <AppBar position="static">
//     <Toolbar style={{ background: "#eee" }}>
//       <Typography
//         variant="h6"
//         component="h1"
//         color="inherit"
//         style={{ flex: 1 }}
//       >
//         <img
//           src={logo}
//           alt="logo"
//           style={{ height: "auto", width: "300px", paddingLeft: "50px" }}
//         />
//       </Typography>
//       <Signup />
//       <Login />
//     </Toolbar>
//   </AppBar>
// );
