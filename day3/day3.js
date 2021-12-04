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
console.log('power consumption: ', gammaRateDecimal * epsilonRateDecimal);

/* ---Part 2--- */

let filteredArrayO2 = inputArray;
let zerosCount = 0;
let onesCount = 0;
let moreFrequented;
let lessFrequented;

/*More frequented char ('oxygen generator rating') */
for (let iteration = 0; filteredArrayO2.length != 1; iteration++) {  
for (let i = 0; i < filteredArrayO2.length; i++) {
  if (filteredArrayO2[i].charAt(iteration) === "0") {
    zerosCount++;
  } else onesCount++;
}
  if (zerosCount > onesCount) {
    moreFrequented = '0';    
  }
  if (zerosCount <= onesCount) {
    moreFrequented = '1';    
  }  
  zerosCount = 0;
  onesCount = 0;
  
  filteredArrayO2 = filteredArrayO2.filter(item => item.charAt(iteration) === moreFrequented);
}


/* Less frequented char ('CO2 scrubber rating')*/
let filteredArrayCO2 = inputArray;
for (let iteration = 0; filteredArrayCO2.length != 1; iteration++) {  
  for (let i = 0; i < filteredArrayCO2.length; i++) {
    if (filteredArrayCO2[i].charAt(iteration) === "0") {
      zerosCount++;
    } else onesCount++;
  }
    if (zerosCount > onesCount) {
      lessFrequented = '1';    
    }
    if (zerosCount <= onesCount) {
      lessFrequented = '0';    
    }  
    zerosCount = 0;
    onesCount = 0;
    
    filteredArrayCO2 = filteredArrayCO2.filter(item => item.charAt(iteration) === lessFrequented);
  }
  
  console.log('life support rating: ', parseInt(filteredArrayO2, 2)*parseInt(filteredArrayCO2, 2));