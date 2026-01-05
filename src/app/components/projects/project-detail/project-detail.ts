import { Component, inject, input } from '@angular/core';
import { ProjectService } from '../../../services/project-service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { switchMap } from 'rxjs';
import { ProgressBarModule } from 'primeng/progressbar';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';

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
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  projectId = input.required<string>();
  private projectId$ = toObservable(this.projectId);
  projectService = inject(ProjectService);
  private projectInfo$ = this.projectId$.pipe(
    switchMap((id) => this.projectService.getProject(id))
  );

  project = toSignal(this.projectInfo$, { initialValue: null });

  getSeverity(status: string) {
    if (status === 'active') {
      return 'info';
    } else if (status === 'paused') {
      return 'warn';
    } else {
      return 'success';
    }
  }

  getProgressColor(progress: number) {
    if (progress < 40) {
      return 'oklch(83.7% 0.128 66.29)';
    } else if (progress >= 40 && progress < 80) {
      return 'oklch(94.5% 0.129 101.54)';
    } else {
      return 'oklch(87.1% 0.15 154.449)';
    }
  }
}
