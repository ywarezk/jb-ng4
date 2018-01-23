/**
 * component to display a form to create a new task
 */

 import {Component} from '@angular/core';
import { TaskService } from '../../services/task.service';

 @Component({
    selector: 'jb-task-form',
    template: `
        <form (ngSubmit)="addTask()">
            <div class="form-group">
                <label>Task Title</label>
                <input type="text" name="title" class="form-control" [(ngModel)]="taskTitle" />
            </div>
            <div class="form-group">
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    `
 })
 export class TaskFormComponent {
    public taskTitle: string = '';

    constructor(private _taskService: TaskService) {}

    /**
     * add a new task to the service array
     */
    public addTask() {
        this._taskService.addTask(this.taskTitle);
    }
 }