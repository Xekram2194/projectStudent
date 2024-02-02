import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { TeacherComponent } from './teacher.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherFormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TeacherComponent,
    TeacherFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    TeacherComponent,
  ]
})
export class TeacherModule { }
