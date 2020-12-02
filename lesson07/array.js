'use strict';

let date = new Date();

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота','Воскресенье'];

for (let i = 0; i < week.length; i++) {
    let html = week[i];
    
    if (html === 'Суббота' || html === 'Воскресенье') {
        html = html.italics();
    }

    'Понедельник'.bold();

    // switch(true){
    //     case(date.getDay() === 1):
    //     week['Понедельник'] = week['Понедельник'].bold();
    //     break;

    //     case(date.getDay() === 2):
    //     week['Вторник'] = week['Вторник'].bold();
    //     break;

    //     case(date.getDay() === 3):
    //     week['Среда'] = week['Среда'].bold();
    //     break;

    //     case(date.getDay() === 4):
    //     week['Четверг'] = week['Четверг'].bold();
    //     break;

    //     case(date.getDay() === 5):
    //     week['Пятница'] = week['Пятница'].bold();
    //     break;

    //     case(date.getDay() === 6):
    //     week['Суббота'] = week['Суббота'].bold();
    //     break;

    //     default:
    //     week['Воскресенье'] = week['Воскресенье'].bold();
    //     break;
    // }
    
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);
}