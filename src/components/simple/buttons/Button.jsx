import React from "react";
import "./Button.scss";

const Button = ({ label, places, doThis, value }) => {
  let disabled = "";
  if (places === 0) {
    disabled = "disabled";
  }
  return (
    <button className="btn" disabled={disabled} onClick={() => doThis(value)}>
      <h3>{label}</h3>
    </button>
  );
};

export default Button;
