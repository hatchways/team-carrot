import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearButton from "./Icon";

class DismissButton extends Component {
  handleDismiss() {
    console.log("Dismiss is clicked");
    console.log(this.props.id);
  }
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

export default DismissButton;

// const DismissButton = props => {
//   const handleDismiss = event => {
//     console.log("Dismiss is clicked");
//   };

//   return (
//     <div>
//       <p onClick={handleDismiss}>X</p>
//     </div>
//   );
// };
