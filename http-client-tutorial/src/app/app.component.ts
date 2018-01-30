import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public tasks: Task[] = [];

  constructor(private _taskService: TaskService) {
    _taskService.getAllTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    }, (err: HttpErrorResponse) => {
      if (typeof err.error === 'string') {
        console.error('server returned bad response');
      } else {
        console.error('server didnt event get the request');
      }
    });
  }

}
