"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

//Семья состоит из: Peter Ann Alex Linda
function showFamily(arr) {
    let result = 'Семья состоит из: ';
    if(arr.length != 0){
        result += arr.join(' ');
    } else {
        result = 'Семья пуста';
    }
    return result;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    return arr.forEach(value => console.log(value.toLowerCase()));
}

console.log(standardizeStrings(favoriteCities));
