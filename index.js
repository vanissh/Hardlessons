'use strict';

function DomElement (selector, height, width, bg){
    this.selector = selector;
    this.height =  height;
    this.width = width;
    this.bg = bg;
    this.newElement = 0;
}

DomElement.prototype.createDomElement = function(){
    

    if(this.selector.substring(0, 1) === '.'){
        this.newElement = document.createElement('div');
        this.newElement.classList = this.selector.slice(1);
    }

    if(this.selector.substring(0, 1) === '#'){
        this.newElement = document.createElement('p');
        this.newElement.id = this.selector.slice(1);      
    }
    
    this.newElement.style.cssText = `
    background: ${this.bg};
    height: ${this.height};
    width: ${this.width};
    `
    ;
    document.body.append(this.newElement);
};

let newEl = new DomElement('.best', '100px', '100px', 'green');

document.addEventListener('DOMContentLoaded', () => {
    newEl.createDomElement();
    newEl.newElement.style.position = 'absolute';
    });

document.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowRight'){
    newEl.newElement.style.left = `${newEl.newElement.offsetLeft + 10}px`;
    }
    if(e.code === 'ArrowLeft'){
    newEl.newElement.style.left = `${newEl.newElement.offsetLeft - 10}px`;
    }
    if(e.code === 'ArrowUp'){
    newEl.newElement.style.top = `${newEl.newElement.offsetTop - 10}px`;
    }
    if(e.code === 'ArrowDown'){
    newEl.newElement.style.top = `${newEl.newElement.offsetTop + 10}px`;
    }
    });