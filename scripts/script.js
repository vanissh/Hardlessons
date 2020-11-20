'use strict';

let num = 266219;

let arr = num.toString().split('');
let lgth = num.toString().length;

let result = 1; 
for(let i = 0; i < lgth; i++){
    result *= arr[i];
}
console.log(result);

let newResult = result**3;

console.log(newResult.toString().substr(0,2));

