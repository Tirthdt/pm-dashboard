import { Component, computed, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { TaskService } from '../../../services/task-service';
import { TaskCard } from '../task-card/task-card';
import { SkeletonModule } from 'primeng/skeleton';
import { UpperCasePipe } from '@angular/common';
import { Task } from '../../../models/task.model';

export type TaskStatus = 'backlog' | 'in progress' | 'verify' | 'completed';

@Component({
  selector: 'app-task-listing',
  imports: [DividerModule, TagModule, AvatarModule, SkeletonModule, TaskCard, UpperCasePipe],
  templateUrl: './task-listing.html',
  styleUrl: './task-listing.css',
})
export class TaskListing {
  taskStatus: string[] = ['Backlog', 'In Progress', 'Verify', 'Completed'];
  taskService = inject(TaskService);

  backlogTasks = computed(() => {
    return this.taskService.tasks().filter((task) => task.status === 'backlog');
  });
  inProgressTasks = computed(() => {
    return this.taskService.tasks().filter((task) => task.status === 'in progress');
  });
  verifyTasks = computed(() => {
    return this.taskService.tasks().filter((task) => task.status === 'verify');
  });
  completedTasks = computed(() => {
    return this.taskService.tasks().filter((task) => task.status === 'completed');
  });

  ngOnInit() {
    this.taskService.getTasks();
  }
}
