import React from "react";
import HeaderPopOver from "./HeaderPopOver";

const containerStyle = {
  display: "flex",
  alignItems: "center"
};

const HeaderButtons = props => {
  console.log("HeaderButton Props");
  console.log(props);
  return (
    <div style={containerStyle}>
      <HeaderPopOver
        name={"Shopping List"}
        notifications={props.notifications}
      />
      <HeaderPopOver name={"Friends"} notifications={props.notifications} />
      <HeaderPopOver
        name={"Notifications"}
        notifications={props.notifications}
      />
    </div>
  );
};

export default HeaderButtons;
