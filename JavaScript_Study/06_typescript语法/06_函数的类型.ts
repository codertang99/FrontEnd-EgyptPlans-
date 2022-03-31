// 可以这样设定函数参数和返回值
function f(str1: string, str2: string = "123"): string {
  return str1 + str2
}

// 可以通过函数的重载来进行类型的限定, 其实还是同一个函数
function f1(str: string, num: number): void;
function f1(str: string, str2: string);
function f1(num1: number, num2: number);
function f1(num: number, str: string);

function f1(str: any, str2: any): void {
  return null
}

f1(1, 2)

export{}