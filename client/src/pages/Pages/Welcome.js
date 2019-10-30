import React, { Component, Fragment } from "react";
import Header from "../Components/Layouts/Header";
// import BackgroundImage from "../../assets/landingBackground.jpg";
import BackgroundImage from "../../assets/landingBackground1.jpg";
import BackgroundImageTwo from "../../assets/landingBackground2.jpg";
import "./Welcome.css";
import { connect } from "react-redux";
import { authUser } from "../../stores/actions/auth";
import Signup from "../Dialogs/Signup";
import Demo from "../Dialogs/Demo";

class Welcome extends React.Component {
  render() {
    const styles = {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh"
    };
    const { authUser } = this.props;
    const buttonstyle = {
      marginTop: "7vh"
    };

    console.log("Props Welcome");
    console.log(this.props);

    return (
      <Fragment>
        <div className="landingImg" style={styles}>
          <Header {...this.props} />
          <div className="landingTitle">
            <h1> Welcome to DealsMate.com</h1>
            <h4>Track, Save & Win! </h4>
            <span style={buttonstyle}>
              {/* <Signup onAuth={authUser} {...this.props} /> */}
              <Demo onAuth={authUser} {...this.props} />
            </span>
          </div>
        </div>
        {/* <Footer /> */}
      </Fragment>
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
)(Welcome);
