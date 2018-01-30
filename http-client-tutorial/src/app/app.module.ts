import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskService } from './services/task.service';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlankInterceptor } from './interceptors/blank.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions()
  ],
  providers: [
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BlankInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
