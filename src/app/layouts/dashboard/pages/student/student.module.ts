import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    StudentComponent,
    StudentFormComponent
  ],
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
