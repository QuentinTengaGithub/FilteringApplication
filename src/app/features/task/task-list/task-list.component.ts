/* Afficher la liste / Gérer les filtres */

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    //Le $ à la fin de tasks$ est une convention pour dire : cette variable contient un Observable
    
    this.tasks$ = this.taskService.getTasks();
  }
}
