// 属性初始化器的速记法
function createPerson(name, age) {
    return {
        name
    };
}

// 方法简写
var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    }
};

// 可计算属性名
// 在 ES6 中，可计算属性名是对象字面量语法的一部分，它用的也是方括号表示法
var lastName = "last name";
var suffix = 'name';
var person = {
    ['first' + suffix]: "Nicholas",
    [lastName]: "Zakas"
};


// 扩展方法
Object.is(); // 替代 == === 大部分情况等同于===，但Object.is(+0, -0)为false，Object.is(NaN, NaN)为true
Object.assign(); // extend minxin mix
// 切记 Object.assign() 不能将源对象的访问器属性复制到接收对象中，由于它使用了赋值运算符，源对象的访问器属性就会转变成接收对象的数据属性
var receiver = {},
    supplier = {
        get name() {
            return "file.js"
        }
    };
Object.assign(receiver, supplier);
var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
console.log(descriptor.value); // "file.js"
console.log(descriptor.get); // undefined

// 原型
Object.getPrototypeOf // 获取原型
Object.setPrototypeOf // 设置原型

// 使用 super 引用的简单原型访问 必须位于简写的方法之内
// super 相当于 Object.getPrototypeOf(this).getGreeting.call(this)
let friend = {
    getGreeting: function() {
        // 语法错误
        return super.getGreeting() + ", hi!";
    }
};