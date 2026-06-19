let color = document.getElementById("colour-code");
let options = document.getElementById("options-container");
let reset = document.getElementById("reset");
let info = document.getElementById("info");
let userScore = document.getElementById("score");
let userRound = document.getElementById("round");

let random = null;
let score = null;
let round = 1;

function generateRandomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function colourRGB() {
  return `rgb(${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)}, ${generateRandomNumber(0, 255)})`;
}

function validateResult(el) {
  const selectedColor = el.target.style.backgroundColor;

  if (selectedColor === random) {
    info.innerText = "Correct !";
    score += 1;
    setTimeout(() => {
      info.innerText = "";
      startGame();
    }, 800);
  } else {
    info.innerText = "Wrong !";
    score -= 1;
    setTimeout(() => {
      info.innerText = "";
      startGame();
    }, 800);
  }
  round++;
  window.localStorage.setItem("score", score);
  window.localStorage.setItem("round", round);
}

function startGame() {
  score = Number(window.localStorage.getItem("score")) || 0;
  round = Number(window.localStorage.getItem("round")) || 1;
  userScore.innerText = score;
  userRound.innerText = round < 10 ? "0" + round : round;
  options.innerHTML = "";
  random = colourRGB();
  color.innerText = random;

  let ans = generateRandomNumber(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor = i === ans ? random : colourRGB();
    options.append(div);
  }
}

reset.addEventListener("click", () => {
  score = 0;
  round = 1;
  userScore.innerText = score;
  info.innerText = "";
  window.localStorage.setItem("score", score);
  window.localStorage.setItem("round", round);
  startGame();
});

window.addEventListener("load", startGame);
