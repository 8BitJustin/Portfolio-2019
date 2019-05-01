import React, { Component } from "react";
import Selfie from "../images/bwSelfie01.jpg";
import randomQuote from "../components/Quotes";
import QuotesDisplay from "../components/QuotesDisplay";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-page pages" id="about">
        <div className="quote-container">
          <QuotesDisplay
            id={randomQuote.id}
            quote={randomQuote.quote}
            author={randomQuote.author}
          />
        </div>
        <div className="self-container">
          <img src={Selfie} alt="Justin Olson" />
        </div>
        <div className="details-container">
          <p className="details-container-top">
            Hi, I'm Justin, a self-taught web designer &amp; developer that
            loves to bring imagination to life! From simple ideas I've...
          </p>
          <ul>
            <li>
              Designed and developed a tip calculator mobile app for android
            </li>
            <li>
              Designed and developed a web application for my current employer
              to simplify assistance requests to senior support staff
            </li>
            <li>Freelanced two websites for local businesses</li>
            <li>
              Applied for, awarded, and completed the Grow with Google Udacity
              Nanodegree Front-End Web Developer Scholarship
            </li>
          </ul>
          <p className="details-container-top">
            In a short time, I've studied and learned a few different languages
            and libraries including...HTML, CSS, JavaScript, jQuery, Bootstrap
            3/4, Python, React.JS (this site was created using React.JS), and
            React Native.
          </p>
          <p className="details-container-bot">
            I'm not limited to the above, and I'm eager to
            learn new things. Currently my skillset has me focused mainly on
            Front-End Development, but I'm ready to tackle any challenge.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
