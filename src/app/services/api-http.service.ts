import { Task } from './../Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  constructor(private http: HttpClient) {}
  address: 'https://60a0e51dd2855b00173b15c9.mockapi.io/todolist' | undefined;
  public get(url: string, options?: any): Observable<any> {
    return this.http.get(this.address + url, options);
  }

  public post(url: string, task: Task) {
    return this.http.post(this.address + url, task);
  }

  public put(url: string, task: Task | Partial<Task>) {
    return this.http.put(this.address + url, task);
  }

  public delete(url: string) {
    return this.http.delete(this.address + url);
  }
}
