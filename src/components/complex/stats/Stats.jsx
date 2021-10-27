//styles
import "./Stats.scss";
import "../../../index.scss";

//components
import React from "react";
import Card from "../../simple/card/Card";
import Button from "../../simple/buttons/Button";
import Bookmark from "../../simple/buttons/Bookmark";
import { ReactComponent as MainIcon } from "../../../assets/svg/logo-mastercraft.svg";

export default function Stats() {
  return (
    <Card>
      <MainIcon className="mastercraft" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div className="stats-btns">
        <Button label="Back This Project"></Button>
        <Bookmark />
      </div>
    </Card>
  );
}
