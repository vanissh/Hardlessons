'use strict';

let date = new Date();

const week = {  
            1: 'Понедельник', 
            2: 'Вторник',  
            3: 'Среда',
            6: 'Суббота', 
            4: 'Четверг',
            5: 'Пятница',
            7: 'Воскресенье'
            };

for (let key in week) {
    let html = week[key];

    if (html === 'Воскресенье' || html === 'Суббота') {
        html = html.italics();
    }

    if(date.getDay() === 0) {
        week[7] = week[7].bold();
    } else if(date.getDay() === +key){
        html = html.bold();
    }
    
    const div = document.createElement('div');
    div.innerHTML = html;
    document.body.append(div);
}
