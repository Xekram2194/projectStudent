import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './layouts/main/pages/teacher/teacher.component';
import { AdminComponent } from './layouts/main/pages/admin/admin.component';
import { StudentComponent } from './layouts/main/pages/student/student.component';
import { DashboardComponent } from './layouts/main/pages/dashboard/dashboard.component';

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
