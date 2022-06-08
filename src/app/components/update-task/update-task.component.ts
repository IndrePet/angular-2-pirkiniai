import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  public index: number = 0;
  public name: string = '';
  public type: string = '';

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['taskNumber'];
    this.name = this.tasksService.tasks[this.index].name;
    this.type = this.tasksService.tasks[this.index].type;
  }

  public updateTask() {
    this.tasksService.updateTask(this.index, this.name, this.type);
    this.router.navigate(['/']);
  }
}
