import "./ThanksCard.scss";

import Button from "../../simple/buttons/Button";
import React from "react";
import { ReactComponent as CheckIcon } from "../../../assets/svg/icon-check.svg";
export default function thanksCard({ setThanks }) {
  return (
    <div className="thanks-card">
      <CheckIcon />
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <Button label={"Got It!"} doThis={setThanks} value={false} />
    </div>
  );
}
