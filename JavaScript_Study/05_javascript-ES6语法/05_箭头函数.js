// 普通函数或函数表达式

function f1(a, b, c = 2) {
  console.log(arguments);
}

f1(1, 2, 3, 4, 5)

// 可以打印函数的名字和函数参数的个数, 需要注意的是函数的个数不包括第一个开始默认参数的计算
// 在打印函数名字的时候, 如果函数被bind绑定的this, 同时会显示bound提示
console.log(f1.name, f1.length);
const f2 = f1.bind({})
console.log(f2.name, f2.length);

// 箭头函数的使用, 一个参数可以省略括号, 一个返回值一条语句可以省略return
// 如果多个参数需要括号, return 等等
// 需要注意的是, 箭头函数不绑定this, 同时也没有arguments的参数
const f3 = a => a
console.log(f3(33));

// 参数的剩余参数, 扩展运算符
const f4 = (a, ...args) => {
  console.log(a, args);
}

f4(1, 23, 45, 4, 32, 9)