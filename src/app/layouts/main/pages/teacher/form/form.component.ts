import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface TeacherForm {
  id?: FormControl,
  name: FormControl;
  profession: FormControl,
  lastname: FormControl;
  email: FormControl;
}

export const createTeacherForm = (): TeacherForm => ({
  id: new FormControl('', Validators.required),
  name: new FormControl('', Validators.required),
  lastname: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  profession: new FormControl('', Validators.required),
})

@Component({
  selector: 'app-teacher-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TeacherFormComponent {
  @Input() teacherForm!: FormGroup;
}
