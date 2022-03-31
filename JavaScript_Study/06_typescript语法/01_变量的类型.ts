/**
 * 变量的类型: string, boolean, number, null, undefined
 * void 可以是null或undefined
 */

const str: string = "hello"
const num: number = 123
const blo: boolean = true
const nul: null = null  // 被null限定只能是null
const und: undefined = undefined  // 被undefined限定也只能是undefined
const voi: void = null  // 既可以是null也可以是undefined
// voi = undefined
const ani: any = "" // 可以是任意类型的


// 联合类型, 表示可以是联合类型中的任意一个
let union: number | string = "123123";
union = 123123

// 如果这里不明确设定变量的类型, 系统会自动推断类型
const test = 1