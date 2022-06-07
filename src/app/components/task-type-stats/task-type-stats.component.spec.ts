import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeStatsComponent } from './task-type-stats.component';

describe('TaskTypeStatsComponent', () => {
  let component: TaskTypeStatsComponent;
  let fixture: ComponentFixture<TaskTypeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTypeStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTypeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
