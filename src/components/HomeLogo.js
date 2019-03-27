import React, { Component } from "react";
import Logo from "../images/logo-thick.png";

class HomeLogo extends Component {
  state = {};
  render() {
    return (
      <div className="home-logo">
        <img src={Logo} alt="Home Logo" />
      </div>
    );
  }
}

export default HomeLogo;
