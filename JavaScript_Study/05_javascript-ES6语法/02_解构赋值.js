
// 对于数组的读取麻烦, 可以使用数组的解构赋值, 对数组中的值依次解构, 如果对应为undefined的则可以使用默认值
const [a = 100, b, c] = [1, 2, 3]
console.log(a, b, c)

const {
  // 这里分为匹配和变量, 前面为匹配的值: 后面为变量值, 可以修改自定义变量, 也可以不修改, 不修改则匹配和变量值同名
  // 这里同样也可以使用默认值
  a: othera = 100,
  b: otherb
} = {
  a: undefined,
  b: "hello"
}
console.log(othera, otherb)

// 需要注意暂时性死区, 前者不可引用后面定义的值, 存在暂时性死区
// const { x = y, y } = { x: undefined, y: 2 }
const { x, y = x } = { x: 1, y: undefined }
console.log(x, y)

// 解构赋值对于函数的参数调用和返回值的解构JSON, 以及内置对象等都是有效的, 这里不再做阐述