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

function calculateVolumeAndArea(length) {
    if(typeof(length) !== 'number' || length < 0 || length % 1 != 0){
        return 'При вычислении произошла ошибка';
    }

    let result = `Объем куба: ${length*length*length}, площадь всей поверхности: ${(length*length)*6}`;
    return result;
}

function getCoupeNumber(number) {
    if(typeof(number) !== 'number' || number < 0 || number % 1 != 0){
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (number < 0 || number > 36){
        return 'Таких мест в вагоне не существует';
    }

    return Math.ceil(number / 4);
}

function getTimeFromMinutes(minutes) {
    if(minutes < 0 || minutes % 1 != 0 || typeof(minutes) !== 'number'){
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    let label = '';

    if(hours == 0 || (hours >= 5 && hours <= 10)){
        label = 'часов';
    } else if(hours == 1){
        label = 'час';
    } else if(hours >= 2 && hours <= 4){
        label = 'часа';
    }
    
    return `Это ${hours} ${label} и ${min} минут`;
}

function findMaxNumber(arg1, arg2, arg3, arg4) {
    if(typeof(arg1) !== 'number' ||
       typeof(arg2) !== 'number' ||
       typeof(arg3) !== 'number' ||
       typeof(arg4) !== 'number'){
        return 0;
    }else{
        return Math.max(arg1, arg2, arg3, arg4);
    }
}

function fib(length) {
    if(typeof(length) != 'number' || length === 0 || length % 1 !== 0){
        return '';
    }
    if(length == 1){
        return '0';
    }

    let a = 0;
    let b = 1;
    let result = a + ' ' + b + ' ';

    let count = 2;
    while(count < length){
        let tmp = a + b;
        if(count != length-1){
            result += tmp + ' ';
        } else {
            result += tmp;
        }
        a = b;
        b = tmp;
        count++;
    }
    return result;
}

function workWithObj(){
    const obj = {
        count: 44,
        movies: {
            length: 155,
            year: 2011
        },
        actors: {},
        genres: ['genres1', 'genres2'],
        privat: false,
        getCount: function(){
            return this.count;
        }
    };
    console.log(obj.getCount());
    for(let key in obj){
        if(typeof(obj[key]) === 'object' && !(obj[key] instanceof Array)){
            console.log(`Обьект ${key}: {`);
            for(let i in obj[key]){
                console.log(`   Ключ ${i} со значением ${obj[key][i]}`);
            }
            console.log('}');
            continue;
        } else if (obj[key] instanceof Array){
            console.log(`Массив ${key}: [`);
            console.log(`   Свойство ${key} имеет значение ${obj[key]}`);
            console.log(']');
            continue;
        }
        console.log(`Свойство ${key} имеет значение ${obj[key]}`);
    }
}

function workWithArr(){
    const arr = [1, 3, 25, 16, 7];
    console.log(arr.sort(compareNum));

    function compareNum(a, b){
        return a - b;
    }

    arr.forEach(function(item, index){
        console.log(`${index}: ${item}`);
    });

    const clientArr = prompt('', '');
    const prod = clientArr.split(', ').sort().join('---');
    console.log(prod);

    const arr2 = ['vvv', 'fff', 'aaa', 'bbb'];
    console.log(arr2.sort());

}

function valueAndLink(){
    const obj = {
        a: 3,
        b: 5,
        c: {
            x: 44,
            y: 32
        }
    };

    function getCopyObj(mainObj){
        let copyObj = {};
        for(let key in mainObj){
            copyObj[key] = mainObj[key];
        }
        return copyObj;
    }

    let copyObj = getCopyObj(obj);
    obj.a = 10;
    obj.c.x = 0;
    console.log(obj);
    console.log(copyObj);

    const add = {
        d: 99,
        e: 101
    };
    const clone = Object.assign(obj);
    console.log(clone);
    obj.b = 99;
    obj.c.x = 999;
    console.log(clone);
}

function workWithSpread(){
    const obj = {
        a: 1,
        b: 2,
        c: {
            x: 3,
            y: 4
        }
    };
    function copyObj(obj){
        let copyObj = {};
        for(let key in obj){
            copyObj[key] = obj[key];
        }
        return copyObj;
    }
    const spreadObj = {...obj};
    const linkObj = obj;
    const assignObj = Object.assign(obj);
    let copy = copyObj(obj);


    obj.a = 99;
    obj.c.x = 99;
    console.log('Основной обьект:');
    console.log(obj);
    console.log('Spread обьект:');
    console.log(spreadObj);
    console.log('Ссылка обьект:');
    console.log(linkObj);
    console.log('Assign обьект:');
    console.log(assignObj);
    console.log('Копированый обьект:');
    console.log(copy);
}

function arrSpread(){
    let arr = [2, 4, 6];
    let arrSpread = [...arr];
    let arrLink = arr;
    let sliceArr = arr.slice();
    arr[1] = 'test';

    console.log(arr);
    console.log(arrSpread);
    console.log(arrLink);
    console.log(sliceArr);

}

function workWithObj2() {
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
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
    };
}



