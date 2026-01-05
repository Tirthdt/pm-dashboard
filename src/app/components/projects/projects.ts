import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProjectService } from '../../services/project-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { map, startWith } from 'rxjs';
import { Skeleton } from 'primeng/skeleton';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [TableModule, ButtonModule, TagModule, ProgressBarModule, Skeleton, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();

  skeleton = Array.from({ length: 6 });

  projects = toSignal(this.projects$, { initialValue: [] });

  loading = toSignal(
    this.projects$.pipe(
      map(() => false),
      startWith(true)
    ),
    { initialValue: true }
  );

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
