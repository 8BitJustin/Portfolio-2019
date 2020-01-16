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
            I'm Justin, a freelance front-end web designer &amp; developer who
            loves to bring imagination to life.
          </p>
          <p className="details-container-bot">
            In 2015, I made the decision to add actual value to myself, and
            create a skillset that would make me stand out above many others.
            Although there are no exact numbers, it is estimated that less than
            1% of the worlds population can code. I'm proud to say I'm within
            that rather small fraction.
          </p>
          <p className="details-container-bot">
            In this short time, I've learned and am familiar with numerous
            languages, including (but not limited to): HTML, CSS, JavaScript,
            React, Python, and many of the libraries each work with. I'm eager
            for any challenge, as those are what help me learn and grow as a
            front-end web designer and developer.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
