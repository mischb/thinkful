
'use strict';

// Write a function called "computeSumBetween".

// Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The sum between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.


function computeSumBetween(num1, num2) {
  if(num2 <= num1) return 0;
  let numsBetween = arrayNumsBetween(num1, num2);
  return numsBetween.reduce(getSum);
}

function arrayNumsBetween(num1, num2){
  let returnArray = [];
  for(let i=num1;i<num2;i++){
    returnArray.push(i);
  }
  return returnArray;
}

function getSum(total, num){
  return total + num;
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9