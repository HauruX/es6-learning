// 数据结构中常见的几种类型:
// list(array/linked list) set map
// list 列表(次序表)    set 集(不重复)      map 映射(值-值映射)
// 参考： https://www.jianshu.com/p/6f821574dc11


// es6 Set
// 常用方法 add delete has size  clear
// 使用方法区分于 Array.prototype.push() Array.prototype.length()
{
    let set = new Set();
    set.add(5);
    set.add("5");
    console.log(set.size); // 2
    console.log(set.has(5)); // true
    set.delete(5) // true
    set.delete(345) // false
    console.log(set.size); // 1
}

// 使用数组初始化set
{
    let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    console.log(set.size); // 5
    set.forEach()
}

// forEach 遍历
{
    let set = new Set([1, 2]);
    let processor = {
        output(value, key, ownerSet) {
            console.log(value);
        },
        process(dataSet) {
            // dataSet.forEach(function (value) {
            //     this.output(value);
            // }, this);
            (value, key, ownerSet) => {
                this.output(value)
                console.log(Object.is(value, key)); // true
            };
        }
    };
    processor.process(set);
}

// set转化为array 可用于创建无重复值的数组
{
    function eliminateDuplicates(items) {
        return [...new Set(items)];
    }
    let numbers = [1, 2, 3, 3, 3, 4, 5],
        noDuplicates = eliminateDuplicates(numbers);
    console.log(noDuplicates); // [1,2,3,4,5]
}

// Set 为 Strong Set （强引用的 Set ）
// 对象存储在 Set 的一个实例中，实际上相当于存储在变量中。只要对于 Set 实例的引用仍然存在，所存储的对象就无法被垃圾回收机制回收，从而无法释放内存，可能导致内存泄漏问题。
{
    let set = new Set(),
        key = {};
    set.add(key);
    console.log(set.size); // 1
    // 取消原始引用
    key = null;
    console.log(set.size); // 1
    // 重新获得原始引用
    key = [...set][0];
}

// 针对Set可能导致内存泄漏问题，es6中包含WeakSet，仅支持添加对象，并创建弱引用，当其它引用都取消后，set中引用亦释放。
// 对于 WeakSet 的实例，若调用 add() 方法时传入了非对象的参数，就会抛出错误， has() 或 delete() 则会在传入了非对象的参数时返回 false ；
// Weak Set 不可迭代，因此不能被用于 for-of 循环；
// Weak Set 无法暴露出任何迭代器（例如 keys() 与 values() 方法），因此没有任何编程手段可用于判断 Weak Set 的内容；
// Weak Set 没有 forEach() 方法；
// Weak Set 没有 size 属性。







// es6 Map
// 常用方法 set get delete has size  clear
{
    let map = new Map(),
        obj1 = {},
        obj2 = {};
    map.set(5, 'a');
    map.set('5', 'b');
    map.set(obj1, 'c');
    map.set(obj2, 'd');
    console.log(map);
}

// forEach
{
    let map = new Map([
        ["name", "Nicholas"],
        ["age", 25]
    ]);
    map.forEach(function (value, key, ownerMap) {
        console.log(key + " " + value);
        console.log(ownerMap === map);
    });
}

// Weak Map
// 必须注意的是， Weak Map 的键才是弱引用，而值不是。在 Weak Map 的值中存储对象，就算该对象的其他引用已全都被移除，也会阻止垃圾回收。


// es5中私有变量模拟方式
{
    var Person = (function () {

        var privateData = {},
            privateId = 0;

        function Person(name) {
            Object.defineProperty(this, "_id", {
                value: privateId++
            });

            privateData[this._id] = {
                name: name
            };
        }

        Person.prototype.getName = function () {
            return privateData[this._id].name;
        };

        return Person;
    }());
}
// 使用Weak Map改进 保证privateData内存可以被正常回收
{
    let Person = (function () {

        let privateData = new WeakMap();

        function Person(name) {
            privateData.set(this, {
                name: name
            });
        }

        Person.prototype.getName = function () {
            return privateData.get(this).name;
        };

        return Person;
    }());

}