import React, { Component } from "react";
import Logo from "../images/logo-text-roundedtext-rose.png";

class Entry extends Component {
  state = {};
  render() {
    return (
      <div className="entry-page">
        <div className="logo-container">
          <div className="logo">
            <img src={Logo} alt="J. Olson Digital Logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
