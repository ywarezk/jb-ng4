import { async, TestBed } from "@angular/core/testing";
import { TasksListComponent } from "./tasks-list.component";
import { SearchComponent } from "./search.component";
import { TaskService } from "../services/task.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router/src/router_state";

/**
 * testing the task list
 */

 describe('TaskListComponent', () => {

    const activatedRouteMock = {
        queryParamMap: Observable.of({
            get: (key: string) => 'john bryce'
        }) 
    }

    const httpMock = {
        get: (url: string) => {
            
        }
    }

    // configure testing module
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [TasksListComponent, SearchComponent],
            providers: [
                TaskService,
                {provide: ActivatedRoute, useValue: activatedRouteMock},

            ]
        })


    }));

 });