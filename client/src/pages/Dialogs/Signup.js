import React, { Component, Fragment } from "react";
import { Dialog, Button } from "@material-ui/core";
// import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

export default class Login extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <Button
          variant="contained"
          color="secondary"
          style={{ background: "#aa1717", margin: "20px" }}
          onClick={this.handleToggle.bind(this)}
          mini
        >
          Sign Up
        </Button>
        <Dialog open={open} onClose={this.handleToggle.bind(this)}>
          <DialogTitle id="form-dialog-title">
            <h1>Sign up Dialog</h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Content for sign up goes here.
            </DialogContentText>
          </DialogContent>
          <form>
            <input></input>
            <input></input>
          </form>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              style={{ background: "#DF1B1B" }}
            >
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
