import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stamNumber: number = 10;
  public textInput: String = "";
  public twoWayBinding1: string = "first way of 2 way binding";
  public transferToChild: string = "we want to pass this to child";

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
}
