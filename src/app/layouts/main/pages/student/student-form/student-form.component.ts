import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  studentForm :FormGroup;

  @Output()
  studentSubmitted = new EventEmitter

  constructor(private fb:FormBuilder){
    this.studentForm = this.fb.group({
      id: this.fb.control('', Validators.required),
      name: this.fb.control('', Validators.required),
      lastname: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
    })
  }

  onSubmit(): void{
    this.studentSubmitted.emit(this.studentForm.value)
    console.log(this.studentForm.value)
  }
}
