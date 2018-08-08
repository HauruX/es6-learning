var defaultParams = function(a, b = 'b', c) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(a === arguments[0]);
    console.log(b === arguments[1]);
    console.log(b === arguments[2]);
    console.log('-------');
    b = 2;
    c = 3;
    console.log(a === arguments[0]);
    console.log(b === arguments[1]);
    console.log(b === arguments[2]);
}
defaultParams('a', undefined, 'c');