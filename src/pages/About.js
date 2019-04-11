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
            and developer who simply enjoys bringing imagination to reality from
            only a simple idea. Currently I'm located in Tucson, Arizona, and
            have been on the path to becoming a software engineer since June
            2015. It was then that I decided that I was ready to develop an
            actual skill set with something I've always had an interest in.
            Since then, I've done the following:
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
            In this short time, I've studied and learned a few different
            languages. I've mainly focused on front-end web development, but
            have also toyed with mobile apps and look forward to exploring
            anything beyond. Languages and libraries I've studied with include:{" "}
            <span className="langHighlight">HTML</span>,{" "}
            <span className="langHighlight">CSS</span>,{" "}
            <span className="langHighlight">JavaScript</span>,{" "}
            <span className="langHighlight">jQuery</span>,{" "}
            <span className="langHighlight">Bootstrap 3/4</span>,{" "}
            <span className="langHighlight">Python</span>,{" "}
            <span className="langHighlight">React.JS</span> (this site was
            created using React.JS), and{" "}
            <span className="langHighlight">React Native</span>.
          </p>
          <p className="details-container-bot">
            I'm absolutely not limited to the above, as I am always eager to
            learn something new.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
