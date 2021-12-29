import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private apiHttpService: ApiHttpService) {}

  getTasks() {
    return this.apiHttpService.get('/');
  }

  addTask(task: Task) {
    return this.apiHttpService.post('/', task);
  }

  editTask(task: Task, id: number) {
    return this.apiHttpService.put(`/${id}`, task);
  }

  deleteTask(id: number) {
    return this.apiHttpService.delete(`/${id}`);
  }
}
