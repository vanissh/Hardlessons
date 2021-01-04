'use strict';

const body = document.getElementById('body'),
    mark = document.getElementById('mark'),
    model = document.getElementById('model'),
    year = document.getElementById('year'),
    mileage = document.getElementById('mileage'),
    filterItems = [...document.querySelectorAll('.filter')];

let cars = []; 
    
cars = localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[];
localStorage.setItem('items', JSON.stringify(cars));
cars = JSON.parse(localStorage.getItem('items'));

//рендер
const render = function(){
    body.textContent = '';
    let number = 1;
    
    cars.forEach(function(item){
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${number}</th>
                        <th>${item.mark}</th>
                        <th>${item.model}</th>
                        <th>${item.year}</th>
                        <th>${item.mileage}</th>`;
        
        body.append(tr);  
        number++;      
    });
};

//сортировка
const sortArray = (id) => {
    let newId = id.slice(1).toLowerCase();

    if(newId === 'mark' || newId === 'model'){
        cars.sort((a,b) =>  a[`${newId}`] > b[`${newId}`]? 1: -1);
    } else {
        cars.sort((a, b) => {
            return a[`${newId}`] - b[`${newId}`];
        }); 
    }

    render();
}

//фильтрация
const filterArray = (value, id) => {
    let newId = id.slice(1).toLowerCase();

    cars = cars.filter(item => item[`${newId}`] === value);
    render();
};

document.addEventListener('click', (event) => {
    let target = event.target;

    if(target.matches('#button')){
        const newCar = {
            'mark': mark.value,
            'model': model.value,
            'year': year.value,
            'mileage': mileage.value,
         };
             
         cars.push(newCar);
         localStorage.setItem('items', JSON.stringify(cars));
         render();

         mark.value = null;
         model.value = null;
         year.value = null;
         mileage.value = null;
    }

    if(target.matches('#hMark') || target.matches('#hModel') ||
        target.matches('#hYear') || target.matches('#hMileage')){
            
        sortArray(target.id);
    }

    if(target.matches('#filter')){
        cars = JSON.parse(localStorage.getItem('items'));
        filterItems.forEach(item => {
            if(item.value){
                filterArray(item.value, item.id);
            } else {
                render();
            }
        });
    }
    if(target.matches('#reset')){
        filterItems.forEach(item => item.value = null);
        cars = JSON.parse(localStorage.getItem('items'));
        render();
    }
    
});

render();