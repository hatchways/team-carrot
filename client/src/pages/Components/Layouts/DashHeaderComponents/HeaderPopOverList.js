import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DismissButton from "./DismissButton";
import "./HeaderPopOverList.css";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(0.1)
  }
}));

export default function HeaderPopOver(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleDismiss = event => {
    // console.log("Dismiss is clicked");
  };

  // console.log("HeaderPopOver props");
  // console.log(props);

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        {props.name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        PaperProps={{
          style: {
            maxHeight: 75 * 3.5,
            width: "25%"
          }
        }}
        className="MuiPaper-root.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded"
      >
        {props.shoppingList &&
          props.shoppingList.map((item, index) => {
            return (
              <Typography key={index} className={classes.typography}>
                <div>
                  <div className="EachItem-Container">
                    <div className="EachItem-img-container">
                      {item.url && (
                        <img
                          className="EachItem-img"
                          src={item.url}
                          alt="img"
                        ></img>
                      )}
                    </div>
                    <div>
                      <span className="EachItem-name">
                        {item.name && <p id="listname">{item.name}</p>}
                        {/* {item.itemUrl && <p id="link">{item.itemUrl}</p>} */}
                        {/* <span className="EachItem-price">
                          <p id="oldPrice">${item.previousPrice}</p>
                          <p id="newPrice">${item.newPrice}</p>
                        </span> */}
                      </span>
                    </div>
                    <span>
                      {/* <DismissButton
                      // itemDetail={item}
                      // loadNotifications={props.loadNotifications}
                      ></DismissButton> */}
                    </span>
                  </div>
                </div>
              </Typography>
            );
          })}
      </Popover>
    </div>
  );
}
