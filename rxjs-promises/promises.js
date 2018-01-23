"use strict";
/**
 * promise example
 */
var promise = new Promise(function (resolve, reject) {
    console.log('will run right away');
    setTimeout(function () {
        console.log('resolving the timeout');
        resolve('hello world');
    }, 1000);
});
var numberPromise = promise.then(function (msg) {
    console.log(msg);
    return msg.length;
}, function onrejeced() {
    console.log('this will be called when promise calls reject');
    //return 0;
});
// promise chaining
var Task = /** @class */ (function () {
    function Task() {
        this.title = '';
        this.description = '';
    }
    return Task;
}());
var serverPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            title: 'stam task',
            description: 'stam description'
        });
    }, 2000);
});
var taskPromise = serverPromise.then(function onfulfilled(json) {
    var task = new Task();
    task.title = json.title;
    task.description = json.description;
    return task;
});
// Promise Properties
// 1. promise is not lazy
// 2. promise can release one shout
// 3. async logic will run only once not for every subscriber 
