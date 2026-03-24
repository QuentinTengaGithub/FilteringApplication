import { Routes } from '@angular/router';
import { TaskListComponent } from './features/task/task-list/task-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full'},
    { path: 'tasks', component: TaskListComponent},
    { path: 'tasks/:id', component: TaskListComponent}
];
