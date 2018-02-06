import {Component} from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
    selector: 'jb-tasks-list',
    template: `
    <ul>
        <li *ngFor="let task of tasks">
            <a [routerLink]="'/tasks/' + task.id">
                {{task.title}}
            </a>
        </li>
    </ul>
    `
})
export class TasksListComponent {
    public tasks: Task[] = [];

    constructor(private _taskService: TaskService) {
        this._taskService.getAllTasks().subscribe((tasks: Task[]) => {
            this.tasks = tasks;
        })
    }

}