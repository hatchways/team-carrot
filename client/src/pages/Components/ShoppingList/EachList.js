import React, { Component } from "react";
import "./EachList.css";

class ShoppingList extends Component {
  render() {
    const { name, img } = this.props;
    const itemCount = this.props.items.length;

    return (
      <div className="eachList-card">
        <div className="eachList-card-img">
          <img src={img} alt="cardImage" />
        </div>
        <div className="eachList-content">
          <div>{name}</div>
          <div>{itemCount}</div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
