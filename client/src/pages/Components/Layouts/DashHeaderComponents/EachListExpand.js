import React, { Component } from "react";
import ShoppingListExpandDialog from "../../../Dialogs/ShoppingListExpandDialog";

class EachListExpand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("EachListExpandProps");
    console.log(this.props);
    return (
      <div>
        <ShoppingListExpandDialog
          open={this.props.open}
          handleClick={this.props.handleClick}
          listName={this.props.listName}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default EachListExpand;
