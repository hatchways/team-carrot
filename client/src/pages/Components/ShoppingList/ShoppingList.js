import React, { Component } from "react";
import "./ShoppingList.css";
import ShoppingCard from "./ShoppingCard";
import EmptyCard from "./EmptyCard";
import ShoppingListDialog from "../../Dialogs/ShoppingListDialog";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false,
      openShopping: false
    };
  }

  handleClick() {
    this.setState({
      addClicked: !this.state.addClicked
    });
  }

  openShoppingList() {
    this.setState({
      openShopping: !this.state.openShopping
    });
  }

  render() {
    return (
      <div className="shoppingList-container">
        <div className="shoppingList-title">
          <h4>My Shopping List:</h4>
        </div>
        <div className="shoppingList-content">
          {this.props.shoppingList.map((item, index) => {
            return (
              <ShoppingCard
                key={index}
                name={item.name}
                img={item.img}
                items={item.items}
              />
            );
          })}
          <span onClick={this.openShoppingList.bind(this)}>
            <EmptyCard></EmptyCard>
            <ShoppingListDialog open={this.state.openShopping} />
          </span>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
