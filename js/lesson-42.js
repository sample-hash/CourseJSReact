"use strict";

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
div.classList.add('black');

wrapper.prepend(div);
// wrapper.before(div);
// hearts[1].before(div);

// circles[0].style.backgroundColor = 'red';
// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello</h1>';
div.insertAdjacentHTML('afterbegin', '<h2>Hello world!</h2>');

