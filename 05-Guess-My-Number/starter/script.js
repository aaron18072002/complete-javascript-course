"use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🥳 Correct Number!";

// document.querySelector(".number").textContent = "23";
// document.querySelector(".label-score span").textContent = 10;

// document.querySelector(".guess").value = "15";
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = secretNumber;
let score = 20;
document.querySelector(".label-score span").textContent = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("⛔ No number !");
    score--;
    document.querySelector(".label-score span").textContent = score;
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"; // 30px

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".label-score span").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start guessing...");

  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
