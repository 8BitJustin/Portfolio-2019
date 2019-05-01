import React, { Component } from "react";
import AZ from "../images/arizona-outline-logo.png";
import Phx from "../files/JustinResumeApr2019.pdf";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-page pages" id="contact">
        <div className="contact-interior animated">
          <div className="email-container">
            <h1 className="email animated">Email</h1>
            <a href="mailto:jolsondigital@gmail.com">
              <h1 className="actual animated">jolsondigital@gmail.com</h1>
            </a>
          </div>
          <div className="contact-img-container">
            <img src={AZ} alt="Arizona Outline" />
          </div>
          <div className="resume-container">
        {/* eslint-disable-next-line */}
            <a href={Phx} target="_blank">
              <h1 className="resume-dl animated">view r&#233;sum&#233; .pdf</h1>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
