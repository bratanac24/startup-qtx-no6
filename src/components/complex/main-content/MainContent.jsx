import React from "react";
import "./MainContent.scss";

import Card from "../../simple/card/Card";
import Stats from "../stats/Stats";
import Statistics from "../statistics/Statistics";
import About from "../about/About";
import Alert from "../alert/Alert";

export default function MainContent({ alert, setAlert }) {
  return (
    <div className="content">
      <div className="content-box">
        <Stats alert={alert} setAlert={setAlert} />
        <Statistics />
        <About alert={alert} setAlert={setAlert} />
      </div>
    </div>
  );
}
