// Flip every pair of characters in a string.

// example :

'use strict';
function flipPairs(input)
{
  let flipped = '';
  for(let i = 0; i<input.length-2;i++){
    let flip = flipping(input[i], input[i+1]);
    flipped + flip;
  }
  return flipped;
}

function flipping(char1, char2){
  return char2 + char1;
}


var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
