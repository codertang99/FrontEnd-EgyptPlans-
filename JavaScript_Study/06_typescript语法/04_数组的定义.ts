// 定义一个string类型的数组
const arr: string[] = ["123", "!23"]

// 还可以利用泛型进行定义数组
const arr2: Array<number> = [1]
console.log(arr2)

function f1() {
  // 系统中内置的arguments类型
  const args: IArguments = arguments
}

// 还可以通过定义元组来实现一个数组中多种类型

const arr3: [string, number] = ["1", 2] // 这里定义的必须要符合元组中类型, 个数匹配, 也可以多于不过多出来的必须符合元组中类型

// 也可以通过interface定义一个类数组类型
interface IArray {
  [index: number]: string
}

const arr4: IArray = ["1", "2"]
console.log(arr4)