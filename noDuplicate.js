const names=["Rasel", 'Rahim', 'rashid', "Rasel", 'rashid', 'rifat'];

function noDuplicate(names){
    const uniqeName=[];
    for(const element of names){
        if(uniqeName.includes(element)===false){
            uniqeName.push(element);
        }
    }
    return uniqeName;
}

const arr=noDuplicate(names);
console.log( arr);