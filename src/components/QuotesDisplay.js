import React from "react";

const QuotesDisplay = props => {
  return (
    <figure>
      <blockquote>"{props.quote}"</blockquote>
      <footer>- {props.author}</footer>
    </figure>
  );
};

export default QuotesDisplay;
