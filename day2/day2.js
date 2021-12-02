const fs = require("fs");
const input = fs.readFileSync("./day2input.txt", "utf8");
const inputArray = input.split("\n").map((item) => item.replace(/\r/, ""));

/* ---Part 1--- */
let horizontalCount = 0;
let verticalCount = 0;

for(let i = 0; i< inputArray.length; i++) {
  let inputItem = inputArray[i].split(' ');
  if(inputItem[0]==='forward') {
    horizontalCount = horizontalCount + parseInt(inputItem[1]);
  }
  if(inputItem[0]==='up') {
    verticalCount = verticalCount - parseInt(inputItem[1]);
  } 
  if(inputItem[0]==='down') {
    verticalCount = verticalCount + parseInt(inputItem[1]);
  } 
}

console.log(verticalCount*horizontalCount);

/*--- Part 2 ---*/

let aim = 0;
let horizontalPos= 0;
let depth = 0;

for(let i = 0; i< inputArray.length; i++) {
  let inputItem = inputArray[i].split(' '); 
  if(inputItem[0]==='down') {
    aim = aim + parseInt(inputItem[1]);
  }  
  if(inputItem[0]==='up') {
    aim = aim - parseInt(inputItem[1]);
  }  
  if(inputItem[0]==='forward') {
    horizontalPos = horizontalPos + parseInt(inputItem[1]);
    depth = depth + aim*parseInt(inputItem[1]);
  }
}

console.log(horizontalPos*depth);