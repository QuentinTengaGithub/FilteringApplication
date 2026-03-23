/* Appeler l'API / Centraliser les données */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    console.log('Appel API lancé');
    return this.http.get<Task[]>(this.apiUrl);
  }
}
