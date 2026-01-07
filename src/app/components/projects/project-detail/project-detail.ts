import { Component, computed, inject, input } from '@angular/core';
import { ProjectService } from '../../../services/project-service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TaskListing } from '../../tasks/task-listing/task-listing';

@Component({
  selector: 'app-project-detail',
  imports: [
    UpperCasePipe,
    ProgressBarModule,
    TagModule,
    ButtonModule,
    DividerModule,
    AvatarGroupModule,
    AvatarModule,
    DatePipe,
    CardModule,
    TaskListing,
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  projectId = input.required<string>();
  projectService = inject(ProjectService);
  project = computed(() =>
    this.projectService.projects().find((project) => project.id === this.projectId())
  );
}
