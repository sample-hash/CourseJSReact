"use strict";

function func1(){
    const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    const movie1 = prompt('Один из последних просмотренных фильмов?', ''),
        rate1 = prompt('На сколько его оцените?', ''),
        movie2 = prompt('Один из последних просмотренных фильмов?', ''),
        rate2 = prompt('На сколько его оцените?', '');

    personalMovieDB.movies[movie1] = rate1;
    personalMovieDB.movies[movie2] = rate2;

    console.log(personalMovieDB);
}

function func2(){
    const lines = 5;
    let result = '';
    let space = 5;
    let star = 1;
    for (let i = 0; i <= lines; i++) {
        for(let j = space; j > 0; j--){
            result += ' ';
        }
        for(let k = 0; k < star; k++){
            result += '*';
        }
        result += '\n';
        space--;
        star+=2;
    }

    return result;
}

function func3() {
    
}

console.log(func2());
