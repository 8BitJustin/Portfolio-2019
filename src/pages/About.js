import React, { Component } from "react";
import Selfie from "../images/selfie.jpg";
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
            Best of days to you! I'm Justin and I'm a self-taught web designer
            and developer who simply enjoys creating websites and programs from
            nothing but a simple idea. Currently I'm located in Tucson, Arizona,
            and have been studying coding since June 2015, as I was ready to
            develop an actual skill set with something I've always had interest
            in. Since then, I've done the following:
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
              Nanodegree front end web developer scholarship
            </li>
          </ul>
          <p className="details-container-bot">
            In this short time, I've studied and am familiar with HTML, CSS,
            JavaScript (ES6), jQuery, Bootstrap 3/4, Python, React, Git/Github,
            ServiceNow (I've tinkered with others, these just happen to be the
            ones I have the most experience with currently) and continue to
            expand my knowledge with these languages/libraries/frameworks and
            others daily. My simple goal is to have a career designing,
            creating, and building websites from scratch, and even push past
            that to whatever lies beyond.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
