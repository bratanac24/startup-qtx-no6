import React from "react";
import "./Button.scss";

const Button = (props) => {
  let disabled = "";
  if (props.places === 0) {
    disabled = "disabled";
  }
  return (
    <button className={`btn ${disabled}`}>
      <h3>{props.label}</h3>
    </button>
  );
};

export default Button;
