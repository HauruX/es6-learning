var a = `a
    -newline`;
console.log(a);
var d = `d\
    -newline`;
console.log(d);
var c = 'c\
    -newline';
console.log(c);


var b = `b\n\
    -newline`;
console.log(b);



let count = 10,
    price = 0.25;
console.log(`the ${count} of things cost $${(count*price).toFixed(2)}`);

let name = 'calvin';
console.log(`my name is ${`${name}`}`);

// 函数标签
let tag = function(literals, ...substitutions) {
    console.log(typeof literals);
    let result = '';
    for (let index = 0; index < substitutions.length; index++) {
        result += literals[index];
        result += substitutions[index];
    }
    result += literals[literals.length - 1];
    return result;
}
console.log(tag`hello ${21+2}`);

// raw 原始值
console.log(`a\nb`);
console.log(String.raw`a\nb`);  // a\\nb
