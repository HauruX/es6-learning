// class Man{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(this.name, this.age);
//     }
// }
// console.log(new Man("hauru", 21).introduce());

// 迭代器遍历方式 for...of ...操作符


// todo: 迭代器对象的 Symbol.iterator 属性为函数  其执行结果指向本迭代器对象
// var o = {
// };
// // o[Symbol.iterator]
// let f = function*() {
//     yield 21;
//     yield 'hauru';
// }
// // let iterator= f()
// // console.log(Object.prototype.toString.call( f()[Symbol.iterator]() ));
// // console.log( f()[Symbol.iterator]() === f );
// // console.log( f() === iterator[Symbol.iterator]() );

// let generator = f();
// let iterator = generator[Symbol.iterator]; 
// let arr = [1,2]
// console.log( Object.prototype.toString.call(f()) );


// let o = {
//     [Symbol.iterator]: function () {
//         return {
//             next: function () {
//                 return {
//                     value: 1,
//                     done: false
//                 }
//             }
//         }
//     }
// }



// proxy 代理
let o = new Proxy({}, {
    get: function(target, handler) {
        return 21;
    }
});

let proxy = new Proxy({}, {
    get: function() {
        return 21;
    }
})
let o2 = Object.create({}, {
    age: {
        value: 12
    }
});


// let obj = {
//     data: ["hello", "world"],
//     [Symbol.iterator]() {
//         const self = this;
//         let index = 0;
//         return {
//             next() {
//                 if (index < self.data.length) {
//                     return {
//                         value: self.data[index++],
//                         done: false
//                     }
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }
// for(let item of obj) {
//     console.log(item);
// }



// var arr = [1,2,3];
// var iterator = arr[Symbol.iterator]();
// console.log(iterator.next());

// var s = Symbol();
// var a = {s: "hauru"}
// console.log(a["s"]);



// var sy = Symbol(2);
// var a = {
//     [sy]: "test"
// };
// console.log(a[sy]);


// var map = new Map();
// map.set("t", "yes");
// map.set("f", "no");
// for(let key of map.keys()) {
//     console.log(key);
// }
// for(let value of map.values()) {
//     console.log(value);
// }
// for(let [key, value] of map.entries()) {
//     console.log(key, value);
// // }
// var reporter = {
//     report: function(key, value) {
//         console.log(key, value);
//     }
// }
// map.forEach(function(value, key) {
//     this.report(key, value);
// }, reporter);



// var {a:b}={a:2};
// console.log(b,3);

// var s = "𠮷";
// console.log(s.codePointAt(1));

// var s = new Set();
// var arr = [2,3,4,5,1,2,3];
// arr.map(value=>s.add(value));
// for(value of s) console.log(value);

// var arr = [2,3,4,5,1,2,3];
// for (var key in arr) {
//     if (arr.hasOwnProperty(key)) {
//         var element = arr[key];
//         console.log("key:", key, (typeof key),  "value:", element);
//     }
// }
// arr.forEach(value => {
//     console.log(value);
// });
// for(let item of arr) {
//     if (item === 1) {
//         // continue;
//         break;
//     }
//     console.log(item);
// }

// var o = {
//     name: "hauru",
//     age: 21
// };
// for(let item of Object.keys(o)) {
//     console.log(item);
// }

// var testIterator = {
//     [Symbol.iterator]: function(){
//         return this;
//     },
//     next: function(){
//         return {
//             done: false,
//             value: 1
//         }
//     }
// }
// for(let item of testIterator) {
//     console.log(item);
// }