/* Afficher la liste / Gérer les filtres */

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { CommonModule } from '@angular/common';

type TaskFilter = 'all' | 'completed' | 'pending';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule, TaskDetailComponent ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: Task[] = [];
  currentFilter: TaskFilter = 'all';
  selectedTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //Le $ à la fin de tasks$ est une convention pour dire : cette variable contient un Observable
    
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  setFilter(filter: TaskFilter): void {
    this.currentFilter = filter;
  }

  get filteredTasks(): Task[] {
    switch (this.currentFilter) {
      case 'completed':
        return this.tasks.filter(task => task.completed);
      case 'pending':
        return this.tasks.filter(task => !task.completed);
      default:
        return this.tasks;
    }
  }

  selectTask(task: Task): void {
    this.selectedTask = task;
  }
}
