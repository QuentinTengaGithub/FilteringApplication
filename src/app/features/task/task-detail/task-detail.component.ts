/* Afficher une tâche */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  @Input() task: Task | null = null;
}
