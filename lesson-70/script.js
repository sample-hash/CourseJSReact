'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    const btn = document.querySelector('button');

    // const width = box.clientWidth;
    // const height = box.clientHeight;
    const width = box.scrollWidth;
    const height = box.scrollHeight;

    console.log(width, height);

    btn.addEventListener('click', () => {
        // box.style.height = box.scrollHeight + 'px';
        console.log(box.scrollTop);
    });

    console.log(box.getBoundingClientRect());

    const style = window.getComputedStyle(box);
    console.log(style.display);

    console.log(document.documentElement.clientWidth);
});

