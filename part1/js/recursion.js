"use strict";

// function pow(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++){
//         result *= x;
//     }
//     return result;
// }

// function pow(x, n){ 
//     if(n === 1) { 
//         return x; 
//     } else { 
//         return x * pow(x, n - 1);
//     }
// }

// console.log(pow(2, 2)); 
// console.log(pow(2, 3)); 
// console.log(pow(2, 4)); 

let students = {
    js: [
        {
            name: 'Jonh',
            progress: 100
        },
        {
            name: 'Ivan',
            progress: 60
        }
    ],
    html: {
        basic: [
            {
                name: 'Peter',
                progress: 20
            },
            {
                name: 'Ann',
                progress: 18
            }
        ],
        pro: [
            {
                name: 'Sam',
                progress: 10
            }
        ]
    }
};

function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total = 0;

        for(let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
         let total = [0, 0];

         for (const subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
         }

         return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);



