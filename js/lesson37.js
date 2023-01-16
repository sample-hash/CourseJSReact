"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilm: function() {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            alert('Просмотрено мало фильмов');
        }else if(personalMovieDB.count < 30){
            alert('Вы классический зритель');
        } else if(personalMovieDB.count > 30){
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    }, 
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        for (let i = 0; i <= 3; i++) {
            let data = prompt(`Ваш любимый жанр под номером ${i}`);
            if(data !== 0 || data !== null || data.trim() !== ''){
                personalMovieDB.genres[i - 1] = data;
            } else {
                console.log('Вы ввели неправельные данные или не ввели их вовсе.');
                i--;
            }
        }
        personalMovieDB.genres.forEach((el, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${el}`);
        });
    }
};