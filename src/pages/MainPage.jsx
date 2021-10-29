import React from "react";
import "./MainPage.scss";
import Navbar from "../components/complex/navbar/Navbar";
import MainContent from "../components/complex/main-content/MainContent";

export default function MainPage({ alert, setAlert }) {
  return (
    <main>
      <div className="banner">
        <Navbar />
      </div>
      <MainContent alert={alert} setAlert={setAlert} />
    </main>
  );
}
