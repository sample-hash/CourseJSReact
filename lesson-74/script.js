"use strict";

window.addEventListener('DOMContentLoaded', () => {
    function User(name, age){
        this.name = name;
        this.age = age;
        this.hello = function(){
            console.log(`Привет, меня зовут ${this.name}`);
        };
    }

    User.prototype.exit = function() {
        console.log(`Пользователь ${this.name} ушел с чата.`);
    };

    const user1 = new User('Ivan', 20);
    const user2 = new User('Kolya', 33);

    user1.hello();
    user2.hello();
    user1.exit();
    user2.exit();

    console.log(user1);
    console.log(user2);
});