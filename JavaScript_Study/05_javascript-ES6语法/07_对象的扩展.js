// Object.assign(), 浅拷贝对象, 出现同名即后面覆盖前面
// 不会拷贝原型上面的属性, 如果目标对象不是对象, 而是number, boolean, string等普通类型
// 则会包装后再拷贝, 不可拷贝null或undefined, 出现即忽略, 被拷贝对象忽略, 目标对象出现即报错除string外
const a = { a: 1, b: 2 }
const b = { c: 3, d: 5 }

Object.assign(a, b)
console.log(a);

console.log(Object.assign({}, "123", true, 123, { a: 1, b: 2 }));
/**
 * 应用场景: 
 *  用作构造函数的初始化, Object.assing(this, { x, y })
 *  用作设置原型属性, Object.assign(prototype, {})
 *  用作参数默认值等等, 这些应用场景都要熟悉
 */

// Object.keys(), Object.values(), Object.entries()

const obj = { a: 1, b: 2, c: 3, d: 4 }

// 获取所有的key进行遍历
for(const key of Object.keys(obj)) {
  console.log(key);
}

// 获取所有的value
for(const value of Object.values(obj)) {
  console.log(value);
}

// 获取entries进行遍历
for(const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// 对象的...扩展运算, 和数组类似这里不再做展示, 