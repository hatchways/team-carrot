import React, { Component } from "react";
import { apiCallWithHeader } from "../../services/apiHeaders";
import { DeleteButton } from "./Delete";
import "./EachItemInList.css";
import axios from "axios";

class EachItemInList extends Component {
  constructor(props) {
    super(props);
    this.state = { deleteFlag: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleDelete = e => {
    e.preventDefault();
    const type = "item";
    const userData = {
      id: this.props.id
    };

    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    axios
      .delete(`http://localhost:4000/${type}`, {
        data: { id: this.props.id },
        headers: { "x-auth-token": localStorage.getItem("jwtToken") }
      })
      .then(res => {
        console.log(res);
        this.setState({ deleteFlag: false }, () => {
          this.props.getItem();
        });
      });
  };

  handleClickOpen() {
    this.setState({ deleteFlag: true });
  }

  handleClose() {
    this.setState({ deleteFlag: false });
  }

  render() {
    return (
      <div>
        <div className="EachItem-Container">
          <div className="EachItem-img-container">
            <img className="EachItem-img" src={this.props.img} alt="img"></img>
          </div>
          <div>
            <span className="EachItem-name">
              <p id="name">{this.props.name}</p>
              <p id="link">{this.props.link}</p>
              <span className="EachItem-price">
                <p id="oldPrice">{this.props.oldPrice}</p>
                <p id="newPrice">{this.props.newPrice}</p>
              </span>
            </span>
          </div>
          <DeleteButton
            itemId={this.props.id}
            handleDelete={this.handleDelete}
            open={this.state.deleteFlag}
            handleClose={this.handleClose}
            handleClickOpen={this.handleClickOpen}
          />
        </div>
      </div>
    );
  }
}

export default EachItemInList;
