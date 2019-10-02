import React from "react";
import ProfilePicture from "../../../../assets/profiledemopic.png";

const styleContainer = {
  display: "flex",
  alignItems: "center",
  color: "black"
};

const stylePic = {
  height: "50px",
  width: "auto",
  //border: "2px solid black",
  borderRadius: "50%",
  margin: "0 10px"
};

const styleName = {
  margin: "0 5px"
};
const HeaderProfile = props => {
  console.log("Header Profile props");
  console.log(props);
  return (
    <div style={styleContainer}>
      <img src={ProfilePicture} alt="profilePic" style={stylePic} />
      <p style={styleName}>
        {props.user.name ? props.user.name : "Smiling Guy"}
      </p>
    </div>
  );
};

export default HeaderProfile;
