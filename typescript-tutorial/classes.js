"use strict";
// classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = '';
        this._age = 0;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.sayHello = function () {
        console.log("hello my name is: " + this.firstName);
    };
    Person.metaData = function () {
        console.log('this is class person');
    };
    return Person;
}());
var yariv = new Person('Yariv', 'Katz');
yariv.fullName;
yariv.age = 32;
Person.metaData();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, grade) {
        if (grade === void 0) { grade = 100; }
        var _this = _super.call(this, firstName, lastName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log('Im a student');
    };
    return Student;
}(Person));
var jbStudent = new Student('foo', 'bar');
var Pokemon = /** @class */ (function () {
    function Pokemon() {
    }
    return Pokemon;
}());
var pikachu = new Pokemon();
//# sourceMappingURL=classes.js.map