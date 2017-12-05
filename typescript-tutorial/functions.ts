declare var global: any;

function sayHello(message: string = 'hello world', stamNumber?: number): number {
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
    "use strict"
    console.log(this);
}

whatIsThis();

printThis(); // in browser window will be printed

let dict = {'a': printThis};

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

function Person(firstName: string) {
    this.firstName = firstName;
    this.age = 0;

    this.birthday = function(){
        // this is this of instance
        setTimeout(() => {
            this.age++;
        }, 1000);
    }
}

const yariv = new Person('yariv');
yariv.birthday();
setTimeout(function() {
    console.log(yariv.age);
}, 2000);


// 10 == "10" // true
// 10 === "10" // false
// !==