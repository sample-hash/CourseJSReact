"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string'){
        return 'Ошибка!';
    }
    let arr = str.split('');
    return arr.reverse().join('');
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if(arr.length === 0){
        return 'Нет доступных валют';
    }
    let result = 'Доступные валюты:\n';
    arr.forEach((el,index) => {
        if(el !== missingCurr){
            result += `${el}\n`;
        }
    });
    return result;
}

console.log(availableCurr(['USD', 'EUR', 'UAH', 'RUB', 'CNY'], 'RUB'));
