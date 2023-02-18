"use strict";

const person = {
    name: 'Alex',
    tel: '+1774839293',
    parent: {
        mom: 'Olga',
        age: 28
    }
};

// console.log(JSON.stringify(person));

const clone = JSON.parse(JSON.stringify(person));
clone.parent.mom = 'Anna';
console.log(person);
console.log(clone);