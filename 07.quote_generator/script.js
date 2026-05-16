const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweet = document.getElementById("tweet");
async function getQuote() {
  try {
    const res = await fetch(
      `https://motivational-spark-api.vercel.app/api/quotes/random`,
    );
    const data = await res.json();

    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  } catch (error) {
    console.error(error);
  }
}
function tweetQuote() {
  const text = `${quote.innerText}
        ~ by ${author.innerText}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}

newQuote.addEventListener("click", getQuote);
tweet.addEventListener("click", tweetQuote);

getQuote();
