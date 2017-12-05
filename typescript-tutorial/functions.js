function sayHello(message, stamNumber) {
    if (message === void 0) { message = 'hello world'; }
    return message.length;
}
// sayHello(10); // Error!
sayHello(undefined, 10);
sayHello();
sayHello('hello');
// sayHello(,10); // Error!
function whatIsThis() {
    console.log(this === global); // in browser this === window
}
function printThis() {
    "use strict";
    console.log(this);
}
whatIsThis();
printThis(); // in browser window will be printed
var dict = { 'a': printThis };
dict['a']();
// function Person(firstName: string) {
//     this.firstName = firstName;
//     this.age = 0;
//     this.birthday = function(){
//         // this is this of instance
//         setTimeout(function(){
//             this.age++;
//         }, 1000);
//     }
// }
function Person(firstName) {
    this.firstName = firstName;
    this.age = 0;
    this.birthday = function () {
        var _this = this;
        // this is this of instance
        setTimeout(function () {
            _this.age++;
        }, 1000);
    };
}
var yariv = new Person('yariv');
yariv.birthday();
setTimeout(function () {
    console.log(yariv.age);
}, 2000);
// 10 == "10" // true
// 10 === "10" // false
// !== 
