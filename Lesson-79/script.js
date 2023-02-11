const log = function(a, b, ...rest){
    console.log(a, b, rest);
};

log('basic', 'rest', 'operation', 'usage');

function calcDouble(number, basic){
    console.log(number * basic);
}

calcDouble(3, 5);