const log = function(a, b, ...rest){
    console.log(a, b, ...rest);
};

log('1', '2', 'df', 'fg');

function calcDouble(number, basic){
    console.log(number * basic);
}

calcDouble(3, 5);