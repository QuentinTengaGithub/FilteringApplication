/* Afficher la liste / Gérer les filtres */

import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

type TaskFilter = 'all' | 'completed' | 'pending';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule, TaskDetailComponent ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  currentFilter: TaskFilter = 'all';
  selectedTaskId: number | null = null;

  constructor(
    private taskService: TaskService, 
    private router: Router,
    private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
      this.taskService.getTasks().subscribe((data) => {
        this.tasks = data;
      });
  
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        this.selectedTaskId = id ? Number(id) : null;
      });
    }

  setFilter(filter: TaskFilter): void {
    this.currentFilter = filter;
    //this.selectedTask = null;
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
    if (this.selectedTaskId === task.id) {
      this.router.navigate(['/tasks']);
    } else {
      this.router.navigate(['/tasks', task.id]);
    }
  }

  isSelected(task: Task): boolean {
    return this.selectedTaskId === task.id;
  }
}
