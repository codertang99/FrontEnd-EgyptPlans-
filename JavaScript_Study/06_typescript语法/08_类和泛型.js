/**
 * ES中的类
 * class, constructor(), 方法注意是挂载在原型上
 * get set, extends, super, 属性
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * TS中的类加了类型的限制
 * public所有实例方法和派生类都可以访问
 * protected只能本身方法或派生类访问
 * private只能自身方法访问
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, no) {
        var _this = _super.call(this, name, age) || this;
        _this.no = no;
        return _this;
    }
    Object.defineProperty(Student.prototype, "no", {
        get: function () {
            return this._no;
        },
        set: function (no) {
            this._no = no;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.run = function () {
        console.log("\u8FD9\u4E2A\u53EB" + this.name + ", \u5E74\u9F84\u662F" + this.age + ", \u5B66\u53F7" + this.no + ", \u5728\u8DD1\u6B65");
    };
    return Student;
}(Person));
var p1 = new Person("tang", 20);
var s1 = new Student("lucy", 22, 1001);
s1.run();
// protected修饰的方法或属性不能直接通过实例访问
// p1.name = 1
