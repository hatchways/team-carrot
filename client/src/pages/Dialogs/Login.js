import React, { Component, Fragment } from "react";
import { Dialog, Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { ThemeProvider } from "@material-ui/styles";
import axios from "axios";

const styles = theme => ({
  dialogPaper: {
    minHeight: "73vh",
    maxHeight: "73vh",
    minWidth: "45vw",
    maxWidth: "45vw",
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
    width: "60%"
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e21919"
    }
  }
});

export default withStyles(styles)(
  class Signin extends React.Component {
    state = {
      open: true,
      data: {
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

    handleSubmit = data => {
      try {
        axios
          .post("http://localhost:3000/user/login", {
            email: data.email,
            password: data.password
          })
          .then(res => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      const {
        open,
        data: { email, password }
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
            Sign In
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
              <h3 style={{ textAlign: "center" }}>Sign In</h3>
            </DialogTitle>

            <form
              action="/"
              method="POST"
              onSubmit={e => {
                e.preventDefault();
                this.handleSubmit(this.state.data);
              }}
              className={classes.formWidth}
            >
              <p className={classes.textFieldHeader}>Your e-mail address:</p>
              <ThemeProvider theme={theme}>
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
                  minLength="5"
                  className={classes.FormControl}
                  inputProps={{ minLength: 6 }}
                />
              </ThemeProvider>

              <DialogActions>
                <Fab
                  type="submit"
                  label="Submit"
                  variant="extended"
                  size="large"
                  style={{
                    width: "200px",
                    background: "#DF1B1B",
                    marginTop: "20px",
                    color: "white"
                  }}
                >
                  Sign In
                </Fab>
              </DialogActions>
              <div className={classes.footerDialog}>
                <p style={{ fontWeight: 600 }}>
                  Don't have an account?{" "}
                  <span className={classes.footerSpan}>
                    <a href="#" className={classes.footerLink}>
                      Create an Account
                    </a>
                  </span>
                </p>
              </div>
            </form>
          </Dialog>
        </Fragment>
      );
    }
  }
);
