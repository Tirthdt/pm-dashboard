import { Component, input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { DatePipe } from '@angular/common';

type TaskCardType = Pick<Task, 'name' | 'dueDate' | 'component'>;

@Component({
  selector: 'app-task-card',
  imports: [AvatarModule, TagModule, DatePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  task = input<TaskCardType>();
}
