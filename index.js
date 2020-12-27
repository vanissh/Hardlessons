'use strict';

const list = document.getElementById('list'),
    userName = document.getElementById('username');

let usersArray = [], 
    liCollection = document.querySelectorAll('li');

usersArray = localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [];
localStorage.setItem('users', JSON.stringify(usersArray));
usersArray = JSON.parse(localStorage.getItem('users'));

const addToStorage = () => {
    localStorage.setItem('users', JSON.stringify(usersArray));
};

const createButton = () => {
    const button = document.createElement('button');
    button.id = 'delete';
    button.textContent = '✖'; 
    return button;
};

const createItem = () => {
    const outUsers = JSON.parse(localStorage.getItem('users'));
    list.innerHTML = '';
    outUsers.forEach(item => {
        const li = document.createElement('li');
    li.textContent = `Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}`;
    li.append(createButton());
    list.insertAdjacentElement('beforeend', li);
    liCollection = document.querySelectorAll('li');
    });
    
};

const render = () => {
    addToStorage();
    createItem();
};

function deleteItem (li){
    let index = [...liCollection].indexOf(li);
    usersArray.splice(index, 1); 
    localStorage.setItem('users', JSON.stringify(usersArray));
    render();
}

const registerUser = () => {
    let name = prompt('Введите через пробел Имя и Фамилию пользвателя');
    while(!name.match(/[А-яa-zё]+\ [А-яa-zё]+/i)){
        alert('Введите корректные данные');
        name = prompt('Введите через пробел Имя и Фамилию пользвателя');
    }
    const  login = prompt('Введите логин'),
        password = prompt('Введите пароль'),
        fullName = name.split(' '),

        regDate = new Date().toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
        regTime = new Date().toLocaleTimeString();
    
    const userData = {
        firstName: fullName[0],
        lastName: fullName[1],
        login: login,
        password: password,
        regDate: regDate + ', ' + regTime,
    };

    usersArray.push(userData);

    render();
};

const authorizeUser = () => {

    let login = prompt('Введите логин'),
        password = prompt('Введите пароль');

    let index, flag = false;
    usersArray.forEach((item, i) => {
        if(item.login === login && item.password === password){
            index = i;
            flag = true;
        }
    });
    flag ? (userName.textContent = usersArray[index].firstName) : alert('Пользователь не найден');

};

document.addEventListener('click', (e) => {
    if(e.target.matches('#registerUser')){
        registerUser();
    } else if(e.target.matches('#login')){
        authorizeUser();
    } else if(e.target.matches('#delete')){
        deleteItem(e.target.closest('li'));
    }
    
});

render();