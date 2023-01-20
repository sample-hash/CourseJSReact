"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam'];

function sortStudentsByGroups(arr) {
    let sortArr = arr.sort();
    let result = [];
    let count = 0;
    while(count < 3){
        result[count] = sortArr.splice(0, 3);
        count++;
    }
    if(sortArr.length === 0){
        result.push('Оставшиеся студенты: -');
    } else {
        let message = `Оставшиеся студенты: ${sortArr}`;
        result.push(message.split(',').join(', '));
    }
}

sortStudentsByGroups(students);