"use strict";

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

const circle = document.getElementsByClassName('circle');
console.log(circle);

const queryButtons = document.querySelectorAll('button');
queryButtons.forEach(item => {
    console.log(item);
});

const div = document.querySelector('div');
console.log(div);
