import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public tasks: Task[] = [];
  constructor() {
    this.tasks.push(new Task('Išnešti šiukšles', 'Skubu'));
    this.tasks.push(new Task('Išvalyti kambarius', 'Rutininis'));
  }

  public addTask = (taskName: string, taskType: string) => {
    this.tasks.push(new Task(taskName, taskType));
  };
}
