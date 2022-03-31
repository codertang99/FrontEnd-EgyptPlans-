// 可以通过type的方式给类型设置别名

// 这样设定一个联合类型
type TNumberorString = string | number

type TFunorvoid = (str1: string, str2: string) => string | void

// 多个类型也可以联合
type TNew = TFunorvoid | TNumberorString

const a: TNumberorString = 1
console.log(a)

export{}