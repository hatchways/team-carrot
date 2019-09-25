import React, { Component } from "react";
import "./Dashboard.css";
import DashHeader from "../Components/Layouts/DashHeader";
import AddItem from "../Components/AddItem/AddItem";

class DashBoardApp extends Component {
  render() {
    return (
      <div>
        <DashHeader />
        <AddItem />
      </div>
    );
  }
}

export default DashBoardApp;
