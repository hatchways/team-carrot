import React, { Component, Fragment } from "react";
import { Dialog, Button } from "@material-ui";
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

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <Button variant="fab" mini>
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={this.state.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <h1>Login Dialog</h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Content for Login goes here.</DialogContentText>
          </DialogContent>
          <form></form>
          <DialogActions>
            <Button color="primary">Log In</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
