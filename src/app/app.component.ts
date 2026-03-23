import { Component } from '@angular/core';
import { TaskListComponent } from './features/task/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-technique-chatgpt';
}
