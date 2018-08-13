// 暂存性死区
// let 作用域为块级作用域
// 在语法块内 直到let声明位置之前 均是暂时性死区 即使用typeof此类安全运算符 访问变量名都会报错
try {
    console.log(typeof b);
    console.log(typeof a);  // 此处报错
    let a = 1;
    console.log(a);
} catch (error) {
    console.error(error);
}

// 循环内的 let 声明
// 避免输出十个10
// 同样适用于for-in for-each
// 1. let
// 在每次迭代中，都会创建一个新的同名变量并对其进行初始化
var arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(function () {
        console.log(index);
    });
}
arr.forEach(element => {
    element();
});
// 2. 闭包
// 立即调用函数表达式（IIFEs）
var arr = [];
for (let index = 0; index < 10; index++) {
    arr.push((function (n) {
        return function () {
            console.log(n);
        }
    })(index))
}
arr.forEach(element => {
    element();
});


// 全局块级绑定
// 当在全局作用域上使用 var 时，它会创建一个新的全局变量，并成为全局对象（在浏览器中是 window ）的一个属性，并可能覆盖一个已有的全局属性。
// 在浏览器中
var RegExp = "Hello!";
console.log(window.RegExp); // "Hello!"
// 在浏览器中
// let RegExp = "Hello!";
// console.log(RegExp); // "Hello!"
// console.log(window.RegExp === RegExp); // false