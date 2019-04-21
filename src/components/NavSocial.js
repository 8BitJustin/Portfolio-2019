import React, { Component } from "react";

import LinkedIn from "../images/linkedin-b.png";
import Instagram from "../images/instagram-b.png";
import Github from "../images/github-b.png";
// import Dribbble from "../images/dribbble-b.png";

class NavSocial extends Component {
  state = {};
  render() {
    return (
      <div className="nav-icons">
        <a href="https://www.linkedin.com/in/justinolson34/" target="_blank">
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
    );
  }
}

export default NavSocial;
