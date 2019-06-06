import React from "react";

const QuotesDisplay = props => {
  return (
    <figure>
      <blockquote>
        <span className="coloredQuotes">"</span>
        {props.quote}
        <span className="coloredQuotes">"</span>
      </blockquote>
      <footer>
        <span className="coloredQuotes">-</span> {props.author}
      </footer>
    </figure>
  );
};

export default QuotesDisplay;
