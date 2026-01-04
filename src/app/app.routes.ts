import { Routes } from '@angular/router';
import { App } from './app';
import { Projects } from './components/projects/projects';

export const routes: Routes = [
  {
    path: '',
    component: App,
  },
  {
    path: 'projects',
    component: Projects,
  },
];
