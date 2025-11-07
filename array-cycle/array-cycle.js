//Put function in a constant to scope variables, etc.
const arrayCarousel = () => {
  const button = document.querySelector("#cycle-button");
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");

  // Check if these elements exist! If they don't, bail out!
  if (!button || !quote || !cite) {
    return;
  }

  // An array of quote objects
  const quotes = [
    { quote: "Blah blah blah", cite: "Someone" },
    { quote: "I like quotes", cite: "Quotey McQuoteface" },
    { quote: "Quotes are great", cite: "Anonymous" },
    { quote: "This is a quote", cite: "Famous Person" },
    { quote: "Another quote here", cite: "Prof. Quotation" },
  ];

  // Set initial index to 0
  let quoteIndex = 0;

  // Update the DOM
  const updateQuote = () => {
    quote.innerHTML = quotes[quoteIndex].quote;
    cite.innerHTML = quotes[quoteIndex].cite;
  };

  // Cycle function with check to ensure the cycle loops
  const cycleQuotes = () => {
    quoteIndex++;

    if (quoteIndex > quotes.length - 1) {
      quoteIndex = 0;
    }

    // Don't forget to update the DOM...
    updateQuote();
  };

  // Listener for our button
  button.addEventListener("click", cycleQuotes);

  // Update the DOM...
  updateQuote();
};

// Call the main function
arrayCarousel();
