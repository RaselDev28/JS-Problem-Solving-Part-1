// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

function findLongStr(str){
    let words=str.split(" ");

    let longestWorld='';

    for (let word of words){
        if(word.length>longestWorld.length){
            longestWorld=word;
        }
    }

    return longestWorld;
}

const str='I am learning Programming to become a programmer';
const longWord=findLongStr(str);
console.log(longWord);

