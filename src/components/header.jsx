import React, { useState } from "react";
import lightImag from "../img/lightThemeLogo.png";
import darkImag from "../img/darkThemeLogo.png";
import "../css/header.css";
import { Link } from "react-router-dom";
import { Switch } from "@material-ui/core";
import { Brightness2, BrightnessHigh } from "@material-ui/icons";

function Header() {
  const [theme, setTheme] = useState(false)
  function handleThemeChange() {
    setTheme(!theme)
    if (!theme)
      document.documentElement.setAttribute('data-theme', 'dark')
    else document.documentElement.setAttribute('data-theme', 'light')
  }
  return (
    <div className="header">
      <Link to="/newPortfolio/">
        <img
          className="logo"
          src={theme ? darkImag : lightImag}
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
        <li className="">
          <Switch onChange={handleThemeChange} color="primary" checked={theme} ></Switch>
          {theme && <Brightness2 htmlColor="#222" style={{ filter: `drop-shadow(0px 0px 2px white)` }} />}
          {!theme && <BrightnessHigh htmlColor="#fefefe" style={{ filter: `drop-shadow(0px 0px 1px black)` }} />}
        </li>
      </div>
    </div>
  );
}

export default Header;
