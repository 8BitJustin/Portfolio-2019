import React, { Component } from "react";
import ShareIcon from "../components/ShareIcon";
import LinkIcon from "../components/LinkIcon";
import NavSocial from "../components/NavSocial";
// import HomeLogo from "../components/HomeLogo";
import NavMenu from "../components/NavMenu";
import NavSocialOverlay from "../components/NavSocialOverlay";
import NavMenuOverlay from "../components/NavMenuOverlay";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <ShareIcon />
        <LinkIcon />
        <NavSocial />
        {/* <HomeLogo /> */}
        <NavMenu />
        <NavSocialOverlay />
        <NavMenuOverlay />
      </div>
    );
  }
}

export default Navbar;
