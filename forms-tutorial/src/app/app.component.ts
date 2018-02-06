import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('usernameNgModel') public usernameNgModel: NgModel
  @ViewChild('ngFormInstance') public ngFormInstance: NgForm

  public username: string = '';
  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';

  public ngAfterViewInit(): void {
  }
}
