import React, { Component } from "react";
import "./ShoppingList.css";
import ShoppingCard from "./ShoppingCard";
import EmptyCard from "./EmptyCard";
import ShoppingListDialog from "../../Dialogs/ShoppingListDialog";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false
    };
  }

  handleClick() {
    this.setState({
      addClicked: !this.state.addClicked
    });
  }

  render() {
    console.log("Shopping List Props");
    console.log(this.props);
    return (
      <div className="shoppingList-container">
        <div className="shoppingList-title">
          <h4>My Shopping List:</h4>
        </div>
        <div className="shoppingList-content">
          {this.props.shoppingList.map((item, index) => {
            return <ShoppingCard key={index} name={item.name} img={item.url} />;
          })}
          <ShoppingListDialog
            open={this.state.addClicked}
            handleClick={this.handleClick.bind(this)}
            onSubmit={this.props.onSubmit.bind(this)}
          />
          <span onClick={this.handleClick.bind(this)}>
            <EmptyCard></EmptyCard>
          </span>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
