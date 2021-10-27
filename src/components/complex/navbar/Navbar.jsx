import React from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";

const Navbar = (menuList) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu-items">
        <div>About</div>
        <div>Discover</div>
        <div>Get Started</div>
      </div>
    </div>
  );
};

export default Navbar;
