'use strict';

const data = ' 1234567888888888899999999999999999999999999999999999999999999999 ';
const num = 55;
const str = ' hello world';

const getData = function(a){
    if(typeof(a) !== "string") {
        console.log('Input error: data is not a string');
        return undefined;
    }
    a = a.trim();
    if(a.length > 30){
        a = a.slice(0,30) + '...';
    }
    return a;
};

console.log(getData(data));
console.log(getData(num));
console.log(getData(str));

