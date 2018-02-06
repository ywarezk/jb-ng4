import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { Error404Component } from './components/error404.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'about', component: AboutComponent},
    //   {path: '**', component: Error404Component}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
