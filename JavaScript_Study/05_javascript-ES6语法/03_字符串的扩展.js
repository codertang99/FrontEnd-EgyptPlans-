// includes(), startWith(), endWith()

let str = "hello world!"

console.log(str.includes("hello")); // 是否包含该字符串
console.log(str.startsWith("he"));  // 是否以字符串开头
console.log(str.endsWith("d!"));  // 是否以字符串结尾

// padStart(), padEnd()

const str2 = "12"
// padStart(位数, 填充的值)从开始填充, padEnd()从结尾填充
console.log(str2.padStart(5, 0));
console.log(str2.padEnd(5, 8999));

// repeat(次数) 将字符串重复输出
console.log(str2.repeat(10));

// 模板字符串, 用作字符串拼接, 对于传统字符串拼接太过麻烦, 可用模板字符串
// ``, 这类模板字符串还可以用于函数的调用, 一些库也会利用这一特性比如styled-components
console.log(`您好呀, codertang${001}`);

function f() {
  console.log(arguments);
  return arguments
}

// 这里用作函数调用, 所有字符串都当作第一参数当作数组传入, 其余${}的变量当作其它参数
console.log(f`您好呀${1}1#${2}`);