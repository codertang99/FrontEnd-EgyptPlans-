// 在ES中let语法, 带有块级作用域, 会在大括号中产生自己的ao, 出去即销毁
// console.log(a);
// var a = "out"
// if(true) {
//   let a = "hello"
//   console.log(a);
// }

function f() {
  console.log("out f");
}

// let关键字, 解决了以前var时候变量泄露的问题, 还有for循环中使用var须使用理解执行函数的问题
/**
 * 块级作用域的函数声明
 * 1. 允许在块结构中定义函数
 * 2. 函数依然有预编译, 在全局作用域和函数作用域中依然有函数提升
 * 3. 在块级作用域中, 会提升到块级结构的头部
 */
(function() {
  if(false) {
    function f() {
      console.log("hello");
    }
  }
  console.log(f); // 在ES5环境中是undefined, 因为涉及函数提升, false不执行f为undefined
  // 而在ES6环境中块结构会提升函数, 出了块结构即作用域销毁, f为外部定义的f
})()

// const的用法基本和let一致, 但是const不能再次赋值
// 对于基本类型不可再赋值, 对于引用类型, 对应引用类型的地址不可再重新赋值
const a = "123"

const b = [1, 3]
b[0] = 5
console.log(b);