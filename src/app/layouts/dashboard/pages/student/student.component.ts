import { Component } from '@angular/core';

export interface studentData {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

const ELEMENT_DATA: studentData[] = [
  {id:1,name:'Carlos',lastname:'Perez',email:'test@test.com'},
  {id:2,name:'Andres',lastname:'Sandia',email:'test@test.com'},
  {id:3,name:'Maria',lastname:'Lopez',email:'test@test.com'},
  {id:4,name:'Franco',lastname:'Gutierrez',email:'test@test.com'},
  {id:5,name:'Diana',lastname:'Lopez',email:'test@test.com'},
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email'];
  dataSource = ELEMENT_DATA;
}
