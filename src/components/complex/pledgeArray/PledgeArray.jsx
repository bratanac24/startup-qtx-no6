import React from "react";
import PledgeCard from "../pledgeCard/PledgeCard";

const Pledgearray = ({ array, alert, setAlert }) => {
  const cards = array.map((pledge) => (
    <PledgeCard
      title={pledge.title}
      text={pledge.text}
      price={pledge.price}
      places={pledge.places}
      btn={pledge.btn}
      alert={alert}
      setAlert={setAlert}
    />
  ));
  return <div className="pledge-options">{cards}</div>;
};

export default Pledgearray;
