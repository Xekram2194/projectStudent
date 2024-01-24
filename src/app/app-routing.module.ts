import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './layouts/dashboard/pages/teacher/teacher.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AdminComponent } from './layouts/dashboard/pages/admin/admin.component';
import { StudentComponent } from './layouts/dashboard/pages/student/student.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'admin', component: AdminComponent, title: 'Admin' },
  { path: 'teacher', component: TeacherComponent, title: 'Teachers' },
  { path: 'student', component: StudentComponent, title: 'Students' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
