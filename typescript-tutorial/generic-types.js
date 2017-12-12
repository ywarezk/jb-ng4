"use strict";
// function that returns length
// array, string, class that has length
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
function whatIsMyLength(hasLengthProperty) {
    return hasLengthProperty.length;
}
function whatIsMyLength2(hasLengthProperty) {
    return hasLengthProperty.length;
}
function whatIsMyLength3(hasLengthProperty) {
    return hasLengthProperty.length;
}
var Person = /** @class */ (function () {
    function Person(genericType) {
        this.genericType = genericType;
    }
    return Person;
}());
var personDemo = new Person('hello');
var personDemo2 = new Person('hello');
var User = /** @class */ (function () {
    function User() {
        this.firstName = '';
        this.lastName = '';
    }
    return User;
}());
var AppUser = /** @class */ (function (_super) {
    __extends(AppUser, _super);
    function AppUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatar = '';
        return _this;
    }
    return AppUser;
}(User));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    return UserService;
}());
var MyAppUserService = /** @class */ (function () {
    function MyAppUserService() {
    }
    return MyAppUserService;
}());
var myService = new UserService();
var myServiceCustomUser = new UserService();
//# sourceMappingURL=generic-types.js.map