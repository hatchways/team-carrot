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

    // const landingTitleStyles = {
    //   display: "flex",
    //   justifyContent: "center",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   margin: "2.5vh",
    //   color: "white",
    //   fontSize: "1.8rem",
    //   textAlign: "center"
    // };

    return (
      <Fragment>
        <div className="landingImg" style={styles}>
          <Header />
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
