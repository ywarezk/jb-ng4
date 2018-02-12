/**
 * routes for the app module\
 * 
 * separate app routing with app module
 */

 import {NgModule} from '@angular/core';
 import {RouterModule} from '@angular/router';
 import {HomeComponent} from '../components/home.component';
 import {AboutComponent} from '../components/about.component';
 import {Error404Component} from '../components/error404.component';

 @NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'tasks', loadChildren: '../../todo/todo.module#TodoModule'},
            {path: '**', component: Error404Component}
        ])
    ],
    exports: [RouterModule]
 })
 export class AppRoutingModule {

 }