import { Launch, Link } from "@material-ui/icons";
import React from "react";
import "../css/portfolio.css";
import portfolio from "../img/portfolio.png";
import { websites, uiclones, xddes } from "./cardData";
import Roundblue from "./roundblue";

function Portfolio() {
  return (
    <div className="homeBody portfolio">
      <div className="blues">
        <Roundblue top={"50px"} left={"-620px"} />
        <Roundblue top={"1040px"} right={"-750px"} />
        <Roundblue top={"2140px"} left={"-750px"} />
        <Roundblue top={"3040px"} right={"-750px"} />
      </div>
      <div id="portfolio" className="row component_row">
        <div className="col-md-6 main">
          <h1 className="main_text">Portfolio</h1>
          <p className="para_text">
            This section consists of all my works in the field of developement,
            designing, and also UI cloning.
          </p>
        </div>
        <div className="col-md-6 sideImg">
          <img src={portfolio} width="100%" alt="" />
        </div>
      </div>
      <div className="webprojects container">
        <h1 className="titles">Web Projects</h1>
        <div className="row">
          {websites.map((item, index) => {
            return (
              <div className="col-md-6 cards">
                <img src={item.image} alt="" width="85%" />
                <div className="cardinfo">
                  <h2>{item.title}</h2>
                  <p>{item.details}</p>
                  <a
                    href={item.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link fontSize="medium" />
                  </a>
                  <span className="launch">
                    <a
                      href={item.launch}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Launch fontSize="small" />
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="titles">UI Designs</h1>
        <div className="row">
          {xddes.map((item, index) => {
            return (
              <div className="col-md-6 cards">
                <img src={item.image} alt="" width="85%" />
                <div className="cardinfo">
                  <h2>{item.title}</h2>
                  <p>{item.details}</p>
                  <a
                    href={item.launch}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Launch fontSize="medium" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="titles">UI Clones</h1>
        <div className="row uicls">
          {uiclones.map((item, index) => {
            return (
              <div className="col-md-6 cards">
                <img src={item.image} alt="" width="85%" />
                <div className="cardinfo">
                  <h2>{item.title}</h2>
                  <p>{item.details}</p>
                  <a
                    href={item.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link fontSize="medium" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
