import React, { Component } from "react";

import Share from "../images/share.png";
import ShowSocialOverlay from "../components/ShowSocialOverlay";

class ShareIcon extends Component {
  state = {};
  render() {
    return (
      <div className="share-icon">
        <img src={Share} alt="Share Button" onClick={ShowSocialOverlay} />
      </div>
    );
  }
}

export default ShareIcon;
