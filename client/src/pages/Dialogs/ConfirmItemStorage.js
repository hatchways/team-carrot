import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Fab from "@material-ui/core/Fab";
import { apiCallWithHeader } from "../../services/apiHeaders";
import { connect } from "react-redux";
// import CheckItem from "./Icon";
// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from "@iconify/react";
import checkCircleOutline from "@iconify/icons-mdi/check-circle-outline";

const styles = theme => ({
  dialogPaper: {
    minHeight: "40vh",
    maxHeight: "40vh",
    minWidth: "35vw",
    maxWidth: "35vw",
    display: "flex",
    textAlign: "center",
    margin: "10px",
    padding: 20,
    overflow: "hidden"
  },
  formWidth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10
  },
  textFieldHeader: {
    margin: 0,
    fontWeight: 600,
    fontSize: 120,
    color: "green"
  },
  FormControl: {
    width: "60%"
  },
  textFieldDropdown: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "60%"
  },
  menuDropdown: {
    width: "500px"
  },
  buttonStyles: {
    width: "200px",
    background: "#DF1B1B",
    marginTop: "35px",
    color: "white"
  }
});

class ConfirmItemStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // handleClick(e) {
  //   this.setState({
  //     addClicked: !this.state.addClicked
  //   });
  // }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { link, list, selectedFromList, disableSelectList } = this.state;
    const { classes, show } = this.props;
    console.log("These are the Confirm Item Storage props");
    console.log(this.props);
    console.log("These are the Confirm Item Storage state");
    console.log(this.state);

    return (
      <div>
        <Dialog
          classes={
            ({ paper: classes.dialogContainer }, { paper: classes.dialogPaper })
          }
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <h3 style={{ textAlign: "center" }}>
              Item has been successfully added
            </h3>
          </DialogTitle>
          <p className={classes.textFieldHeader}>
            {" "}
            <Icon icon={checkCircleOutline} />
          </p>

          <br />
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ConfirmItemStorage);
