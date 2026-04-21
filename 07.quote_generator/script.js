const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const tweet = document.getElementById("tweet");
async function getQuote() {
  try {
    const res = await fetch(
      `https://corsproxy.io/?https://zenquotes.io/api/random&t=${Date.now()}`,
    );
    const data = await res.json();

    quote.innerHTML = data[0].q;
    author.innerHTML = data[0].a;
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
