import React from "react";
import "../css/skills.css";
import skills1 from "../img/skills.png";
import skills2 from "../img/skills_2.png";
import skills3 from "../img/skills_3.png";
import skills4 from "../img/skills_4.png";
import skills5 from "../img/skills_5.png";
import skills6 from "../img/skills_6.png";
import Roundblue from "./roundblue";
import {frontend , backend , programming, database, mobile} from "./skilldata";

function Skils() {
  return (
    <div className="homeBody skills">
      <div className="blues">
        <Roundblue top={"-350px"} left={"-320px"} />
      </div>
      <div id="skills" className="row component_row">
        <div className="col-md-6 main">
          <h1 className="main_text">Skills</h1>
          <p className="para_text">
            I posses wide range of skills in various platforms. Therefore, I
            have grouped the skills according to their domains.
          </p>
        </div>
        <div className="col-md-6 sideImg">
          <img src={skills1} width="100%" alt="" />
        </div>
      </div>
      <div className="row skill_row">
        <h1 className="heading">Frontend developement</h1>
        <div className="col-md-6 main">
          {frontend.map((item) => {
            var breadth = item.precent;
            return (
              <div className="skitem">
                <h6>{item.name}</h6>
                <div className="progress">
                  <span
                    className="percentage"
                    style={{ backgroundColor: "#087eff", width: `${breadth}%` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-6 sideImg">
          <img src={skills2} width="100%" alt="" />
        </div>
      </div>
      <div className="row skill_row">
        <h1 className="heading">Backend developement</h1>
        <div className="col-md-6 sideImg">
          <img src={skills3} width="100%" alt="" />
        </div>
        <div className="col-md-6 main">
          {backend.map((item) => {
            var breadth = item.precent;
            return (
              <div className="skitem">
                <h6>{item.name}</h6>
                <div className="progress">
                  <span
                    className="percentage"
                    style={{ backgroundColor: "#087eff", width: `${breadth}%` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row skill_row">
        <h1 className="heading">Programming</h1>
        <div className="col-md-6 main">
          {programming.map((item) => {
            var breadth = item.precent;
            return (
              <div className="skitem">
                <h6>{item.name}</h6>
                <div className="progress">
                  <span
                    className="percentage"
                    style={{ backgroundColor: "#087eff", width: `${breadth}%` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-6 sideImg">
          <img src={skills4} width="100%" alt="" />
        </div>
      </div>
      <div className="row skill_row">
        <h1 className="heading">Database Management</h1>
        <div className="col-md-6 sideImg">
          <img src={skills5} width="100%" alt="" />
        </div>
        <div className="col-md-6 main">
          {database.map((item) => {
            var breadth = item.precent;
            return (
              <div className="skitem">
                <h6>{item.name}</h6>
                <div className="progress">
                  <span
                    className="percentage"
                    style={{ backgroundColor: "#087eff", width: `${breadth}%` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row skill_row">
        <h1 className="heading">Mobile developement</h1>
        <div className="col-md-6 main">
          {mobile.map((item) => {
            var breadth = item.precent;
            return (
              <div className="skitem">
                <h6>{item.name}</h6>
                <div className="progress">
                  <span
                    className="percentage"
                    style={{ backgroundColor: "#087eff", width: `${breadth}%` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-6 sideImg">
          <img src={skills6} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skils;
