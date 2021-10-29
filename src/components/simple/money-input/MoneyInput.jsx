import "./MoneyInput.scss";

import React from "react";

export default function moneyInput(props) {
  let disableRad = "";
  if (props.disableOp === 0) {
    disableRad = "disabled";
  }
  return (
    <div className="moneyInput-wrapper">
      $
      <input
        type="number"
        name=""
        id=""
        className="moneyInput"
        value={props.placeholder}
      />
    </div>
  );
}
