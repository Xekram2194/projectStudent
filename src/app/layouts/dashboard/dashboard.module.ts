import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { StudentModule } from './pages/student/student.module';
import { TeacherModule } from './pages/teacher/teacher.module';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StudentModule,
    TeacherModule,
    AdminModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
