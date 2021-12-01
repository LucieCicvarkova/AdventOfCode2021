const fs = require("fs");
const input = fs.readFileSync("./day1input.txt", "utf8");
const inputArray = input.split("\n");
const arrayOfNumbers = inputArray.map((item) =>
  parseInt(item.replace(/\r/, ""))
);
/*console.log(arrayOfNumbers);*/

let measurementsCount = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i + 1] > arrayOfNumbers[i]) {
    measurementsCount++;
  }
}
console.log(measurementsCount);

let sumsCount = 0;
for (let j = 1; j < arrayOfNumbers.length - 2; j++) {
  let firstSum = arrayOfNumbers[j] + arrayOfNumbers[j + 1] + arrayOfNumbers[j + 2];
  let secondSum = arrayOfNumbers[j + 1] + arrayOfNumbers[j + 2] + arrayOfNumbers[j + 3];
  if (firstSum < secondSum) {
    sumsCount++;
  }
}
console.log(sumsCount);