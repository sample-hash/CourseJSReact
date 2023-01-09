"use strict";

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