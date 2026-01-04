import { Injectable } from '@angular/core';
import { PROJECTS_MOCK } from '../../data';
import { Project } from '../models/project.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS_MOCK).pipe(delay(2000));
  }
}
