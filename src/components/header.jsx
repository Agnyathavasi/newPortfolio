import React from "react";
import imag from "../img/lightThemeLogo.png";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/newPortfolio/">
        <img
          className="logo"
          src={imag}
          alt=""
          height="72px"
          width="90px"
        />
      </Link>
      <div className="navs">
        <Link to="/newPortfolio/about">
          <li className="item">About</li>
        </Link>
        <Link to="/newPortfolio/portfolio">
          <li className="item">Portfolio</li>
        </Link>
        <Link to="/newPortfolio/skills">
          <li className="item">Skills</li>
        </Link>
        <Link to="/newPortfolio/contact">
          <li className="item">Contact</li>
        </Link>
      </div>
    </div>
  );
}

export default Header;
