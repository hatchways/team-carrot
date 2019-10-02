import React, { Component, Fragment } from "react";
import Header from "./Components/Layouts/Header";
// import Footer from "./Components/Layouts/Footer";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Body</h1>
        <p>Text</p>
        {/* <Footer /> */}
      </Fragment>
    );
  }
}
