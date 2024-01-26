import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { StudentModule } from './pages/student/student.module';
import { TeacherModule } from './pages/teacher/teacher.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StudentModule,
    TeacherModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
