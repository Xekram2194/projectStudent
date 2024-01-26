import { Component } from '@angular/core';
export interface Teacher {
  id: number;
  name: string;
  profession: string,
  lastname: string;
  email: string;
}

const teachers: Teacher[] = [
  { id: 1, profession: 'Engineer', name: 'Carlos', lastname: 'Perez', email: 'test@test.com' },
  { id: 2, profession: 'Engineer', name: 'Andres', lastname: 'Sandia', email: 'test@test.com' },
  { id: 3, profession: 'Engineer', name: 'Maria', lastname: 'Lopez', email: 'test@test.com' },
  { id: 4, profession: 'Engineer', name: 'Franco', lastname: 'Gutierrez', email: 'test@test.com' },
  { id: 5, profession: 'Engineer', name: 'Diana', lastname: 'Lopez', email: 'test@test.com' },
];
type allKeys = keyof Teacher;
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  columns: (keyof Teacher)[] = ['id', 'name', 'profession', 'lastname', 'email'];
  dataSource = teachers;

  handleEdit(row: Teacher) {
    console.log('Edit clicked for row:', row);
    console.log()
  }

  handleDelete(row: Teacher) {
    console.log('Delete clicked for row:', row);
  }
}
