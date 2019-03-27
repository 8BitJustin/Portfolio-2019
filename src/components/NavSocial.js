import React, { Component } from "react";

import LinkedIn from "../images/linkedin-b.png";
import Instagram from "../images/instagram-b.png";
import Github from "../images/github-b.png";
import Dribbble from "../images/dribbble-b.png";

class NavSocial extends Component {
  state = {};
  render() {
    return (
      <div className="nav-icons">
        <img src={LinkedIn} alt="LinkedIn" />
        <img src={Instagram} alt="Instagram" />
        <img src={Github} alt="Github" />
        <img src={Dribbble} alt="Dribbble" />
      </div>
    );
  }
}

export default NavSocial;
