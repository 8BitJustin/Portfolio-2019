import React, { Component } from "react";
import Quotes from "../components/Quotes";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-page pages" id="about">
        <div className="quote-container">
          <Quotes />
        </div>
        <div className="details-container">
          <p className="details-container-top">
            I'm Justin, a web designer &amp; developer who loves to bring
            imagination to life.
          </p>
          <p className="details-container-bot">
            Currently my skillset has me focused mainly on Front-End
            Development, with specific focus on JavaScript and React. In
            addition I also have some experience with Python and I have the
            willingness to consistantly learn and tackle any challenge.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
