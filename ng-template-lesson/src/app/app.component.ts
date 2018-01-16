import { Component, ViewChild } from '@angular/core';
import {ChildComponent} from './child.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('jbChildInstance') public firstJbChild: ChildComponent;

    public canBeNullButUsuallyDict: {[key: string]: any} | null = null; 

    public stamNumber: number = 10;
    public textInput: String = "";
    public twoWayBinding1: string = "first way of 2 way binding";
    public transferToChild: string = "we want to pass this to child";
    public groceries: string[] = [
        'Tofu',
        'Saten',
        'Soja Milk'
    ];
    public dateValueFromClass: Date = new Date();

    public cssClasses: {[key: string]: any} = {
        'active': false,
        'disabled': true,
        'angular': this.sayHello()
    }

    constructor() {
        setTimeout(() => {
            this.canBeNullButUsuallyDict = {'title': 'now we have title'}
        },2000);
    }

    public sayHello() {
      // this.stamNumber = 20;
      return "hello from class instance";
    }

    public createJbClass() {
      return "jb-class";
    }

    public viewEvent(event) {
      this.textInput = event.target.value;
      this.stamNumber = this.textInput.length;
    }

    public changeTwoWayBinding1(userInput: string) {
      this.twoWayBinding1 = userInput;
    }

    public popWhenToggleVisibility(isVisible: boolean) {
      console.log(isVisible);
    }

    public popAlert() {
        //alert('this is from ngSubmit');
        throw new Error("exception happened")
    }
}
