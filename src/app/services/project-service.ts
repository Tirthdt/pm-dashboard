import { Injectable, signal } from '@angular/core';
import { PROJECTS_MOCK } from '../../data';
import { Project } from '../models/project.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  loading = signal<boolean>(false);
  projects = signal<Project[]>([]);
  error = signal<string>('');

  getProjects() {
    this.loading.set(true);
    setTimeout(() => {
      this.projects.set(PROJECTS_MOCK);
      this.loading.set(false);
    }, 2000);
  }

  getProject(projectId: string) {
    const project = PROJECTS_MOCK.find((p) => p.id === projectId);
    if (project) {
      return of(project).pipe(delay(1000));
    }
    return of(null);
  }

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

  getButtonLabel(status: string) {
    if (status === 'active') {
      return 'Pause project';
    } else if (status === 'paused') {
      return 'Resume project';
    } else {
      return 'Archieve project';
    }
  }
}
