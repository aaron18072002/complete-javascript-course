// let js = "amazing";
// if (js === "amazing") {
//   alert("Javasript is FUN!");
// }
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = () => console.log();

// const PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let isJavascriptFun = true;
// console.log(isJavascriptFun);

// console.log(typeof true);
// console.log(typeof isJavascriptFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// isJavascriptFun = "YES!";
// console.log(typeof isJavascriptFun);

// let year;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;

// const job;

// var job = "programmer";
// job = "teacher";

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4; // x = x * 4;
// x++; // x = x + 1
// x--; // x = x - 1
// x--;
// console.log(x);

// console.log(ageJonas > ageJonas); // > < >= <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - ageJonas > now - ageSarah);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log("String with \nmultiples\nline");

// console.log(`String with
// multiples
// lines`);

// const age = 21;
// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear >= 2000) {
//   century = 21;
// } else {
//   century = 20;
// }

// console.log(century);

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n -= 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Dont't spend it all");
// } else {
//   console.log("You should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("YAY!, height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = "18";
// if (age == 18) {
//   console.log("You just became an adult :D (loose)");
// }
// if (age === 18) {
//   console.log("You just became an adult :D (strict)");
// }

// let favourite = prompt("What's your favourite number?");
// console.log(favourite, typeof favourite);
// favourite = Number(favourite);

// if (favourite === 23) {
//   console.log("Cool!, 23 is an amazing number");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is neither 7 nor 23");
// }

// if (favourite !== 23) {
//   console.log("Why not 23!");
// }

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = true;
// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins the trophy");
// }

// const day = "Friday";

// switch (day) {
//   case "Monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "Monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "Tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Write code examples");
// } else if (day === "Friday") {
//   console.log("Record videos");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day");
// }

const age = 15;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
