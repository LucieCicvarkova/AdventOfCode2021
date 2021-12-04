const fs = require("fs");
const input = fs.readFileSync("./day3input.txt", "utf8");
const inputArray = input.split("\n").map((item) => item.replace(/\r/, ""));

/* --- Part one --- */

let zeroCount = 0;
let oneCount = 0;
let gammaRate = [];
let epsilonRate = [];

for (let bitPosition = 0; bitPosition < inputArray[0].length; bitPosition++) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].charAt(bitPosition) === "0") {
      zeroCount++;
    } else oneCount++;
  }
  if (zeroCount > oneCount) {
    gammaRate.push(0);
    epsilonRate.push(1);
  }
  if (zeroCount < oneCount) {
    gammaRate.push(1);
    epsilonRate.push(0);
  }
  zeroCount = 0;
  oneCount = 0;
}

gammaRateDecimal = parseInt(gammaRate.join(""), 2);
epsilonRateDecimal = parseInt(epsilonRate.join(""), 2);
console.log(gammaRateDecimal * epsilonRateDecimal);