// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

'use strict';
function flipEveryNChars(input, number)
{
    let flipped = '';
    let i = 0;
    while i < input.length{
        let portion = toFlip(input,i,number);
        flipped += flipping(portion)
    }
    return flipped;
}

function toFlip(input, index, length){

}

function flipping(text){
    
}

var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'