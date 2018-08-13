// 默认参数
var defaultParams = function(a, b = 'b') {
    console.log(arguments);
    console.log(arguments.length);
    console.log(a === arguments[0]);
    console.log(b === arguments[1]);
}
defaultParams('a', undefined);
defaultParams('a');

// 暂时性死区
try {
    var defaultParams = function(a = b, b) {
        console.log(a + b);
    }
    defaultParams(undefined, 2)
} catch (error) {
    console.error(error);
}


// 剩余参数
function pick(obj, ...keys) {
    let result = Object.create(null);
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = obj[keys[i]];
    }
    return result;
}
console.log(pick({
    title: 'understanding es6',
    author: "Nicholas C. Zakas",
    year: 2015
}, 'title'));


// 扩展运算符
// apply 函数替代品
console.log(Math.max.apply(Math, [20, 100, -1]));
console.log(Math.max(...[20, 100, -1], 0));

// 函数内部包含两个内部方法
// [[call]]在未使用new的情况下调用，运行代码中函数体
// [[construct]]在使用new的情况下调用 创建一个新对象并绑定this
// 箭头函数没有 [[construct]]方法 不可使用new调用


// es5通常 使用 instanceof 检验是否使用new调用函数
// 在使用call 调用时候 可使该判断方式失效
{
    function Person(name) {
        if (this instanceof Person) {
            this.name = name; // 使用 new
        } else {
            throw new Error("You must use new with Person.")
        }
    }
    let person = new Person("Nicholas");
    let notAPerson = Person.call(person, "Michael"); // 奏效了！
    console.log(notAPerson); // undefined
}

// new.target 元属性
// 名词：元属性指的是“ 非对象”（ 例如 new 运算符） 上的属性， 并提供关联目标的附加信息。
{
    function Person(name) {
        console.log(new.target === Person);
        if (typeof new.target !== 'undefined') {
            this.name = name;
        } else {
            throw new Error('You must use new with Person.')
        }
    }
    let person = new Person('c');
    let notAPerson = Person.call(person, 'o'); // 报错
}


// 箭头函数
// 没有arguments参数 没有this绑定，bind等函数无效果 没有[[construct]]方法,不可使用new调用
// IIFE 立即调用函数 调用方式存在一定差异
(function() {
    // it works
}());
(function() {
    // it works
})();
(() => {
    // it works
})();

// 尾调用优化
// ES6 在严格模式下力图为特定尾调用减少调用栈的大小 尾调用优化不会创建新的栈帧，而是清除当前栈帧并再次利用它