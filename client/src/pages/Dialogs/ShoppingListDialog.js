import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import AddPhoto from "./AddPhoto";

const styles = theme => ({
  dialogPaper: {
    minHeight: "40vh",
    maxHeight: "73vh",
    minWidth: "45vw",
    maxWidth: "45vw",
    display: "flex",
    textAlign: "center",
    margin: "10px",
    padding: 20
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
    fontWeight: 600
  },
  FormControl: {
    width: "60%"
  }
});

export default withStyles(styles)(
  class NewItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: this.props.open ? this.props.open : false
      };
    }

    handleClick() {
      this.setState({
        open: !this.state.open
      });
    }

    handleSubmit() {
      /* Make a post request somewhere */
    }

    render() {
      const { classes } = this.props;
      return (
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            New Shopping List
          </Button>
          <Dialog
            classes={
              ({ paper: classes.dialogContainer },
              { paper: classes.dialogPaper })
            }
            open={this.state.open}
            onClose={this.handleClick.bind(this)}
            aria-labelledby="form-dialog-title"
          >
            <Typography gutterBottom variant="h5">
              Create new List:
            </Typography>
            <DialogContent>
              <TextField
                fullWidth={true}
                placeholder="Paste your link here"
                value=""
                required={true}
                margin="normal"
              ></TextField>
              <Typography margin="normal" variant="h5">
                Add a Cover
              </Typography>
              <div>
                <AddPhoto />
              </div>

              <Button
                variant="contained"
                color="secondary"
                style={{
                  background: "#aa1717",
                  margin: "20px",
                  borderRadius: "33%",
                  width: "30%",
                  height: "15%",
                  padding: 10
                }}
                onClick={() => {
                  console.log("Momtaz");
                }}
              >
                Add Item
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      );
    }
  }
);
