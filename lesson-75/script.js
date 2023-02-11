// "use strict";

// function showThis(){
//     console.log(this);
// }
// showThis();

// function sayName(){
//     console.log(this);
//     console.log(this.name);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);

// //bind
// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(2));
// console.log(double(4));

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});






