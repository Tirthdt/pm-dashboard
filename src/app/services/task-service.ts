import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { TASKS_MOCK } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  loading = signal<boolean>(false);
  tasks = signal<Task[]>([]);
  error = signal<string>('');

  getTasks() {
    this.loading.set(true);
    setTimeout(() => {
      this.tasks.set(TASKS_MOCK);
      this.loading.set(false);
    }, 3000);
  }
}
