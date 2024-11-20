// Write a function to find out the number of ferhenit to celcius

function convertCelcius(ferhenit){
    const celcious=(ferhenit*9/5)+32;
    return celcious;
} 

let ferhenit=34;
const celciousNumber=convertCelcius(ferhenit);
console.log(celciousNumber);