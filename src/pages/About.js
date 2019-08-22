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
            I'm Justin, a front-end web developer &amp; python developer who
            loves to bring imagination to life.
          </p>
          <p className="details-container-bot">
            I've mainly studied web design and development, with special
            attention given to both JavaScript and React. Now, my current goal
            is to become a Data Analyst/Engineer with Python. I've been learning
            many of Pythons libraries, including (but not limited to) Pandas,
            NumPy, Folium, Flask, OpenCV, just to name a few. I'm eager for what
            comes my way, as I have the willingness to consistantly learn and
            tackle any challenge.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
