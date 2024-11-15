function inchTofeet(inch){
    const feet=inch/12;
    return feet;
}
const result=inchTofeet(76);
console.log(result);

function inchTofeet2(inch){
    const feet=inch/12;
    const feetNumber=parseInt(feet);
    const inchRemain=inch%12;
    const lastResult=feetNumber + ' ft ' + inchRemain + ' inch ';
    return lastResult;
}

const value=inchTofeet2(76);
console.log(value);


function milesToKilo(miles){
    const mile=miles*1.6;
    return mile;
}
const road=milesToKilo(5);
console.log(road, "Kilometer");