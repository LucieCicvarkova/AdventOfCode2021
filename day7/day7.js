const fs = require("fs");
const input = fs.readFileSync("./day7input.txt", "utf8");
const inputArray = input.split(",");
const arrayOfNumbers = inputArray.map((item) => parseInt(item));

const minPos = Math.min(...arrayOfNumbers);
const maxPos = Math.max(...arrayOfNumbers);
let consumptionArray = [];
let fuel = 0;

/* --- Part 1 --- */

/*for (let i = minPos; i < maxPos+1; i++) {
 for (let j = 0; j < arrayOfNumbers.length; j++) {
     fuel = fuel + Math.abs((arrayOfNumbers[j] - i));
 }
 consumptionArray.push(fuel);
 fuel = 0;
}
 */

/* --- Part 2 --- */

for (let i = minPos; i < maxPos+1; i++) {
    for (let j = 0; j < arrayOfNumbers.length; j++) {
        let moves = Math.abs((arrayOfNumbers[j] - i));
        fuel = fuel + (moves ** 2 + moves)/2;
    }
    consumptionArray.push(fuel);
    fuel = 0;
   }
   
   console.log(Math.min(...consumptionArray));