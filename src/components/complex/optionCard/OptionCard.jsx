import "./OptionCard.scss";

import React, { useState, useCallback } from "react";
import Card from "../../simple/card/Card";
import Button from "../../simple/buttons/Button";
import MoneyInput from "../../simple/money-input/MoneyInput";

export default function OptionCard({
  id,
  active,
  setActive,
  setThanks,
  places,
  text,
  title,
  price,
}) {
  return (
    <div
      className={`option-wrapper  ${
        active === id && places > 0 ? "checked" : ""
      } ${places === 0 ? "block" : ""}`}>
      <Card>
        <div className="card-liner">
          <span className="people-num">
            {places}
            <span>left</span>
          </span>
          <div className="description">
            <input
              checked={active === id}
              type="radio"
              name="pledge"
              className="radio"
              disabled={places === 0}
              onClick={() => setActive(id)}
            />
            <div className="info">
              <div className="info-head">
                <h3>{title}</h3>
                <span className="price">Pledge ${price} or more</span>
              </div>
            </div>
          </div>
          <p>{text}</p>
        </div>
        {active === id ? (
          <div className={`amount`}>
            <p>Enter your pledge</p>
            <div className="pledgeAmount">
              <MoneyInput placeholder={price} />
              <Button label="Continue" doThis={setThanks} value={true} />
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
