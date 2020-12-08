'use strict';

const color = document.getElementById('color');
const changeBtn = document.getElementById('change');
let backGround = document.querySelector('.wrapper');

changeBtn.addEventListener('click', () =>{

    let randomColor = (Math.random()*0xFFFFFF<<0).toString(16);

    backGround.style.background = "#" + randomColor;
    color.textContent = '#' + randomColor;
    changeBtn.style.color = "#" + randomColor;
});
