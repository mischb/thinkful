// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

'use strict';

function getEvenLengthWordsAtProperty(obj, key) {
  let retArr = [];
  try{
    for(let i = 0; i < obj[key].length; i ++){
      if (isEven(obj[key][i].length)){
        retArr.push(obj[key][i]);
      }
    }
  }catch(e){
    return [];
  }
  return retArr;
}

function isEven(num){
  if(num % 2 === 0) return true;
}

var obj = {
//   key: ['a', 'long', 'game']
//   key: 'yeaahhh'
// key: ['a', 'ttt', 'ass']
//   key: []
  test: ['wowe']
//   key: ['oh', 'my', 'fucking', 'god']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

