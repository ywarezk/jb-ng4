/**
 * service helps communicate with task api
 */

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Task, ITask} from '../models/task';

import 'rxjs/add/operator/map';
import { HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class TaskService {
    constructor(private _httpService: HttpClient) {}

    public getAllTasks(): Observable<Task[]> {
        return this._httpService.get<ITask[]>('https://nztodo.herokuapp.com/api/task/?format=json', {
            observe: 'response',
            // headers: (new HttpHeaders()).set('Authorization', 'Hello world')
        })
            .map((res: HttpResponse<ITask[]>) => {
                // res.headers;
                // res.status;
                const result: Task[] = [];
                // json.date
                for (let singleJson of res.body) {
                    result.push(new Task(singleJson));
                }
                return result;
            })
    }

    public createTask(task: Task | ITask): Observable<Task> {
        return this._httpService.post<ITask>(
            'https://nztodo.herokuapp.com/api/task/', 
            {title: task.title, description: task.description, when: (new Date()).toISOString(), group: 'yariv'})
            .map((json: ITask) => new Task(json))
    }

    
}