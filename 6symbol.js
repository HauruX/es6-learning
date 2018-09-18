// 符号变量

let firstName = Symbol();
let person = {};
person[firstName] = 'Jack';
// Object.defineProperty(person, firstName, { writable: false });
Object.defineProperties(person, {
    [firstName]: {
        value: "Zakas",
        writable: false
    }
});
console.log(person[firstName]);

// 全局共享的 Symbol
let uid = Symbol.for("uid");
console.log(Symbol.keyFor(uid));    // "uid"
console.log(Symbol.keyFor(Symbol.for('uid')));  // uid
console.log(Symbol.for('uid') === uid); // true
console.log(Symbol('uid') === uid);     // false

// 类型转换
// 可用String 间接调用toString方法
console.log(String(Symbol(21)));    // Symbol(21)
// 不可以使用加号拼接字符串 不可转化为数字
try {
    console.log('' + Symbol());
    console.log(Symbol() / 1);
} catch (error) {
}

// 检索符号属性
Object.keys();  // 可枚举属性名称
Object.getOwnPropertyNames();   // 可枚举/不可枚举属性名称
// 上述两个方法均无法获取到符号属性
Object.getOwnPropertySymbols(); // 符号属性名称


