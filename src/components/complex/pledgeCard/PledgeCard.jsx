import "./PledgeCard.scss";

import React from "react";
import Card from "../../simple/card/Card";
import Button from "../../simple/buttons/Button";

const Pledgecard = ({ places, title, text, price, btn, alert, setAlert }) => {
  let dis = "";
  if (places === 0) {
    dis = "dis";
  }
  return (
    <div className={`pledge ${dis}`}>
      <Card>
        <div className="header">
          <h3>{title}</h3>
          <span className="price">Pledge ${price} or more</span>
        </div>
        <p>{text}</p>
        <div className="foot">
          <span className="places">
            {places}
            <p>left</p>
          </span>
          {/* prettier-ignore */}
          <Button label={btn} places={places} doThis={setAlert} value={true} />
        </div>
      </Card>
    </div>
  );
};

export default Pledgecard;
