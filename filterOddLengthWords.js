
// Write a function called "filterOddLengthWords".Write a function called "filter

// Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

'use strict';

function filterOddLengthWords(words){
  let returnArray = [];
  for(let i = 0; i < words.length; i ++){
    if(isOdd(words[i])){
      returnArray.push(words[i]);
    }
  }
  return returnArray;
}

function isOdd(word){
  return (word.length % 2 !== 0);
}











var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']