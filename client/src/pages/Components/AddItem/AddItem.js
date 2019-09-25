import React, { Component } from "react";
import Dropdown from "./Dropdown";
import "./AddItem.css";

class AddItem extends Component {
  render() {
    return (
      <div className="additem-container">
        <form>
          <input
            type="text"
            name="linkInput"
            placeholder="Paste your link here"
            autoComplete="off"
            onChange
            className="additem-link-input"
          />
          <Dropdown />

          <button type="submit" className="additem-button">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
