import "./Statistics.scss";

import React, { useState } from "react";
import Card from "../../simple/card/Card";

const Statistics = () => {
  const [money] = useState(89914);
  const [prog] = useState(money / 1000);
  const [people] = useState("5,007");
  const [days] = useState("56");
  return (
    <Card>
      <div className="numbers">
        <div className="number">
          <span className="stats">${money.toLocaleString()}</span>
          <span className="label">of $100,000 backed</span>
        </div>
        <div className="number mid">
          <span className="stats">{people}</span>
          <span className="label">total backers</span>
        </div>
        <div className="number">
          <span className="stats">{days}</span>
          <span className="label">days left</span>
        </div>
      </div>
      <div className="progress">
        <progress value={`${prog}`} min="0" max="100" />
      </div>
    </Card>
  );
};

export default Statistics;
