'use strict';

let date = new Date();

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота','Воскресенье'];

for (let i = 0; i < week.length; i++) {
    let html = week[i];
    
    if(date.getDay() === i+1){
        html = html.bold();
    }
    if (i > 4) {
        html = html.italics();
    }

    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);
}