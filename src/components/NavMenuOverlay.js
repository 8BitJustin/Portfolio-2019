import React, { Component } from "react";
import { Link } from "react-scroll";

import Close from "../images/close.png";
import CloseMenuOverlay from "../components/CloseMenuOverlay";

class NavMenuOverlay extends Component {
  state = {};
  render() {
    return (
      <div className="nav-menu-overlay" id="nav-menu-overlay">
        <img
          src={Close}
          alt="hide"
          onClick={CloseMenuOverlay}
          id="close-menu-overlay"
        />
        <div className="nav-menu-overlay-container">
          <ul className="nav-menu-overlay-list">
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuOverlay}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuOverlay}
              >
                Work
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuOverlay}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={CloseMenuOverlay}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavMenuOverlay;
