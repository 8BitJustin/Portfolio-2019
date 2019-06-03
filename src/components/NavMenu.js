import React, { Component } from "react";
import { Link } from "react-scroll";

class NavMenu extends Component {
  state = {};
  render() {
    return (
      <div className="nav-links">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
        >
          Work
        </Link>
        {/* <Link
          activeClass="active"
          to="blog"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Blog
        </Link> */}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={5}
          duration={500}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default NavMenu;
