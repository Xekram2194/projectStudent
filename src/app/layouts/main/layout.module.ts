import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout.component';
import { StudentModule } from './pages/student/student.module';
import { TeacherModule } from './pages/teacher/teacher.module';
import { AdminModule } from './pages/admin/admin.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../../app-routing.module';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ToolbarComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    StudentModule,
    TeacherModule,
    AdminModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
