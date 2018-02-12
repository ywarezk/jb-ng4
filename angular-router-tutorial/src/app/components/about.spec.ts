/**
 * testing the about component
 */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core/src/debug/debug_node';

 describe('AboutComponent', () => {
    let aboutComponentFixture: ComponentFixture<AboutComponent>;

    const routerMock = {
        navigateByUrl: (url: string) => {}
    }

    // create the testing module
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
            providers: [
                {provide: Router, useValue: routerMock}
            ]
        });
        TestBed.compileComponents();
    }));

    // creating the about component
    beforeEach(async(() => {
        aboutComponentFixture = TestBed.createComponent(AboutComponent);
        aboutComponentFixture.detectChanges();
    }))

    it('testing that h1 is equal the right test', () => {
        const h1: DebugElement = aboutComponentFixture.debugElement.query(By.css('h1'));
        expect(h1.nativeElement.innerText).toBe('Hello about page');
    });

 })