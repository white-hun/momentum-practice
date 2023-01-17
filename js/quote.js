const quotes = [
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "-Confucius-",
  },
  {
    quote: "To enhoy the rain bow, first enjoy the rain.",
    author: "-Paulo Coelho-",
  },
  {
    quote: "When it rains look for rainbows, when it's dark look for stars.",
    author: "-Oscar Wilde-",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "-Bill Gates-",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "-Lilly Pulitzer-",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote:
      "If you don't get out of the box you've been raised in, you won't understand how nuch bigger the world is.",
    author: "-Angelina Jolie-",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "-Theodore Roosevelt-",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You don't wnant to run out of gas on your trip, but you're not doing a tour of gas starions.",
    author: "-Tim O'Reilly-",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "-Vidal Sassoon-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
