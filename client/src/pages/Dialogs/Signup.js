import React, { Component, Fragment } from "react";
import { Dialog, Button } from "@material-ui/core";
// import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";
import { NONAME } from "dns";

const styles = theme => ({
  dialogPaper: {
    minHeight: "90vh",
    maxHeight: "90vh",
    minWidth: "50vw",
    maxWidth: "50vw",
    display: "flex",
    alignItems: "center"
  },
  formWidth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textFieldHeader: {
    margin: 0,
    fontWeight: 600
  },
  FormControl: {
    width: "65%"
  },
  footerDialog: {
    borderTop: "1px solid lightgray",
    marginTop: "25px",
    paddingTop: "10px",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  footerLink: {
    textDecoration: "none",
    color: "#DF1B1B"
  }
});

export default withStyles(styles)(
  class Login extends React.Component {
    state = {
      open: false,
      data: {
        name: "",
        email: "",
        password: ""
      }
    };

    handleToggle = () => {
      this.setState({
        open: !this.state.open
      });
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        data: {
          ...this.state.data,
          [name]: value
        }
      });
    };

    render() {
      const {
        open,
        data: { name, email, password }
      } = this.state;

      const { classes } = this.props;

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
          <Dialog
            open={open}
            onClose={this.handleToggle.bind(this)}
            classes={
              ({ paper: classes.dialogContainer },
              { paper: classes.dialogPaper })
            }
          >
            <DialogTitle id="form-dialog-title">
              <h3 style={{ textAlign: "center" }}>Sign Up</h3>
            </DialogTitle>

            <form className={classes.formWidth}>
              <p className={classes.textFieldHeader}>Your Name:</p>
              <TextField
                id="outlined-name-input"
                label="Name"
                value={name}
                onChange={this.handleChange("name")}
                margin="normal"
                variant="outlined"
                className={classes.FormControl}
              />
              <br />
              <p className={classes.textFieldHeader}>Your e-mail address:</p>
              <TextField
                id="outlined-email-input"
                label="Email"
                value={email}
                onChange={this.handleChange("email")}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                className={classes.FormControl}
              />
              <br />
              <p className={classes.textFieldHeader}>Password:</p>
              <TextField
                id="outlined-password-input"
                label="Password"
                value={password}
                onChange={this.handleChange("password")}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                className={classes.FormControl}
              />
            </form>

            <DialogActions>
              <Fab
                variant="extended"
                size="large"
                style={{
                  width: "200px",
                  background: "#DF1B1B",
                  marginTop: "20px",
                  color: "white"
                }}
              >
                Sign Up
              </Fab>
            </DialogActions>
            <div className={classes.footerDialog}>
              <p style={{ fontWeight: 600 }}>
                Already a member?{" "}
                <span className={classes.footerSpan}>
                  <a href="#" className={classes.footerLink}>
                    Sign In
                  </a>
                </span>
              </p>
            </div>
          </Dialog>
        </Fragment>
      );
    }
  }
);
