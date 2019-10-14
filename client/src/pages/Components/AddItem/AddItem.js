import React, { Component } from "react";
import Dropdown from "./Dropdown";
import "./AddItem.css";
import NewItem from "../../Dialogs/NewItem";
import ConfirmItem from "../../Dialogs/ConfirmItem";
import { connect } from "react-redux";
import { sendUrl } from "../../../stores/actions/sendURLGetItemInfo";
import { clearItemDetails } from "../../../stores/actions/clearItemsInfo";
import { saveItemUrl } from "../../../stores/actions/saveItemUrl";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false,
      handleConfirmDialog: false,
      itemInfoScrapped: {},
      currentShoppingList: {},
      currentItemUrl: "",
      linkInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  }

  handleClick(e) {
    this.setState({
      addClicked: !this.state.addClicked
    });
    this.props.store.dispatch(saveItemUrl(this.state.linkInput));
  }

  handleConfirmClose(e) {
    // clearItemDetails();
    console.log("This is hit");
    this.props.store.dispatch(clearItemDetails());
    // this.props.dispatch(clearItemDetails());
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
            value={this.state.linkInput}
            placeholder="Paste your link here"
            autoComplete="off"
            onChange={this.handleChange}
            className="additem-link-input"
          />
          <Dropdown currentShoppingList={this.props.shoppingList} />
          <NewItem
            open={this.state.addClicked}
            handleClick={this.handleClick.bind(this)}
            sendURL={sendUrl}
            store={this.props.store}
            link={this.props.currentItemUrl.link}
          />
          {Object.keys(this.props.itemInfoScrapped.details).length ? (
            <ConfirmItem
              open={true}
              handleClick={this.handleConfirmClose.bind(this)}
              itemInfo={this.props.itemInfoScrapped}
              currentShoppingList={this.props.shoppingList}
              currentLink={this.props.currentItemUrl}
              preSetListName={this.props.currentListName.preSelectedList}
              // resetItemDetails={resetItemDetails}
            />
          ) : null}
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
    itemInfoScrapped: state.itemInfoScrapped,
    currentItemUrl: state.currentItemUrl,
    currentListName: state.currentListName
  };
}

// export default AddItem;
export default connect(
  mapStateToProps,
  { sendUrl }
)(AddItem);
