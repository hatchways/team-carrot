import React, { Component } from "react";
import "./Dashboard.css";
import DashHeader from "../Components/Layouts/DashHeader";
import AddItem from "../Components/AddItem/AddItem";
import ShoppingList from "../Components/ShoppingList/ShoppingList";
import { connect } from "react-redux";
import { addList } from "../../stores/actions/ShoppingListActions";

class DashBoardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: this.props.shoppingList,
      test: "",
      openNewItem: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(addList("John Cena"));
      console.log(this.state);
    }, 10 * 1000);
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
    currentUser: state.currentUser,
    shoppingList: state.shoppingList // left size is the state of this comp while right side is from redux
  };
}

export default connect(mapStateToProps)(DashBoardApp);
