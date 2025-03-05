// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

const calcTempAmplitude = function (t1, t2) {
  const temps = [...t1, ...t2];

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }

  console.log(max, min);

  return max - min;
};

const amplitude = calcTempAmplitude([13, 5, 1, "error"], [9, 0, 5]);
console.log(amplitude);
