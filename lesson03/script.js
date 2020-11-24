'use strict';

let lang = prompt('Choose language(ru/en)', 'ru');
let ru = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let en = 'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday';

if(lang.toLowerCase() === 'ru'){
    console.log(ru);
} else if(lang.toLowerCase() === 'en'){
    console.log(en);
} else {
    console.log('Input error');
}

switch(lang.toLowerCase()) {
    case('ru'):
        console.log(ru);
    break;

    case('en'):
        console.log(en);
    break;

    default: 
        console.log('Input error');
}

let weekDays = [
    [ru.split(',')],
    [en.split(',')],
];

(lang.toLowerCase() === 'ru')? console.log(weekDays[0].toString()):
    ((lang.toLowerCase() === 'en')? console.log(weekDays[1].toString()):
        console.log('Input error'));

let namePerson = prompt('Введите имя');

(namePerson.toLowerCase() === 'артем')? console.log('Директор'):
(namePerson.toLowerCase() === 'максим')? console.log('Преподаватель'):
console.log('Студент');   

