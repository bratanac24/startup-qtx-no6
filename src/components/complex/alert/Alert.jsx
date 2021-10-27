import "./Alert.scss";

import { ReactComponent as Close } from "../../../assets/svg/icon-close-modal.svg";

import React from "react";

export default function Alert() {
  return (
    <div className="alert-wrapper">
      <div className="alert">
        <Close className="close" />
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
    </div>
  );
}
