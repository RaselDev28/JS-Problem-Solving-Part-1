// You are given an array of numbers. Count how many times the a number is repeated in the array.

function repeatedNumber(arr, number){
    let count=0;

    for(let num of arr){
        if(num===number){
            count++;
        }
    }
    return count;
}

const number=5;
const arr = [5,6,11,12,98,5, 5];
const findingNumber=repeatedNumber(arr, number);
console.log(findingNumber);