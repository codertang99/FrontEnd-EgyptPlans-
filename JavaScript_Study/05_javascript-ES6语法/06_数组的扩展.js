// map() 将数组每一项遍历, 返回修改格式后的新数组
const arr = [1, 2, 3, 4, 5]
console.log(arr.map((item, index, arr) => {
  return item ** 2
}));

const a = [1, 2, 3]
const b = [4, 5, 6]
// 数组的展开, 而且只能当作变量的最后一个, 同理这里对字符串也有效, 对实现了iterator接口的
console.log([...a, ...b]);
// Array.prototype.push.call(a, ...b)
[].push.apply(a, b)
console.log(a);


// Array.from() 通常将类数组转换为数组
// 可以传入2, 3参数, 传入map函数回调进行映射格式转换, 绑定this指向
const c = {
  0: '1',
  1: '2',
  2: '3',
  length: 3
}
console.log(c)

console.log(Array.from(c))
console.log(Array.prototype.slice.call(c))
console.log([].slice.call(c))

// Array.of() 把零散的数转换为数组
console.log(Array.of(1, 2, 3, 4))

// find, findIndex
const d = [1, 2, 3, 4, -1]

// find找到第一个符合条件的值, findIndex找到第一个符合条件的下标
console.log(d.find((item, index, arr) => {
  console.log(this)
  return item > 0
}, {})) // 同时还可以绑定this

// Object.is() 判断是否是某个值
// 还可以判断NaN
console.log(Object.is(123, 123))
console.log(Object.is(NaN, NaN))

// Array.fill(填充的数值, 开始位置, 结束位置同时不包含它)
const arrs = new Array(5)
console.log(arrs.fill(1, 1, 5)) 

// entries keys values
console.log(arrs.entries()) // 返回对应Iterate接口
for(const [index, item] of arrs.entries()) {
  console.log(index, item)
}

for(const index of arrs.keys()) {
  console.log(index)
}

for(const item of arrs.values()) {
  console.log(item)
}

const iterator = arrs.entries()

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

// 数组的includes方式, 判断数组中是否包含某个值, 可以判断NaN
console.log(arrs.includes(undefined))