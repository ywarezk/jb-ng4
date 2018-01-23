"use strict";
/**
 * rxjs
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var rxjs_1 = require("rxjs");
// observer
var exampleObserver = {
    next: function (msg) {
        console.log('do something when get a stream of event');
    },
    error: function () {
        console.log('when data stream close with error');
    },
    complete: function () {
        console.log('when data stream completes');
    }
};
// observable
var myIntervalObservable = Observable_1.Observable.create(function (observer) {
    console.log('my observable is now running');
    var counter = 0;
    var myIntervalId = setInterval(function () {
        if (counter < 4) {
            observer.next(counter);
        }
        else {
            observer.error("error accoured");
        }
        // observer.next(0);
        counter++;
    }, 1000);
    return function tearDownLogic() {
        console.log('Now cleaning the observable');
        clearInterval(myIntervalId);
    };
});
var firstSubscription = myIntervalObservable.subscribe(function next(counter) {
    console.log(counter);
}, function error() { }, function complete() { });
// observables are lazy
var secondSubscription = myIntervalObservable.subscribe(function next(counter) {
    console.log("I am the second listener: " + counter);
});
// observables will run for each observer
// observables are cancelable
// setTimeout(() => {
//     console.log('time to cancel the subscriptions');
//     firstSubscription.unsubscribe();
//     secondSubscription.unsubscribe();
// }, 4000);
// operators
// subject
var myNumberSubject = new rxjs_1.Subject();
myNumberSubject.next(1);
myNumberSubject.next(2);
myNumberSubject.next(3);
myNumberSubject.subscribe(function (num) {
    console.log(num);
});
