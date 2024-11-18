function oddAvarage(numbers){
    const odds=[];
for(const number of numbers){
    if(number%2 ===1){
        odds.push(number);
    }
}
let sum=0;
const count=odds.length;
for (const number of odds){
    sum=sum+number;
}
const avarage=sum/count;
return avarage;
}

const numbers=[4,3,34,33,31,99];
const avg=oddAvarage(numbers);
console.log("Avarage is : ", avg);