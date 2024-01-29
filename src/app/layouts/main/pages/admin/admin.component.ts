import { Component } from '@angular/core';

export interface Admin{
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string
}

type Column = { [key in keyof Admin]: string }

const admins: Admin[] = [
  { id: 1, name: 'Carlos', lastname: 'Perez', email: 'test@test.com',  password: '123456' , role: 'admin'},
  { id: 2, name: 'Andres', lastname: 'Sandia', email: 'test@test.com' , password: '123456', role: 'student'},
  { id: 3, name: 'Maria', lastname: 'Lopez', email: 'test@test.com' ,password: '123456', role: 'student' },
  { id: 4, name: 'Franco', lastname: 'Gutierrez', email: 'test@test.com' ,password: '123456', role: 'teacher' },
  { id: 5, name: 'Diana', lastname: 'Lopez', email: 'test@test.com', password: '123456' , role: 'teacher'},
]; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  colums: Column = {
    'id': 'id',
    'name': 'Name',
    'lastname': 'Lastname',
    'email': 'Email',
    'password': 'Password',
    'role': 'Role'

  }
  dataSource =admins
}
