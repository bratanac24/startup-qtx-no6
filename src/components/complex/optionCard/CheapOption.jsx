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
    <div className={`option-wrapper  ${active === id ? "checked" : ""}`}>
      <Card>
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
              <h3>Pledge with no reward</h3>
            </div>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
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
