'use strict';
// Instructions from your teacher:
// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
// The return value should be 1-indexed, not 0-indexed.


function detectOutlierValue(string)
{
  let evens = countEvens(string);
  let odds = countOdds(string);
  if (evens > odds){
    for(let i = 0; i < string.length; i++){
      if (!isEven(string[i])) return i + 1;
    }
  }else {
    for(let i = 0; i < string.length; i++){
      if (isEven(string[i])) return i + 1;
    }
  }
}

function countEvens(string){

}

function countOdds(string){

}
function isEven(char){

}


// example:

detectOutlierValue('2 4 7 8 10'); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue('1 10 1 1');  //=> 2 - Second number is even, while the rest of the numbers are odd
