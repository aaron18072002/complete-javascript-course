"use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🥳 Correct Number!";

// document.querySelector(".number").textContent = "23";
// document.querySelector(".label-score span").textContent = 10;

// document.querySelector(".guess").value = "15";
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
let score = 20;
document.querySelector(".label-score span").textContent = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number !";
    score--;
    document.querySelector(".label-score span").textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"; // 30px
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".label-score span").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 💥 You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".label-score span").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 💥 You lost the game!";
    }
  }
});
