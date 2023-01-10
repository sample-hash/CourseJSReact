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
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    if(personalMovieDB.count < 10){
        alert('Просмотрено мало фильмов');
    }else if(personalMovieDB.count < 30){
        alert('Вы классический зритель');
    } else if(personalMovieDB.count > 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }

    for(let i = 0; i < 2; i++){
        const movie = prompt('Один из последних просмотренных фильмов?', ''),
        rate = prompt('На сколько его оцените?', '');

        if(movie != '' && rate != '' && movie != null && rate != null && movie.length < 50){
            personalMovieDB.movies[movie] = rate;
        } else {
            console.log('Error');
            i--;
        }
    }

    console.log(personalMovieDB);
}

function getMathResult(number, times) {
    if(times == 0 || times < 0 || typeof(times) == 'string'){
        return number;
    }

    let result = '';

    for(let i = 1; i <= times; i++){
        if(i != times){
            result += number * i + '---';
        } else {
            result += number * i;
        }
    }
    return result;
}

console.log(getMathResult(3, 'sf'));
