"use strick";

function factorial(number) {
    if(number <= 0){
        return 1;
    }else if(typeof(number) !== 'number' || (number % 1) !== 0){
        return 'Дичь какая-то!';
    }
    else if(number === 1){
        return number;
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial(0));
