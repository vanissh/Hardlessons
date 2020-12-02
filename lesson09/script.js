'use strict';

const newDate = {
    month: {
            0: 'января',
            1: 'февраля',
            2: 'марта',
            3: 'апреля',
            4: 'мая',
            5: 'июня',
            6: 'июля',
            7: 'августа',
            8: 'сентября',
            9: 'октября',
            10: 'ноября',
            11: 'декабря',
    },

    weekDay: {
            0: 'Воскресенье',
            1: 'Понедельник',
            2: 'Вторник',
            3: 'Среда',
            4: 'Четверг',
            5: 'Пятница',
            6: 'Суббота',
    },

};

let firstOption;
let firstEl;
let secondEl;

function formatNumber (number){
    if (number < 10){
        number = '0' + number;
    }
    return number;
}

const hoursArr = ['час', 'часа', 'часов'];
const minArr = ['минута', 'минуты', 'минут'];
const secArr = ['секунда', 'секунды', 'секунд'];

function updateTime (){
    let date = new Date();

    let dd = date.getDate();
    let weekDay = date.getDay();

    let mm = date.getMonth();
    let month = mm;

    let hh = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    for(let key in newDate.month){
        if (month === +key){
            month = newDate.month[key];
        }
    }

    for(let key in newDate.weekDay){
        if (weekDay === +key){
            weekDay = newDate.weekDay[key];
        }
    }
    function changeDeclination(number, word){

        if(5 <= number%10 && number%10 <= 9 || number%10 === 0 ||
            11 <= number && number <= 19){
            if(word === 'hour'){
                return hoursArr[2];
            } else if (word === 'min'){
                return minArr[2];
            } else {
                return secArr[2];
            } 
        } else if (number%10 === 1){
            if(word === 'hour'){
                return hoursArr[0];
            } else if (word === 'min'){
                return minArr[0];
            } else {
                return secArr[0];
            } 
        } else if (2 <= number%10 && number%10 <= 4){
            if(word === 'hour'){
                return hoursArr[1];
            } else if (word === 'min'){
                return minArr[1];
            } else {
                return secArr[1];
            } 
        } 
    }

    const yy = date.getFullYear();
    firstOption = 'Cегодня' + ' ' + weekDay + ', '+ dd +' ' + month + ' ' +
    yy + ' года' + ', '+ hh + ' ' + changeDeclination(hh, 'hour') + ' ' +
    min + ' '+ changeDeclination(min, 'min') + ' ' + sec + ' ' +
    changeDeclination(sec, 'sec');

    const secondOption = formatNumber(dd) + '.' + formatNumber(mm) + '.' + yy + ' - ' + 
        formatNumber(hh) + ': ' + formatNumber(min) + ':' + formatNumber(sec);

    firstEl.innerHTML = firstOption;
    secondEl.innerHTML = secondOption;
}

firstEl = document.getElementById('first');
secondEl = document.getElementById('second');

setInterval(updateTime, 1000);