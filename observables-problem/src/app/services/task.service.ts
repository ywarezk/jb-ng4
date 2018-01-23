import { Subject } from "rxjs/Subject";

/**
 * Service that will hold our todo tasks
 */

 export class TaskService {
     public tasks: string[] = [];
     public tasksSubject: Subject<string[]> = new Subject();

    public addTask(newTask: string) {
        this.tasks.push(newTask);
        this.tasksSubject.next(this.tasks);
    }

     /**
      * delete index element from tasks
      * @param index
      */
     public deleteItem(index: number) {
        const newTasks: string[] = [];
        for (let i=0; i<this.tasks.length; i++) {
            if (i === index) continue;
            newTasks.push(this.tasks[i]);
        }
        this.tasks = newTasks;
        this.tasksSubject.next(this.tasks);
     }
 }