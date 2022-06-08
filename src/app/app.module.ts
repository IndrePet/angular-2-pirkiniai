import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { TaskTypeStatsComponent } from './components/task-type-stats/task-type-stats.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'new', component: NewTaskComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    NewTaskComponent,
    TaskTypeStatsComponent,
    NavigationComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
