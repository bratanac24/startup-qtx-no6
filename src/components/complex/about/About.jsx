import "./About.scss";

import React from "react";
import PledgeCard from "../pledgeCard/PledgeCard";
import data from "./about-data";
import Card from "../../simple/card/Card";
import Pledgearray from "../pledgeArray/PledgeArray";
const About = ({ alert, setAlert }) => {
  return (
    <div className="about-wrapper">
      <Card>
        <div className="about">
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <Pledgearray alert={alert} setAlert={setAlert} array={data.data} />
      </Card>
    </div>
  );
};

export default About;
