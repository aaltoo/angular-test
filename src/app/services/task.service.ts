import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(apiHttpService: ApiHttpService) {}

  getTasks(): Observable<Task[]> {
    const tasks = of(ApiHttpService.get());
    return tasks;
  }

  addTask(task: Task): Observable<Task[]> {
    const tasks = of([...TASKS, task]);
    return tasks;
  }
}
