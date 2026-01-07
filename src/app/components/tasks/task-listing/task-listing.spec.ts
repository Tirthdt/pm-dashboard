import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListing } from './task-listing';

describe('TaskListing', () => {
  let component: TaskListing;
  let fixture: ComponentFixture<TaskListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
