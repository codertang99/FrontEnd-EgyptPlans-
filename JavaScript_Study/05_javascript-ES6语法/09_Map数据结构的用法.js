/**
 * Map() 一种新的数据结构, 和对象有些许类似, 对象使用key是字符串形式的,而map可以对key进行直接对象存储而不是转换成字符串
 * 且不可重复, 判断原理也是和Set一致 === 和 Object.is()
 * map实例的成员函数
 * set(key, value), 根据key值设置value
 * get(key)根据key值返回, 返回是否成功获取
 * delete()根据key值删除, 返回是否成功删除
 * has() 根据key值判断是否存在
 * clear() 清空所有的map
 * size, 返回集合中的个数
 */

const m1 = new Map()
m1.set("1", "2").set(1, 3).set({}, 3).set([], 3)
console.log(m1.get("1"));
console.log(m1.delete("1"));
console.log(m1.has(1));
// console.log(m1.clear());
console.log(m1.size)
console.log(m1);

// 二维数组构造map, 还可以使用set来构造, 因为set也可以转换为数组
// 如果二维数组不符合格式即忽略或报错, 所以必须要符合格式
const m2 = new Map([[1, 2], [2, 3]])
console.log(m2);
const s = new Set([["1", "2"], ["3", "4"]])
console.log(new Map(s));  // 直接丢入set即可

// keys(), values(), entries(), forEach(), 遍历
// keys返回所有的key集合
for(const key of m2.keys()) {
  console.log(key);
}

// keys返回所有的value集合
for(const valus of m2.values()) {
  console.log(valus);
}
// entries集合
for(const [key, value] of m2) {
  console.log(key, value);
}
// forEach同时也可进行遍历
m2.forEach((item, key, map) => {
  console.log(item, key, map);
})

// map(), filter(), Array.from
// 可以利用以上数组的成员函数进行过滤等格式转换
// 所以要熟悉并利用好这些方法
const map = new Map([[1, 1], [2, 2], [3, 3]])
console.log(new Map([...map].map(([key, value]) => {
  return [key, value**2]
})));

console.log(new Map([...map].filter(([key, value]) => {
  return value >=2
})));

console.log(new Map(Array.from(map, ([key, value]) => {
  return [key, value**2]
})));


// Map 和 对象的相互转换
const mp = new Map([[1, 2], [3, 4], [5, 6]])
const map2Object = (map) => {
  const newObject = {}
  for(const [key, value] of map) {
    newObject[key] = value
  }
  return  newObject
}

console.log(map2Object(mp));

const obj = {
  1: 1,
  2: 2,
  3: 3
}
const obj2Map = (obj) => {
  const map = new Map()
  for(const key of Object.keys(obj)) {
    map.set(key, obj[key])
  }
  return map
}

console.log(obj2Map(obj));