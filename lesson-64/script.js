"use strict";
const btn = document.querySelector('.btn');
let timerId;

btn.addEventListener('click', myAnimation);

function myAnimation(){
    const box = document.querySelector('.box');
    let pos = 0;

    const timer = setInterval(function(){
    if(pos === 300){
        clearInterval(timer);
    } else {
        pos++;
        box.style.top = pos + 'px';
        box.style.left = pos + 'px';
    }
    }, 10);
    
}
