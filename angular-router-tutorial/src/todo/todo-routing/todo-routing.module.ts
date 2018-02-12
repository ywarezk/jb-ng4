/**
 * this module holds the route configuration for the todo module
 */

 import {NgModule} from '@angular/core';
 import {RouterModule} from '@angular/router';
import { TasksListComponent } from '../components/tasks-list.component';
import { TaskDetailsComponent } from '../components/task-details.component';

 @NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: TasksListComponent},
            {path: ':id', component: TaskDetailsComponent}
        ])
    ],
    exports: [RouterModule]
 })
 export class TodoRoutingModule {

 }