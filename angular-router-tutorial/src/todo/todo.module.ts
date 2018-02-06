import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { TasksListComponent } from './components/tasks-list.component';
import { TaskDetailsComponent } from './components/task-details.component';

@NgModule({
    declarations: [
        TasksListComponent,
        TaskDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [TaskService]
})
export class TodoModule {

}