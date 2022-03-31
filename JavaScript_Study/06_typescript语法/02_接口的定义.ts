// 接口通常用限定对象的类型
interface IMyObject {
  // readonly表示只读的, 一经赋值不可再修改
  readonly name: string;
  age: number; // 表示可选
  // 设置任意属性, 设置该属性, 可以设置符合该属性的对象,
  // 限定后其它属性必须要符合该类型即为它的子集
  [NameType: string]: number | string;
}

// 作用限定对象, 必须和接口中的对象名类型一致
const obj: IMyObject = {
  name: "tang",
  age: 12,
  a: 1
}
console.log(obj)
// 接口也可以定义函数
interface IFun {
  (a1: string, a2: number): void
}

const f1: IFun = (a1: string, a2: number) => {
  console.log(a1)
}

f1("1", 2)

export {}