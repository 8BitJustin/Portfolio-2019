const Quotes = [
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
  }
];

const randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

export default randomQuote;
