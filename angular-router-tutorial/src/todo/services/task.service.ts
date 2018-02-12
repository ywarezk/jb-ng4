import { Observable } from "rxjs/Observable";
import { Task, ITask } from "../models/task";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

    constructor(private _http: HttpClient) {}

    public getAllTasks(search: string = ''): Observable<Task[]> {
        return this._http.get<ITask[]>(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)
            .map((json: ITask[]) => {
                return json.map((arrItem: ITask) => { return new Task(arrItem)});
            });
    }

    public getSingleTask(id: number | string): Observable<Task> {
        return this._http.get<ITask>(`https://nztodo.herokuapp.com/api/task/${id}/?format=json`)
            .map((json: ITask) => {
                return new Task(json);
            });
    }

}