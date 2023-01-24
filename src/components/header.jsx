import React from "react";
import imag from "../img/lightThemeLogo.png";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src={imag}
          alt=""
          height="72px"
          width="90px"
        />
      </Link>
      <div className="navs">
        <Link to="/about">
          <li className="item">About</li>
        </Link>
        <Link to="/portfolio">
          <li className="item">Portfolio</li>
        </Link>
        <Link to="/skills">
          <li className="item">Skills</li>
        </Link>
        <Link to="/contact">
          <li className="item">Contact</li>
        </Link>
      </div>
    </div>
  );
}

export default Header;
