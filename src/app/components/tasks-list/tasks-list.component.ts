import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  public tasks: Task[] = [];
  public taskName: string = '';
  public taskType: string = '';

  constructor() {
    this.tasks.push(new Task('Išnešti šiukšles', 'Skubu'));
    this.tasks.push(new Task('Išvalyti kambarius', 'Rutininis'));
  }

  ngOnInit(): void {}

  // public addTask = () => {
  //   this.tasks.push(new Task(this.taskName, this.taskType));
  //   console.log(this.tasks);
  // };
}
