import React, { Component } from "react";
import "./Dashboard.css";
import DashHeader from "../Components/Layouts/DashHeader";
import AddItem from "../Components/AddItem/AddItem";
import ShoppingList from "../Components/ShoppingList/ShoppingList";
import { connect } from "react-redux";
import { loadShoppingList } from "../../stores/actions/getList";

class DashBoardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: [],
      test: "",
      openNewItem: false
    };
  }

  componentDidMount() {
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    this.props.loadShoppingList(headers).then(() => {
      this.setState({ shoppingList: this.props.currentShoppingList.list });
    });
  }

  render() {
    console.log("Dash Props");
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <DashHeader {...this.props} />
        <AddItem />
        <ShoppingList
          onSubmit={this.componentDidMount.bind(this)}
          shoppingList={this.state.shoppingList}
        />
        {/* <ShoppingList /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    shoppingList: state.shoppingList, // left size is the state of this comp while right side is from redux
    currentShoppingList: state.currentShoppingList
  };
}

export default connect(
  mapStateToProps,
  { loadShoppingList }
)(DashBoardApp);
