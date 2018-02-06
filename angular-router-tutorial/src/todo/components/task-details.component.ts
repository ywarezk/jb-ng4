import {Component} from '@angular/core';
import { Task } from '../models/task';

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
}