import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-type-stats',
  templateUrl: './task-type-stats.component.html',
  styleUrls: ['./task-type-stats.component.css'],
})
export class TaskTypeStatsComponent implements OnInit {
  public skubiosCount: number = 0;
  public rutininesCount: number = 0;
  public neskubiosCount: number = 0;
  public ypacSkubiosCount: number = 0;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    console.log(this.tasksService);

    this.initStats();

    this.tasksService.onTaskChange.subscribe(() => {
      this.initStats();
    });
  }

  public initStats() {
    this.skubiosCount = 0;
    this.rutininesCount = 0;
    this.neskubiosCount = 0;
    this.ypacSkubiosCount = 0;

    this.tasksService.tasks.forEach((task) => {
      switch (task.type) {
        case 'Skubus':
          this.skubiosCount++;
          break;
        case 'Neskubus':
          this.neskubiosCount++;
          break;
        case 'Rutininis':
          this.rutininesCount++;
          break;
        case 'Ypač skubus':
          this.ypacSkubiosCount++;
          break;
      }
    });
  }
}
