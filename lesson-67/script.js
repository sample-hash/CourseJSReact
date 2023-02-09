"use strict";

const now = new Date();
// const now = new Date('2020-05-01');
// const now = new Date(2020, 5, 1, 20);
// const now = new Date(-99999999999);

console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());

let start = new Date().getTime();

for(let i = 0; i < 9999999999; i++){
    let count = i ** 3;
}

let end = new Date().getTime();

console.log(`Операция выполнена за ${end - start} мс.`);