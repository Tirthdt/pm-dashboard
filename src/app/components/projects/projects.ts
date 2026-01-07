import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProjectService } from '../../services/project-service';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
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
  skeleton = Array.from({ length: 10 }, (_, i) => i);

  ngOnInit() {
    this.projectService.getProjects();
  }
}
