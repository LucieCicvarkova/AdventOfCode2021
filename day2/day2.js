const fs = require("fs");
const input = fs.readFileSync("./day2input.txt", "utf8");
const inputArray = input.split("\n").map((item) => item.replace(/\r/, ""));

let horizontalCount = 0;
let verticalCount = 0;
const forward = new RegExp("forward*");
const up = new RegExp("up*");
const down = new RegExp("down*");

for (i = 0; i < inputArray.length; i++) {
  if (forward.test(inputArray[i])) {
    horizontalCount = horizontalCount + parseInt(inputArray[i].charAt(inputArray[i].length - 1));
  }
  if (up.test(inputArray[i])) {
    verticalCount = verticalCount - parseInt(inputArray[i].charAt(inputArray[i].length - 1));
  }
  if (down.test(inputArray[i])) {
    verticalCount = verticalCount + parseInt(inputArray[i].charAt(inputArray[i].length - 1));
  }
}

console.log(verticalCount*horizontalCount);