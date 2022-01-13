import React from "react";
import "../css/About.css";
import about from "../img/about_me.png";
import me from "../img/me.png";
import Roundblue from "./roundblue";

function About() {
  const namestyle = {
    "color":"#087eff"
}
  return (
    <div className="homeBody about">
      <div className="blues">
        <Roundblue top={"-150px"} right={"-960px"} />
        <Roundblue top={"740px"} left={"-750px"} />
      </div>
      <div className="row component_row">
        <div className="col-md-6 main">
          <h1 className="main_text">About Me</h1>
          <p className="para_text">
            Designing is my forte, but other than that, I love playing Cricket,
            Photo/Video editing. I was a memer on instagram with over a reach of
            23.5k followers. With that, lets keep my information short now, lets
            focus on works and skills.
          </p>
        </div>
        <div className="col-md-6 sideImg">
          <img src={about} width="100%" alt="" />
        </div>
      </div>
      <div className="row component_row">
        <div className="col-md-6 sideImg self">
          <img src={me} width="100%" alt="" />
        </div>
        <div className="col-md-6 main">
          <p className="para_text">Hello, my name is</p>
          <h1 className="main_text"><span style={namestyle}>Vishwajith H H</span></h1>
          <p className="para_text">
            I’m a student, currently pursuing Computer Science Degree in
            Engineering. I always love to design and develop websites, also
            trying to adopt it as a career. I have designed numerous webpages,
            do take a look at the works.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
