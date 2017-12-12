"use strict";
// promises
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
        // reject(new Error('stam error'));
    }, 2000);
});
myPromise.then(function success(msg) {
    console.log(msg);
}, function error(err) {
});
//# sourceMappingURL=promises.js.map