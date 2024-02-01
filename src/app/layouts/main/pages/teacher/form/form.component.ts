import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../teacher.component';

export interface TeacherForm {
  id?: FormControl,
  name: FormControl;
  profession: FormControl,
  lastname: FormControl;
  email: FormControl;
}

export const createTeacherForm = (teacher?: Teacher): TeacherForm => ({
  id: new FormControl(teacher?.id, Validators.required),
  name: new FormControl(teacher?.name, Validators.required),
  lastname: new FormControl(teacher?.lastname, Validators.required),
  email: new FormControl(teacher?.email, Validators.required),
  profession: new FormControl(teacher?.profession, Validators.required),
})

@Component({
  selector: 'app-teacher-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TeacherFormComponent {
  @Input() teacherForm!: FormGroup;
}
