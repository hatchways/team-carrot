import React, { Component } from "react";
import "./Dashboard.css";
import DashHeader from "../Components/Layouts/DashHeader";
import AddItem from "../Components/AddItem/AddItem";
import ShoppingList from "../Components/ShoppingList/ShoppingList";
import { connect } from "react-redux";
import { loadShoppingList } from "../../stores/actions/getList";
import { configureStore } from "../../stores";

const store = configureStore();

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
    console.log("Dash State");
    console.log(this.state);

    return (
      <div>
        <DashHeader {...this.props} store={store} />
        <AddItem store={store} shoppingList={this.state.shoppingList} />
        <ShoppingList
          onSubmit={this.componentDidMount.bind(this)}
          shoppingList={this.state.shoppingList}
          store={store}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    shoppingList: state.shoppingList, // left size is the state of this comp while right side is from redux
    currentShoppingList: state.currentShoppingList,
    currentItemUrl: state.currentItemUrl
  };
}

export default connect(
  mapStateToProps,
  { loadShoppingList }
)(DashBoardApp);
