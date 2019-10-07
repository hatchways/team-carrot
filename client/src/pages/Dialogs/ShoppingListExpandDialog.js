import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Fab from "@material-ui/core/Fab";
import { apiCallWithHeader } from "../../services/apiHeaders";
import "./ShoppingListExpandDialog.css";
import EachItemInList from "./EachItemInList";

const styles = theme => ({
  dialogPaper: {
    minHeight: "60vh",
    maxHeight: "60vh",
    minWidth: "45vw",
    maxWidth: "45vw",
    display: "flex",
    textAlign: "center",
    margin: "10px",
    padding: 20,
    backgroundColor: "#FBFCFF"
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
    marginTop: "15px",
    marginBottom: "15px",
    color: "white"
  }
});

class ShoppingListExpandDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      list: [
        { name: "Luxury" },
        { name: "Clothes" },
        { name: "Furniture" },
        { name: "Games" },
        { name: "Gadgets" }
      ],
      selectedFromList: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeDropdown(e) {
    this.setState({ selectedFromList: e.target.value }, () => {
      console.log("Current State");
      console.log(this.state);
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const type = "item";
    const userData = {
      name: "TempField",
      prices: [{ value: "20" }, { value: "30" }],
      url: this.state.link
    };

    const headers = {
      headers: {
        // "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    console.log(headers);
    console.log(headers.headers["x-auth-token"].length);
    console.log(localStorage.getItem("jwtToken").length);

    apiCallWithHeader(
      "post",
      `http://localhost:4000/${type}`,
      userData,
      headers
    );
  };

  render() {
    const { link, list, selectedFromList } = this.state;
    const { classes, name, items } = this.props;
    console.log("ShoppingListExppandProps");
    console.log(this.props);

    const allitems = items.map((item, index) => {
      return (
        <EachItemInList
          key={index}
          name={item.name}
          link={item.link}
          img={item.img}
          oldPrice={item.oldPrice}
          newPrice={item.newPrice}
        />
      );
    });

    const dropdown = list.map((item, index) => {
      return (
        <MenuItem
          key={index}
          label="Select"
          value={item.name}
          name={item.name}
          className={classes.menuDropdown}
        >
          {item.name}
        </MenuItem>
      );
    });

    return (
      <div>
        <Dialog
          classes={{ paper: classes.dialogPaper }}
          open={this.props.open}
          onClose={this.props.handleClick}
          aria-labelledby="form-dialog-title"
        >
          <div className="Expand-Dialog-Container">
            <h2 className="Expand-Dialog-Title">{name}</h2>
            <p className="Expand-Dialog-Subtitle">
              {items.length + " " + "Items"}
            </p>
            <div className="Expand-Dialog-Content-Container">{allitems}</div>
            <DialogActions>
              <Fab
                type="submit"
                label="Submit"
                variant="extended"
                size="large"
                className={classes.buttonStyles}
              >
                Add Item
              </Fab>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ShoppingListExpandDialog);
