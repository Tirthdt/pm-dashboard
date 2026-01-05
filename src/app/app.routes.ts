import { Routes } from '@angular/router';
import { App } from './app';
import { Projects } from './components/projects/projects';
import { ProjectDetail } from './components/projects/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: App,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'projects/:projectId',
    component: ProjectDetail,
  },
];
