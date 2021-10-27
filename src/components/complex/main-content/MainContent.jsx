import React from "react";
import "./MainContent.scss";

import Card from "../../simple/card/Card";
import Stats from "../stats/Stats";
import Statistics from "../statistics/Statistics";
import About from "../about/About";
import Alert from "../alert/Alert";

export default function MainContent() {
  return (
    <div className="content">
      <div className="content-box">
        <Stats />
        <Statistics />
        <About />
      </div>
    </div>
  );
}
