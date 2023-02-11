"use strict";

window.addEventListener('DOMContentLoaded', () => {
//Timer
    const deadline = '2023-02-11';

    function getDeadlineTime(deadline){
        const fullTime = Date.parse(deadline) - new Date(),
              days = Math.floor(fullTime / (1000 * 60 * 60 * 24)),
              hours = Math.floor(fullTime / (1000 * 60 * 60) % 24),
              minutes = Math.floor(fullTime / (1000 * 60) % 60),
              seconds = Math.floor(fullTime / 1000 % 60);

        return {
            'fullTime': fullTime,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function getZero(number){
            if(number < 10 && number >= 0){
                number = '0' + number;
            } else {
                number  = '00';
            }
            return number;
        }
        
        function updateClock(){
            const time = getDeadlineTime(endTime);
            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);

            if(time.days <= 0 && time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0){
                clearInterval(timeInterval);
                console.log('done');
            }
        }
    }

    setClock('.timer', deadline);

});