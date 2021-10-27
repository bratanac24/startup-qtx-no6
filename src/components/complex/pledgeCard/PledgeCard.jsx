import "./PledgeCard.scss";

import React from "react";
import Card from "../../simple/card/Card";
import Button from "../../simple/buttons/Button";

const Pledgecard = (props) => {
  let dis = "";
  if (props.places === 0) {
    dis = "dis";
  }
  return (
    <div className={`pledge ${dis}`}>
      <Card>
        <div className="header">
          <h3>{props.title}</h3>
          <span className="price">Pledge ${props.price} or more</span>
        </div>
        <p>{props.text}</p>
        <div className="foot">
          <span className="places">
            {props.places}
            <p>left</p>
          </span>
          <Button label={props.btn} places={props.places} />
        </div>
      </Card>
    </div>
  );
};

export default Pledgecard;
