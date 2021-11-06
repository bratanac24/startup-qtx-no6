import React from "react";
import "./Button.scss";

const Button = ({ label, places, doThis, value, thisToo, value2 }) => {
  const doSecond = () => {
    if (value2 === false) {
      thisToo(value2);
    }
  };
  return (
    <button
      className="btn"
      disabled={places === 0 ? "disabled" : ""}
      onClick={() => {
        doThis(value);
        doSecond();
      }}>
      <h3>{label}</h3>
    </button>
  );
};

export default Button;
