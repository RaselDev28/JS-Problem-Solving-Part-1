// Write a function to count the number of vowels in a string.

function countVowels(str){
    let count = 0;
    const vowel="aeiouAEIOU";

    for(let char of str){
        if(vowel.includes(char)){
            count++
        }
    }
    return count;
}

const str="Hello World";
const vowels=countVowels(str);
console.log(vowels);