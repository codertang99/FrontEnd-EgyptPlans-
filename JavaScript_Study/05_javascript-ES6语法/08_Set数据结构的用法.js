/**
 * Set() 一种新的数据结构, 和数组类似, 但是存取不可重复的值, 如果放入一样的值即不做改变
 * 内部如何比较? 普通值采用===比较, NaN采用Object.is()进行判断
 * set的几个实例函数
 * add()添加某个值同时返回自身
 * size()返回set集合中的个数
 * delete()删除某个值同时返回是否成功删除
 * has()判断某个值是否出现在集合中
 * clear()清空所有集合
 */

const set = new Set([1, 2, 3, 4])
set.add(5)
console.log(set);
console.log(set.size);
console.log(set.delete(1));
console.log(set);
console.log(set.has(3));
// console.log(set.clear());
console.log(set);

// 把set转换为array, 同时还可以利用set的特性进行数组的去重
console.log([...set])
console.log(Array.from(set))

// keys() values() entries() forEach()
// keys() 和 values() 都是返回值本身, 而entries()则同时返回
// 以下方法都可以对set进行遍历
for(const item of set.keys()) {
  console.log(item);
}

for(const item of set.values()) {
  console.log(item);
}

for(const item of set) {
  console.log(item);
}

set.forEach((item, value, set) => {
  console.log(item, value, set);
})

console.log("-------------------------------");

// map(), filter(), Array.from() 
// 这里可以使用数组的成员方法对Set数据进行来回转换
// 要好好利用这一特性, 实战很有用处
const newSet = new Set([...set].map((item) => {
  return item**2
}))
console.log(newSet);

const newSet2 = new Set([...newSet].filter((item) => {
  return item % 2 === 0
}))
console.log(newSet2);

const newSet3 = new Set(Array.from(newSet2, (item) => {
  return item**2
}))
console.log(newSet3);


// 应用场景
const s1 = new Set([1, 2, 3])
const s2 = new Set([2, 3, 4])
// 并集
console.log(new Set([...s1, ...s2]));

// 交集
console.log(new Set([...s1].filter(item => {
  return s2.has(item)
})));

// 差集
console.log(new Set([...s1].filter(item => {
  return !s2.has(item)
})));