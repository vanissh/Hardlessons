'use strict';

let lang = prompt('Choose language(ru/en)', 'ru');

if(lang.toLowerCase() === 'ru'){
    console.log('Понедельник','Вторник','Среда',
    'Четверг','Пятница','Суббота','Воскресенье');
} else if(lang.toLowerCase() === 'en'){
    console.log('Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday');
} else {
    console.log('Input error');
}

switch(lang.toLowerCase()) {
    case('ru'):
        console.log('Понедельник','Вторник','Среда',
        'Четверг','Пятница','Суббота','Воскресенье');
    break;

    case('en'):
        console.log('Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday');
    break;

    default: 
        console.log('Input error');
}

let weekDays = [
    ['Понедельник','Вторник','Среда',
'Четверг','Пятница','Суббота','Воскресенье'],

    ['Sunday','Monday','Tuesday','Wednesday',
    'Thursday','Friday','Saturday'],
];

(lang.toLowerCase() === 'ru')? console.log(weekDays[0].toString()):
    ((lang.toLowerCase() === 'en')? console.log(weekDays[1].toString()):
        console.log('Input error'));

let namePerson = prompt('Введите имя');

(namePerson.toLowerCase() === 'артем')? console.log('Директор'):
(namePerson.toLowerCase() === 'максим')? console.log('Преподаватель'):
console.log('Студент');   

