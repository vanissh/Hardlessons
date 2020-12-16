'use strict';

const userText = document.querySelector('input'),
        text = document.querySelector('p');

document.addEventListener('DOMContentLoaded', () => {

    function debounce(f, t) {
        return function () {
            let previousCall = this.lastCall;
            this.lastCall = Date.now();
            if (previousCall && ((this.lastCall - previousCall) <= t)) {
                clearTimeout(this.lastCallTimer);
            }
            this.lastCallTimer = setTimeout(() => f(), t);
        };
    }

    const outputText = () => setTimeout(() =>{
        text.textContent = userText.value;
    }, 300);
        
    userText.addEventListener('input', debounce(outputText, 2000));

});