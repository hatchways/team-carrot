import React, { useState } from "react";
import HeaderPopOver from "./HeaderPopOver";
import HeaderPopOverList from "./HeaderPopOverList";
import Badge from "@material-ui/core/Badge";

const containerStyle = {
  display: "flex",
  alignItems: "center"
};

const HeaderButtons = props => {
  let [clicked, setClicked] = useState(props.notifications ? true : false);

  const clickHandler = e => {
    e.preventDefault();
    setClicked(true);
  };

  return (
    <div style={containerStyle}>
      <HeaderPopOverList
        name={"Shopping List"}
        shoppingList={props.shoppingList}
        store={props.store}
      />
      {/* <HeaderPopOver name={"Friends"} notifications={props.notifications} /> */}
      <Badge
        color="secondary"
        variant="dot"
        onClick={clickHandler.bind(this)}
        invisible={clicked}
      >
        <HeaderPopOver
          name={"Notifications"}
          notifications={props.notifications}
          loadNotifications={props.loadNotifications}
        />
      </Badge>
    </div>
  );
};

export default HeaderButtons;
