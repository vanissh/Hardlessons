'use strict';

let date = new Date();

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота','Воскресенье'];

for (let i = 0; i < week.length; i++) {
    let html = week[i];
    
    if (html === 'Суббота' || html === 'Воскресенье') {
        html = html.italics();
    }

    if(date.getDay() === 0){
        week[6] = week[6].bold();
    } else if(date.getDay() === i+1){
        html = html.bold();
    }
    
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);
}