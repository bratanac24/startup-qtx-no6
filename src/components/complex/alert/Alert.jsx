import "./Alert.scss";
import data from "../about/about-data";
import { ReactComponent as Close } from "../../../assets/svg/icon-close-modal.svg";

import ThanksCard from "../thanks/ThanksCard";
import React, { useState } from "react";
import OptionCards from "../optionCards/OptionCards";
export default function Alert({ alert, setAlert }) {
  const [thanks, setThanks] = useState(false);
  return (
    <div>
      <div className="background"></div>
      <div className="alert-wrapper">
        {!thanks && alert ? (
          <div className="alert">
            <Close className="close" onClick={() => setAlert(false)} />
            <h2>Back this project</h2>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <OptionCards
              setThanks={setThanks}
              setAlert={setAlert}
              array={data.data}
            />
          </div>
        ) : null}

        {thanks ? (
          <ThanksCard setAlert={setAlert} setThanks={setThanks} />
        ) : null}
      </div>
    </div>
  );
}
