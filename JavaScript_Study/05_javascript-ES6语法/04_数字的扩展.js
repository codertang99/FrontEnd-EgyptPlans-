// 二进制、八进制、十六进制表示方法
const a = 0b10101;
const b = 0o772;
const c = 0x123AF;
console.log(a, b, c)

// parseInt(), parseFloat()
// 它既可以直接调用, 也挂载在包装类中
console.log(Number.parseFloat, Number.parseInt)


// Number.isInteger(数值) -> 判断数值是否是整数(反之实数)
console.log(Number.isInteger(1))
console.log(Number.isInteger(2.1))
// 相当于isInteger, 少了自己写函数判断了
function myIsInteger(number) {
  return Math.floor(number) === number
}

// 最小值常量, 对于实型的数比较而言, 用相等方法显然是不正确, 因为存在精度差的问题, 所以可以利用最小值常量
console.log(Number.EPSILON.toFixed(20))

// Number.isSafeInteger(数值), 判断该整数是否是安全整数
// 当整数到达一定的最大量的时候, 往往精度是不正确的
console.log(Number.isSafeInteger(1))

// 对应最大安全整数, 最小安全整数
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))


// Math对应的api

// Math.trunc(数值) -> 去除小数部分, floor方法对于负小数值向下取整有问题, 推荐使用这种方法
console.log(Math.trunc(1.5))

// Math.cbrt() 立方根
console.log(Math.cbrt(99))

// Math.hypot, 对两数的平方和再开放
console.log(Math.hypot(3, 4))
console.log(Math.sqrt(3**2 + 4**2)) // 结果一致

// Math.expm1 -> e^x -1 相当于此运算
// Math.log1p -> log(1+x) 
console.log(Math.expm1(1))
console.log(Math.log1p(1))