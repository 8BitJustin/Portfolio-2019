import React, { Component } from "react";

import Close from "../images/close.png";
import LinkedIn from "../images/linkedin-w.png";
import Instagram from "../images/instagram-w.png";
import Github from "../images/github-w.png";
// import Dribbble from "../images/dribbble-w.png";

import CloseSocialOverlay from "../components/CloseSocialOverlay";

class NavSocialOverlay extends Component {
  state = {};
  render() {
    return (
      <div className="nav-social-overlay" id="nav-soc-overlay">
        <img
          src={Close}
          alt="hide"
          onClick={CloseSocialOverlay}
          id="close-social-overlay"
        />
        <div className="nav-social-overlay-container">
          <div className="nav-social-overlay-icons">
            <a
              href="https://www.linkedin.com/in/justinolson34/"
              target="_blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://github.com/8BitJustin" target="_blank">
              <img src={Github} alt="Github" />
            </a>
            {/* <a href="https://dribbble.com/" target="_blank">
              <img src={Dribbble} alt="Dribbble" />
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NavSocialOverlay;
