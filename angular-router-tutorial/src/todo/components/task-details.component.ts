import {Component} from '@angular/core';
import { Task } from '../models/task';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
    selector: 'jb-task-details',
    template: `
    <div>
        <p>
            <strong>Title:</strong> {{task.title}}
        </p>
        <p>
            <strong>description:</strong> {{task.description}}
        </p>
    </div>
    `
})
export class TaskDetailsComponent {
    public task: Task = null;

    constructor(private _activatedRoute: ActivatedRoute, private _taskService: TaskService) {
        this._activatedRoute.paramMap.subscribe((map: ParamMap) => {
            const id: string = map.get('id');
            this._taskService.getSingleTask(id).subscribe((task: Task) => {
                this.task = task;
            })
        })
    }
}