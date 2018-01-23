"use strict";
//import { Observable } from "rxjs/Observable";
Rx.Observable
    .fromEvent(document.getElementById('search'), 'input')
    .map(function (event) {
    return event.target.value;
})
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe(function (msg) {
    console.log(msg);
});
