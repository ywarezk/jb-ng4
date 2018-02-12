import {Component} from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router/src/shared';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'jb-tasks-list',
    template: `
    <jb-search></jb-search>
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

    constructor(private _taskService: TaskService, private _activateRoute: ActivatedRoute) {
        // this._taskService.getAllTasks().subscribe((tasks: Task[]) => {
        //     this.tasks = tasks;
        // })
        
        // this._activateRoute.queryParamMap.subscribe((map: ParamMap) => {
        //     const search: string = map.get('search') || undefined;
        //     this._taskService.getAllTasks(search).subscribe((tasks: Task[]) => {
        //         this.tasks = tasks;
        //     });
        // })

        // youtube problem
        this._activateRoute.queryParamMap
            //.map((map: ParamMap) => {return map.get('search')})
            .map((map: ParamMap) => map.get('search'))
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe((search: string) => {
                this._taskService.getAllTasks(search).subscribe((tasks: Task[]) => {
                    this.tasks = tasks;
                });
            });
    }

}