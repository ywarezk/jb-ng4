/**
 * include search form
 */

 import {Component} from '@angular/core';
import { Router } from '@angular/router';

 @Component({
    selector: 'jb-search',
    template: `
    <form>
        <label>Search</label>
        <input type="text" name="search" (input)="search($event);" />
    </form>
    `
 })
 export class SearchComponent {
    constructor(private _router: Router) {}

    public search(event: any) {
        const searchString: string = event.target.value;
        this._router.navigateByUrl(`/tasks?search=${searchString}`);
    }
 }