import { Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProjectService } from '../../services/project-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { map, startWith } from 'rxjs';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-projects',
  imports: [TableModule, ButtonModule, TagModule, ProgressBarModule, Skeleton],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
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

  tableData = computed(() => (this.loading() ? this.skeleton : this.projects()));

  getSeverity(status: string) {
    if (status === 'active') {
      return 'info';
    } else if (status === 'paused') {
      return 'warn';
    } else {
      return 'success';
    }
  }
}
