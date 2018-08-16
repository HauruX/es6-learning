// 解构对象
// 当被解构的值为undefined或null时候会报错
let node = {
    type: "Identifier",
    name: "foo"
};
let {
    type,
    foo = '233'
} = node;
console.log(type, foo); // "Identifier 233"

// : 功能 1.深层次(嵌套对象)解构 2.变量重命名
// = 功能 默认值
let nodeB = {
    loc: {
        start: {
            line: 1,
            column: 1
        }
    }
};
let {
    loc: {
        start: localStart
    }
} = nodeB;
// 不会产生变量 loc
console.log(localStart.line); // 1



// 数组解构
var [first, , third] = [1, 2, 3];
console.log(first, third); // 1 3

// 互换两个变量值
var a = 1,
    b = 2;
[b, a] = [a, b];
console.log(a, b); // 2 1

// 默认值 嵌套结构
var [{
        age: localAge
    },
    [color], shape = 'shapeOfU'
] = [{
        age: 21
    },
    ['red']
];
console.log(localAge, color, shape); // 21 red shapeOfU

// 剩余项
let colors = ["red", "green", "blue"];
let [, ...restColors] = colors;
console.log(restColors[0]); // "green"

// 克隆数组 两种方式
['red', 'green'].concat(); // es5 concat
var [...newArr] = ['red', 'green']; // es6 数据解构


// 函数参数解构
// 解构参数不可缺失 可通过设置默认控对象方式将参数变为可选参数 但当第三个参数传null时仍会报错
function setCookie(name, value, {
    secure,
    path,
    domain,
    expires
} = {}) {
    // 设置 cookie 的代码
}
setCookie("type", "js", {
    secure: true,
    expires: 60000
});