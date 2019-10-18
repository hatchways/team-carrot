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
import { connect } from "react-redux";
import { loadEachItemInShoppingList } from "../../stores/actions/getItemInEachShoppingList";
import NewItem from "./NewItem";
import { sendUrl } from "../../stores/actions/sendURLGetItemInfo";
import { saveListName } from "../../stores/actions/setPreSelectedList";
import { clearListName } from "../../stores/actions/setPreSelectedList";

const styles = theme => ({
  dialogPaper: {
    minHeight: "auto",
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
      addClicked: false,
      link: "",
      list_name: "",
      selectedFromList: "",
      currentItemsInEachShoppingList: "",
      currentItemUrl: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    this.getItems = this.getItems.bind(this);
    this.clearListName = this.clearListName.bind(this);
  }

  getItems() {
    console.log("Expand did mount");
    const headers = {
      headers: {
        "x-auth-token": localStorage.getItem("jwtToken")
      }
    };
    const listName = this.props.listName;

    this.props.loadEachItemInShoppingList(headers, listName).then(() => {
      // console.log("This is the list name");
      // console.log(listName);
      this.setState(
        {
          currentItemsInEachShoppingList: this.props
            .currentItemsInEachShoppingList.items
        },
        () => {
          console.log("Current State of Expand Dialog");
          console.log(this.state);
        }
      );
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    this.setState(
      {
        addClicked: !this.state.addClicked,
        list_name: this.props.listName
      },
      () => {
        console.log(
          "This is state of ShoppinglistExpand Dialog with list_name"
        );
        console.log(this.state);
        this.props.store.dispatch(saveListName(this.state.list_name));
      }
    );
    // this.props.store.dispatch(saveListName(this.state.list_name));
  }

  clearListName(e) {
    console.log("Clear listName");
    this.props.store.dispatch(saveListName());
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
    // if (!this.state.currentItemsInEachShoppingList.length) return null;
    const {
      link,
      list,
      selectedFromList,
      currentItemsInEachShoppingList
    } = this.state;
    const { classes, listName, sendUrl } = this.props;

    console.log("ShoppingListExppandProps");
    console.log(this.props);

    console.log("ShoppingListExppandPropsInitialstate");
    console.log(this.state);

    // const allitems = currentItemsInEachShoppingList.map((item, index) => {
    //   return (
    //     <EachItemInList
    //       key={index}
    //       name={item.name}
    //       link={item.url}
    //       // img={item.img}
    //       // oldPrice={item.oldPrice}
    //       // newPrice={item.newPrice}
    //     />
    //   );
    // });

    return (
      <div>
        <Dialog
          classes={{ paper: classes.dialogPaper }}
          open={this.props.open}
          onClose={this.props.handleClick}
          aria-labelledby="form-dialog-title"
          onEnter={this.getItems}
          onExit={this.clearListName}
        >
          <div className="Expand-Dialog-Container">
            <h2 className="Expand-Dialog-Title">{listName}</h2>
            <p className="Expand-Dialog-Subtitle">
              {currentItemsInEachShoppingList.length + " " + "Items"}
            </p>
            <div className="Expand-Dialog-Content-Container">
              {currentItemsInEachShoppingList &&
                currentItemsInEachShoppingList.map((item, index) => {
                  return (
                    <EachItemInList
                      key={index}
                      name={item.name}
                      link={item.url}
                      img={item.pictureUrl}
                      oldPrice={
                        item.prices.length > 1 &&
                        "$" + item.prices[item.prices.length - 2].value
                      }
                      newPrice={"$" + item.prices[item.prices.length - 1].value}
                    />
                  );
                })}
            </div>
            <DialogActions>
              <Fab
                type="submit"
                label="Submit"
                variant="extended"
                size="large"
                className={classes.buttonStyles}
                onClick={this.handleClick.bind(this)}
              >
                Add Item
              </Fab>
            </DialogActions>
            <NewItem
              open={this.state.addClicked}
              handleClick={this.handleClick.bind(this)}
              sendURL={sendUrl}
              store={this.props.store}
              link={this.props.currentItemUrl.link}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    shoppingList: state.shoppingList, // left size is the state of this comp while right side is from redux
    currentShoppingList: state.currentShoppingList,
    currentItemsInEachShoppingList: state.currentItemsInEachShoppingList,
    currentItemUrl: state.currentItemUrl
  };
}

const mapDispatch = { sendUrl, loadEachItemInShoppingList, clearListName };

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatch
  )(ShoppingListExpandDialog)
);
