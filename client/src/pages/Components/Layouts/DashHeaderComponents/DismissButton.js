import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearButton from "./Icon";
import { apiCallWithHeader } from "../../../../services/apiHeaders";
// import { loadNotifications } from "../../../../stores/actions/getNotifications";
// import { connect } from "react-redux";

class DismissButton extends Component {
  handleDismiss = e => {
    e.preventDefault();

    // console.log("Dismiss Comp props");
    // console.log(this.props);
    // console.log("Dismiss is clicked");
    // console.log(this.props.itemDetail);
    // console.log(this.props.itemDetail.timestamp);
    const type = "dismiss";
    const userData = {
      id: this.props.itemDetail._id
      // name: this.props.itemInfo.details.data.name,
      // list_name: this.state.selectedFromList,
      // prices: this.props.itemInfo.details.data.prices,
      // pictureUrl: this.props.itemInfo.details.data.pictureUrl
    };

    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    // console.log(headers);
    // console.log(headers.headers["x-auth-token"].length);
    // console.log(localStorage.getItem("jwtToken").length);

    // this.props.sendURL(userData, headers);

    apiCallWithHeader(
      "put",
      `http://localhost:4000/notification/${type}`,
      userData,
      headers
    ).then(res => {
      // console.log(res);
      const timestamp = this.props.itemDetail.timestamp;
      this.props.loadNotifications(headers, timestamp);
    });
  };

  render() {
    const DismissStyle = {
      marginBottom: "80px"
    };

    return (
      <div>
        <div>
          <p style={DismissStyle} onClick={this.handleDismiss.bind(this)}>
            <ClearButton />
          </p>
        </div>
      </div>
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     currentNotifications: state.currentNotifications
//   };
// }

// export default connect(
//   mapStateToProps,
//   { loadNotifications }
// )(DismissButton);

export default DismissButton;
