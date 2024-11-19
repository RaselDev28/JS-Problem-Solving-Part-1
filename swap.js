let x=5;
let y=8;

console.log(x, y);

const temp=x;

x=y;
y=temp;

console.log(x, y);

[x, y]=[y, x];
console.log(x , y)