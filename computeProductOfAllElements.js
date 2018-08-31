// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

// Notes:
// * If given array is empty, it should return 0.
'use strict';

function computeProductOfAllElements(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce(getProduct);
}

function getProduct(total, num) {
  return total * num;
}


var output = computeProductOfAllElements([]);
console.log(output); // --> 60