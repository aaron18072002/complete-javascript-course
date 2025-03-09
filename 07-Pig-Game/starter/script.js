"use strict";

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayerId = 0;
let isPlaying = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayerId}`).textContent =
    currentScore;
  activePlayerId = activePlayerId === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    console.log(dice, activePlayerId);
    console.log(scores);

    diceEl.classList.remove("hidden");
    diceEl.src = `./dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayerId}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayerId] += currentScore;
    document.getElementById(`score--${activePlayerId}`).textContent =
      scores[activePlayerId];

    if (scores[activePlayerId] >= 20) {
      console.log("Player " + activePlayerId + " wins");
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayerId}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayerId}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", function () {
  isPlaying = true;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;

  document
    .querySelector(`.player--${activePlayerId}`)
    .classList.remove("player--winner");

  activePlayerId = 0;

  document
    .querySelector(`.player--${activePlayerId}`)
    .classList.add("player--active");

  diceEl.classList.add("hidden");

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
});
