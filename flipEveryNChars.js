// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

'use strict';
function flipEveryNChars(input, number)
{
  let flipped = '';
  let i = 0;
  while (i < input.length){
    flipped += flipping(input,i,number);
    i += number;
  }
  return flipped;
}

function flipping(input, index, length){
  let part = '';
  for(let i = index; i < index +length; i++){
    part = input[i] + part;
  }
  return part;
}


var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'