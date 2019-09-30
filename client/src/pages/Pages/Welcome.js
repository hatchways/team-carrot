import React, { Component, Fragment } from "react";
import Header from "../Components/Layouts/Header";
import BackgroundImage from "../../assets/landingBackground.jpg";
import "./Welcome.css";
// import Footer from "./Components/Layouts/Footer";

export default class extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "100vh",
      width: "auto"
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
          </div>
        </div>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}
