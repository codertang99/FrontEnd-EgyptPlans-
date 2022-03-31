// 可以通过type来定义字面量类型, 用作限定确定取值
type IWord = "left" | "center" | "right";

const a: IWord = "center"

function f1(str: IWord): void {
  console.log(str)
}

f1("center")