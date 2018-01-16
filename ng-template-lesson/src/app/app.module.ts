import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ChildComponent} from './child.component';
// import * as allExportedForms from "@angular/forms";
import {} from '@angular/common';
import { SnakePipe } from './pipes/snake.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SnakePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
