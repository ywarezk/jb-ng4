//import { Observable } from "rxjs/Observable";

/**
 * solving the youtube data stream problem
 */

declare var Rx: any;

Rx.Observable
.fromEvent(
     document.getElementById('search'),
     'input'
)
.map((event: any) => {
    return event.target.value;
})
.debounceTime(1000)
.distinctUntilChanged()
.subscribe((msg: string) => {
    console.log(msg);
});