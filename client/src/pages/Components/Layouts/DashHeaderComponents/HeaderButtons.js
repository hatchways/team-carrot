import React from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center"
};

const buttonStyle = {
  margin: "0 15px",
  border: "none",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  fontWeight: "550"
};

const HeaderButtons = props => {
  return (
    <div style={containerStyle}>
      <button className="headButton" style={buttonStyle}>
        Shopping List
      </button>
      <button className="headButton" style={buttonStyle}>
        Friends
      </button>
      <button className="headButton" style={buttonStyle}>
        Notifications
      </button>
    </div>
  );
};

export default HeaderButtons;