import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { StudentModule } from './pages/student/student.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StudentModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
