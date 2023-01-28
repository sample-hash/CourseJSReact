"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a');

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    // e.target.remove();
    i++;
    if(i == 1){
        e.target.removeEventListener('click', deleteElement);
        console.log('Event deleted.');
        i = 0;
    }
};

// btns.forEach(item => {
//     item.addEventListener('click', deleteElement);
// });

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link, '_blank');

    console.log('Clicked link');
});



