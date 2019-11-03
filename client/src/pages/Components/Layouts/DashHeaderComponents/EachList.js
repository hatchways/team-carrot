import React, { Component } from "react";
import EachListExpand from "./EachListExpand";
import Typography from "@material-ui/core/Typography";
import "./HeaderPopOverList.css";

class EachList extends Component {
  constructor(props) {
    super(props);
    this.state = { addClicked: false };
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    console.log("togglelist is fired");
    this.setState(
      {
        addClicked: !this.state.addClicked
      },
      () => {
        console.log("This is add clicked from EachList");
        console.log(this.state.addClicked);
      }
    );
  }

  render() {
    console.log("EachListProps");
    console.log(this.props);
    return (
      <div>
        <div onClick={this.toggleList}>
          {/* <Typography key={index} className={classes.typography}> */}
          <Typography>
            <div>
              <div className="EachItem-Container">
                <div className="EachItem-img-container">
                  {this.props.imgUrl && (
                    <img
                      className="EachItem-img"
                      src={this.props.imgUrl}
                      alt="img"
                    ></img>
                  )}
                </div>
                <div>
                  <span className="EachItem-name">
                    {this.props.listName && (
                      <p id="listname">{this.props.listName}</p>
                    )}
                  </span>
                </div>
                <span></span>
              </div>
            </div>
          </Typography>
        </div>
        <EachListExpand
          open={this.state.addClicked}
          handleClick={this.toggleList}
          listName={this.props.listName}
          store={this.props.store}
        ></EachListExpand>{" "}
      </div>
    );
  }
}

export default EachList;
