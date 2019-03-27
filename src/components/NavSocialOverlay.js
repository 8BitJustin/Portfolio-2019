import React, { Component } from "react";

import Close from "../images/close.png";
import LinkedIn from "../images/linkedin-w.png";
import Instagram from "../images/instagram-w.png";
import Github from "../images/github-w.png";
import Dribbble from "../images/dribbble-w.png";

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
            <img src={LinkedIn} alt="linkedin" />
            <img src={Github} alt="github" />
            <img src={Instagram} alt="instagram" />
            <img src={Dribbble} alt="dribbble" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavSocialOverlay;
