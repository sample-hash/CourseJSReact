/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Ааа",
        "Яяя",
        "Ггг",
        "Ввв",
        "Ллл"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.getElementsByClassName('promo__bg'),
      lista = document.querySelector('.promo__interactive-list'),
      li = document.querySelectorAll('.promo__interactive-item'),
      confirmBtn = document.querySelector('button');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';
bg[0].style.backgroundImage = 'url("img/bg.jpg")';

lista.innerHTML = '';

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.adding__input').value;
    const checkboxStatus = document.querySelector('input[type="checkbox"]').checked;
    if(checkboxStatus){
        console.log('Добавляем любимый фильм');
    }
    if(inputValue.length > 21){
        let newName = inputValue.slice(0, 21);
        newName += '...';
        movieDB.movies.push(newName);
    } else {
        movieDB.movies.push(inputValue);
    }
    lista.innerHTML = '';
    updateArrList();
});

function updateArrList(){
    movieDB.movies.sort().forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('delete');
    
        const li = document.createElement('li');
        li.classList.add('promo__interactive-item');
        li.textContent = `${index+1}. ${item}`;
        li.append(div);
        lista.append(li);
    });

    document.querySelectorAll('.delete').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(index, 1);
        });
    });
}

updateArrList();





