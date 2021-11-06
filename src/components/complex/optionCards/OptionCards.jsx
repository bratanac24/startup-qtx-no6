import React, { useState } from "react";
import { Component } from "react";
import OptionCard from "../optionCard/OptionCard";
import CheapOption from "../optionCard/CheapOption";

export default function OptionCards({ array, setAlert, setThanks }) {
  const [active, setActive] = useState(-1);

  return (
    <div>
      <CheapOption
        id={0}
        setThanks={setThanks}
        active={active}
        setActive={setActive}
      />
      {array.map((option, index) => (
        <OptionCard
          id={index + 1}
          active={active}
          setActive={setActive}
          setThanks={setThanks}
          {...option}
        />
      ))}
    </div>
  );
}
