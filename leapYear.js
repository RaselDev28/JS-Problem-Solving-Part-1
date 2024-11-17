function isLeapYear(year){
    if(year%4===0){
        return true;
    }
    else{
        return false;
    }
}
const lip=isLeapYear(2024);
// console.log(lip);

function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const Lip=isLeapYear2(1900);
const Lip2=isLeapYear2(2000);
console.log(Lip, Lip2);