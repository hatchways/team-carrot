import React, { Component, Fragment } from "react";
import { Dialog, Button } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { ThemeProvider } from "@material-ui/styles";
import Axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const styles = theme => ({
  dialogPaper: {
    minHeight: "95vh",
    maxHeight: "95vh",
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
    width: "60%",
    marginTop: "5px",
    marginBottom: "15px"
  },
  footerDialog: {
    borderTop: "1px solid lightgray",
    marginTop: "15px",
    paddingTop: "5px",
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
  class SignUp extends React.Component {
    state = {
      open: true,
      mismatch: false,
      data: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
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
          [name]: value,
          message: ""
        },
        mismatch: false
      });
    };

    handleSubmit = data => {
      const { password, confirmPassword, message } = data;
      if (password !== confirmPassword) {
        this.setState({
          mismatch: !this.state.mismatch,
          data: {
            ...this.state.data,
            message: "Password does not match"
          }
        });
      } else {
        try {
          Axios.post("http://localhost:3000/user/register", {
            name: data.name,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
          }).then(res => {
            console.log(res);
          });
        } catch (error) {
          console.log(error);
        }
      }
    };

    render() {
      const {
        open,
        mismatch,
        data: { name, email, password, confirmPassword, message }
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
            <DialogTitle
              id="form-dialog-title"
              style={{ height: "40px", padding: "25px", marginBottom: "10px" }}
            >
              <h3 style={{ textAlign: "center" }}>Sign Up</h3>
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
              <p className={classes.textFieldHeader}>Your Name:</p>
              <ThemeProvider theme={theme}>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  value={name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  variant="outlined"
                  className={classes.FormControl}
                  required
                />

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
                  required
                />

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
                  inputProps={{ minLength: 6 }}
                  required
                />

                <p className={classes.textFieldHeader}>Confirm Password:</p>
                <FormControl className={classes.FormControl} error={mismatch}>
                  <TextField
                    id="outlined-confirmPassword-input"
                    label="Password"
                    value={confirmPassword}
                    onChange={this.handleChange("confirmPassword")}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    style={{ marginTop: "4px" }}
                    inputProps={{ minLength: 6 }}
                    error={mismatch}
                    required
                  />
                  <FormHelperText id="component-error-text">
                    {message}
                  </FormHelperText>
                </FormControl>
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
                  Create Account
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
            </form>
          </Dialog>
        </Fragment>
      );
    }
  }
);
