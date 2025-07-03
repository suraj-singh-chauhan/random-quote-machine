import React from "react";

// Quotes array
const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity.",
    author: "Albert Einstein",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "A room without books is like a body without a soul.",
    author: "Cicero",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

// Utility to get a random quote
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Main App Component
function App() {
  const [quote, setQuote] = React.useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`;

  return (
    <div style={styles.wrapper}>
      <div id="quote-box" style={styles.quoteBox}>
        <p id="text" style={styles.text}>
          "{quote.text}"
        </p>
        <p id="author" style={styles.author}>
          - {quote.author}
        </p>
        <div style={styles.buttons}>
          <a
            id="tweet-quote"
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Tweet
          </a>
          <button id="new-quote" onClick={handleNewQuote} style={styles.button}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  quoteBox: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  author: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginBottom: "1.5rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default App;
