import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../../../../../shared/services/teacher.service';

export interface TeacherForm {
  id?: number,
  name: FormControl;
  profession: FormControl,
  lastname: FormControl;
  email: FormControl;
}

export const createTeacherForm = (teacher?: Teacher): TeacherForm => {
  const form: TeacherForm = {
    name: new FormControl(teacher?.name, Validators.required),
    lastname: new FormControl(teacher?.lastname, Validators.required),
    email: new FormControl(teacher?.email, Validators.required),
    profession: new FormControl(teacher?.profession, Validators.required),
  }
  if (teacher?.id !== undefined) {
    form.id = teacher.id
  }
  return form
}

@Component({
  selector: 'app-teacher-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TeacherFormComponent {
  @Input() teacherForm!: FormGroup;
}
