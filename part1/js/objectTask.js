"use strict";
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(data){
        const {age} = data;
        const {languages} = data.skills;
        let result = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang){
            result += `${lang.toUpperCase()} `;
        });
        return result;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(data){
    let result = '';
    const {programmingLangs} = data.skills;
    for(let key in programmingLangs){
        result += `Язык ${key} изучен на ${programmingLangs[key]} `;
    }
    return result;
}
console.log(showProgrammingLangs(personalPlanPeter));

function showExperience(data){
    return data.skills.exp; 
}