import React from "react";
import imag from "../img/lightThemeLogo.png";
import "../css/header.css";

function Header(props) {
  function home() {
    props.onsel("home");
  }
  function about() {
    props.onsel("about");
  }
  function portfolio() {
    props.onsel("portfolio");
  }
  function skills() {
    props.onsel("skills");
  }
  function contact() {
    props.onsel("contact");
  }
  return (
    <div className="header">
      <img
        className="logo"
        src={imag}
        alt=""
        height="72px"
        width="90px"
        onClick={home}
      />
      <div className="navs">
        <li className="item" onClick={about}>
          About
        </li>
        <li className="item" onClick={portfolio}>
          Portfolio
        </li>
        <li className="item" onClick={skills}>
          Skills
        </li>
        <li className="item" onClick={contact}>
          Contact
        </li>
      </div>
    </div>
  );
}

export default Header;
