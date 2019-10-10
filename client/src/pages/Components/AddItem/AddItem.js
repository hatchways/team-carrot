import React, { Component } from "react";
import Dropdown from "./Dropdown";
import "./AddItem.css";
import NewItem from "../../Dialogs/NewItem";
import { connect } from "react-redux";
import { sendUrl } from "../../../stores/actions/sendURLGetItemInfo";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false,
      itemInfoScrapped: {}
    };
  }

  handleClick(e) {
    this.setState({
      addClicked: !this.state.addClicked
    });
  }

  render() {
    console.log("Add item props");
    console.log(this.props);
    const { sendUrl } = this.props;
    return (
      <div className="additem-container">
        <label>
          <h3>Add new item:</h3>
        </label>
        <div className="additem-first-input">
          <input
            type="text"
            name="linkInput"
            placeholder="Paste your link here"
            autoComplete="off"
            onChange
            className="additem-link-input"
          />
          <Dropdown />
          <NewItem
            open={this.state.addClicked}
            handleClick={this.handleClick.bind(this)}
            sendURL={sendUrl}
          />
          <button
            className="additem-button"
            onClick={this.handleClick.bind(this)}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemInfoScrapped: state.itemInfoScrapped
  };
}

// export default AddItem;
export default connect(
  mapStateToProps,
  { sendUrl }
)(AddItem);
