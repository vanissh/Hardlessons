'use strict';

const arr = ['754', '98765', '260', '4124', '296', '5963', '481'];

for (let i = 0; i < arr.length; i++){

    if (+arr[i][0] === 2 || +arr[i][0] === 4){

        console.log(arr[i]);
    }
}

const n = 100;
console.log(1, '- Делители данного числа:', 1);

for (let i = 2; i <= n; i++) {

    let mark = true;

    for (let j = 2; (j*j <= i) && (mark === true); j++) {
        if (i%j === 0) {
        mark = false;
        }
    }
    
    if (mark) {
        console.log(i, '- Делители данного числа:', 1, 'и', i);
    }
}
