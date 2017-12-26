/**
 * Directive change background color
 * <input jb-background /> // change the background color on the input
 */

 import {Directive, ElementRef} from "@angular/core";

 @Directive({
     selector: "[jb-background]"
 })
 export class BackgroundDirective {
    constructor(element: ElementRef) {
        element.nativeElement.style.backgroundColor = 'red';
    }
 }