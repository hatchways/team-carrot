import React, { Component } from "react";
import "./Dashboard.css";
import DashHeader from "../Components/Layouts/DashHeader";
import AddItem from "../Components/AddItem/AddItem";
import ShoppingList from "../Components/ShoppingList/ShoppingList";

class DashBoardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [
        { name: "Clothes", img: "Clothes.png", items: [{}, {}, {}] },
        { name: "Furniture", img: "Furniture.png", items: [{}, {}, {}] },
        { name: "Luxury", img: "Watches.png", items: [{}, {}, {}] }
      ],
      openNewItem: false
    };
  }

  render() {
    return (
      <div>
        <DashHeader />
        <AddItem />
        <ShoppingList shoppingList={this.state.shoppingList} />
      </div>
    );
  }
}

export default DashBoardApp;
