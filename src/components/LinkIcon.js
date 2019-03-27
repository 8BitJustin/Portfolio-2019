import React, { Component } from "react";

import Menu from "../images/list-menu.png";
import ShowMenuOverlay from "../components/ShowMenuOverlay";

class LinkIcon extends Component {
  state = {};
  render() {
    return (
      <div className="link-icon">
        <img src={Menu} alt="Menu Button" onClick={ShowMenuOverlay} />
      </div>
    );
  }
}

export default LinkIcon;
