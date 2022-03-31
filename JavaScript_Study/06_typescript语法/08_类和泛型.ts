/**
 * ES中的类
 * class, constructor(), 方法注意是挂载在原型上
 * get set, extends, super, 属性
 */

/**
 * TS中的类加了类型的限制
 * public所有实例方法和派生类都可以访问
 * protected只能本身方法或派生类访问
 * private只能自身方法访问
 */
class Person {
  private _name: string;
  private _age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public set name(name) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public set age(age) {
    this._age = age;
  }

  public get age() {
    return this._age;
  }

}

class Student extends Person {
  protected _no: number;
  constructor(name: string, age: number, no: number) {
    super(name, age);
    this.no = no;
  }

  public get no(): number {
    return this._no;
  }

  public set no(no) {
    this._no = no;
  }

  public run(): void {
    console.log(`这个叫${this.name}, 年龄是${this.age}, 学号${this.no}, 在跑步`);
  }

}

const p1 = new Person("tang", 20);
const s1 = new Student("lucy", 22, 1001);
s1.run()
// protected修饰的方法或属性不能直接通过实例访问
// p1.name = 1


// 抽象类, 增加了面向对象的方式, 还可以通过泛型的方式来动态设置类型
abstract class Shape<T, E> {
  abstract type: T;
  abstract getResult(s1: T, s2: E): E
}