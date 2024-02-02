import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../../shared/services/student.service';

export interface StudentForm {
  id?: number,
  code: FormControl;
  name: FormControl;
  lastname: FormControl;
  email: FormControl;
}

export const createStudentForm = (student?: Student): StudentForm => {
  const form: StudentForm = {
    code: new FormControl(student?.code, [Validators.required]),
    name: new FormControl(student?.name, [Validators.required]),
    lastname: new FormControl(student?.lastname, [Validators.required]),
    email: new FormControl(student?.email, [Validators.required])
  }
  if (student?.id !== undefined) {
    form.id = student.id
  }
  return form
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  @Input() studentForm!:FormGroup;
}
