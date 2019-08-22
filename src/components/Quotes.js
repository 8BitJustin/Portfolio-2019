import React, { Component } from "react";

const quoteList = [
  {
    id: 1,
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    id: 2,
    quote:
      "The two most important days in your life are the day you are born, and the day you find out why.",
    author: "Mark Twain"
  },
  {
    id: 3,
    quote: "Don't let someone else's opinion of you become your reality.",
    author: "Les Brown"
  },
  {
    id: 4,
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    id: 5,
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  {
    id: 6,
    quote:
      "Success consists of going from failure to failure without loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    id: 7,
    quote: "The biggest risk is not taking any risk...",
    author: "Mark Zuckerberg"
  },
  {
    id: 8,
    quote:
      "Make new mistakes. Make glorious, amazing mistakes. Make mistakes nobody’s ever made before.",
    author: "Neil Gaiman"
  },
  {
    id: 9,
    quote: "Failure is success in progress.",
    author: "Albert Einstein"
  },
  {
    id: 10,
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    author: "Audrey Hepburn"
  },
  {
    id: 11,
    quote: "You miss 100 percent of the shots you never take.",
    author: "Wayne Gretzky"
  },
  {
    id: 12,
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    id: 13,
    quote: "Dreams are little nudges from your soul.",
    author: "Victoria Moran"
  },
  {
    id: 14,
    quote:
      "Embrace your dreams. If you want to be a hero, you need to have dreams.",
    author: "Zack Fair"
  }
];

class Quotes extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 6000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let rotatingQuote = quoteList[this.state.textIdx % quoteList.length];
    return (
      <figure>
        <blockquote>
          <span className="coloredQuotes">"</span>
          {rotatingQuote.quote}
          <span className="coloredQuotes">"</span>
        </blockquote>
        <footer>
          <span className="coloredQuotes">-</span> {rotatingQuote.author}
        </footer>
      </figure>
    );
  }
}

export default Quotes;

// No longer used, orignally used to random pull a quote into the About page
// const randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
