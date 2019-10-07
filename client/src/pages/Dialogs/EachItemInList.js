import React, { Component } from "react";
import "./EachItemInList.css";

class EachItemInList extends Component {
  render() {
    return (
      <div>
        <div className="EachItem-Container">
          <div>
            <img className="EachItem-img" src={this.props.img} alt="img"></img>
          </div>
          <div>
            <span className="EachItem-name">
              <p id="name">{this.props.name}</p>
              <p id="link">{this.props.link}</p>
              <span className="EachItem-price">
                <p id="oldPrice">${this.props.oldPrice}</p>
                <p id="newPrice">${this.props.newPrice}</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default EachItemInList;
