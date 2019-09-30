import React, { Component } from "react";
import "./Dashboard.css";
import DashHeader from "../Components/Layouts/DashHeader";
import AddItem from "../Components/AddItem/AddItem";
import ShoppingList from "../Components/ShoppingList/ShoppingList";
import { connect } from "react-redux";

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
    console.log("Dash Props");
    console.log(this.props);

    return (
      <div>
        <DashHeader {...this.props} />
        <AddItem />
        <ShoppingList shoppingList={this.state.shoppingList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(DashBoardApp);
