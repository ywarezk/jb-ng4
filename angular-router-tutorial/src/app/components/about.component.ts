
import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'jb-about',
    template: `
        <h1>
            Hello about page
        </h1>
        <button (click)="gobackToHomepage();">
            Go bakc to homepage
        </button>
    `
})
export class AboutComponent {
    constructor(private _router: Router) {}
    
    public gobackToHomepage(): void {
        this._router.navigateByUrl('/');
    }
}