/**
 * rxjs
 */

import {Observer} from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {Subject} from 'rxjs';

 // observer

const exampleObserver: Observer<string> = {
    next: (msg: string) => {
        console.log('do something when get a stream of event')
    },
    error: () => {
        console.log('when data stream close with error');
    },
    complete: () => {
        console.log('when data stream completes');
    }
}

// observable

const myIntervalObservable: Observable<number> = Observable.create((observer: Observer<number>) => {
    console.log('my observable is now running');
    let counter = 0;
    let myIntervalId = setInterval(() => {
        if (counter < 4) {
            observer.next(counter);
        } else {
            observer.error("error accoured");
        }
        
        // observer.next(0);
        counter++;
    }, 1000);

    return function tearDownLogic() {
        console.log('Now cleaning the observable');
        clearInterval(myIntervalId);
    }
});

const firstSubscription: Subscription = myIntervalObservable.subscribe(
    function next(counter: Number) {
        console.log(counter);
    },
    function error() {},
    function complete() {}
)

// observables are lazy

const secondSubscription: Subscription = myIntervalObservable.subscribe(
    function next(counter: Number) {
        console.log(`I am the second listener: ${counter}`);
    }
);

// observables will run for each observer

// observables are cancelable

// setTimeout(() => {
//     console.log('time to cancel the subscriptions');
//     firstSubscription.unsubscribe();
//     secondSubscription.unsubscribe();
// }, 4000);


// operators

// subject

const myNumberSubject: Subject<number> = new Subject();

myNumberSubject.next(1);
myNumberSubject.next(2);
myNumberSubject.next(3);

myNumberSubject.subscribe((num: number) => {
    console.log(num);
});

