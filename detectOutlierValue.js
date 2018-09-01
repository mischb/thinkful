'use strict';
// Instructions from your teacher:
// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
// The return value should be 1-indexed, not 0-indexed.


function detectOutlierValue(string)
{
  let array = string.split(" ");
  let evens = countEvens(array);
  let odds = array.length - evens;
  console.log(`evens: ${evens} odd: ${odds}`);
  if (evens > odds){
    return (array.findIndex(num=> !isEven(num)) + 1);
  }else {
    return (array.findIndex(num=> isEven(num)) + 1);
  }
}

function countEvens(array){
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if (isEven(array[i])) count ++;
  }
  return count;
}
function isEven(num){
  return num % 2 === 0;  
}


// example:

console.log(detectOutlierValue("3 5 7 9 11 4")); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue('1 10 1 1');  //=> 2 - Second number is even, while the rest of the numbers are odd
