/**
 * class 类的使用es6中的新构造函数的方式, 本质上还是es5的function构造函数方式
 * 有很多相同之处, 可以通过babel转换为es5, 其实就是语法糖
 */

/**
 * 需要注意的是, class方式没有函数提升, 不像ES5中的构造函数
 * 同时必须通过new调用, 否则报错, ES5中可以直接调用
 * 类中的方法即在类的原型中, prototype, 它是不可枚举的
 * 类可以直接通过字面量方式定义同时可以不写名字在class后, 如果有名字也只能在内部使用
 */
class Person {
  static a = 12313  // 同理可以挂载变量
  // 这里就相当于构造函数, new调用后立即执行
  _name = ""
  age = 0
  constructor(name, age) {
    this.name = name
    this.age = age
    this.say = this.say.bind({})
  }

  // 这里有点类似于Java中的get、set, 不想暴露真实变量通过getset访问
  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  // 此函数相当于es5中挂载在prototype上的函数, Person.prototype.say
  // 需要注意的是此函数可以在外调用的时候会缺失this指向, 如果需要使用到this可以在constructor绑定
  say(message) {
    console.log(this);
    // console.log(`${this.name} say ${message}`);
  }

  static run(a) {
    // run函数相当于直接在Person上挂载了run方法
    // 静态函数里面的this就相当于此函数本身
    console.log(this.name, a);
  }

}

const p = new Person("tang", 11)
console.log(p.name);
p.name = "iii"
console.log(p.name);
p.say(1)
Person.run(1)
console.log(Person.a);


/**
 * 这里的派生类继承自基类, 需要熟练理解ES5中function的原型链中的继承
 * 这里相当于new Student()同时借用Person的构造函数, 同时Person的实例指向Student的prototype
 * 即
 */
class Student extends Person {
  constructor(name, age, no) {
    // 如果存在继承关系派生类constructor中必须调用super不然没有this而且报错
    super(name, age)
    this.no = no
  }

  testify() {
    // super当作对象使用时, 如果调用获取是获取派生类的prototype上的值
    // super添加或修改值时, super当作当前实例的this
    super.i = 11
    console.log(this);
  }

}

// 这里是true
console.log(Object.getPrototypeOf(Student) === Person)
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype);
console.log(Student.prototype.__proto__ === Person.prototype);

new Student().testify()