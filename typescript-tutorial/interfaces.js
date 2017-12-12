"use strict";
// {firstName: ..., lastName: ...}
var dict = { firstName: 'yariv', lastName: 'katz' };
var dict2 = { firstName: '', lastName: '' };
var Person = /** @class */ (function () {
    function Person() {
        this.lastName = '';
    }
    return Person;
}());
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.sayHello = function () {
        console.log('hello');
    };
    return Person2;
}());
//# sourceMappingURL=interfaces.js.map