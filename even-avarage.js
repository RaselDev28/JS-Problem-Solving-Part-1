function evenAvarage(numbers){
    const even=[];
    for(const number of numbers){
        if(number % 2 === 0){
            even.push(number);
        }
    }
    // console.log(even);
    let sum= 0;
    const count=even.length;

    for(const number of even){
        sum=sum+number;
    }

    const avag=sum/count;
    return avag;
}

const numbers=[2, 4, 6, 88, 90, 99, 101, 33];
const avg=evenAvarage(numbers);
console.log("The Eve number avg is: ", avg);