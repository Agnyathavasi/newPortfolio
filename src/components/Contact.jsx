import React from "react";
import "../css/Contact.css";
import Roundblue from "./roundblue";

function Contact() {
  return (
    <div className="contact">
      <div className="blues">
        <Roundblue top={"-650px"} right={"-570px"} />
      </div>
      <h1>Contact me</h1>
      <div class="mb-3">
        <input
          type="text"
          class="form-control shadow-none"
          id="formGroupExampleInput"
          placeholder="Name"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control shadow-none"
          id="formGroupExampleInput2"
          placeholder="Email"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control shadow-none"
          id="formGroupExampleInput2"
          placeholder="Subject"
        />
      </div>
      <div class="mb-3">
        <textarea
          type="text"
          class="form-control shadow-none"
          id="formGroupExampleInput2"
          placeholder="Your Message here"
          rows="3"
        />
      </div>
      <button className="btn-primary button shadow-none">Send</button>
    </div>
  );
}

export default Contact;
