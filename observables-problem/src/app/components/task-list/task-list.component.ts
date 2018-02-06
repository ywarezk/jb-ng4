/**
 * component to display the list of tasks
 */

 import {Component} from '@angular/core';
import { TaskService } from '../../services/task.service';

 @Component({
    selector: 'jb-task-list',
    template: `
    <ul>
        <li *ngFor="let task of tasks; index as i">
            {{task}}
            <button (click)=deleteTask(i)>Delete</button>
        </li>
    </ul>
    `
 })
 export class TaskListComponent {
    public tasks: string[] = [];

    constructor(private _taskService: TaskService) {
        // _taskService.tasksSubject.subscribe((tasks: string[]) => {
        //     this.tasks = tasks;
        // });
        this.tasks = _taskService.tasks;
    }

    public deleteTask(index: number) {
        this._taskService.deleteItem(index);
    }
 }