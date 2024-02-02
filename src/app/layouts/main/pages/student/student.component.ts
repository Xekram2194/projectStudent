import { Component } from '@angular/core';
import { TableService } from '../../../../shared/services/table.service';
import { Column } from '../../../../shared/components/table/table.component';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

const students: Student[] = [
  { id: 1, name: 'Carlos', lastname: 'Perez', email: 'test@test.com' },
  { id: 2, name: 'Andres', lastname: 'Sandia', email: 'test@test.com' },
  { id: 3, name: 'Maria', lastname: 'Lopez', email: 'test@test.com' },
  { id: 4, name: 'Franco', lastname: 'Gutierrez', email: 'test@test.com' }
  // { id: 5, name: 'Diana', lastname: 'Lopez', email: 'test@test.com' },
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  columns: Column<Student> = {
    'id': 'id',
    'name': 'First name',
    'lastname': 'Last name',
    'email': 'Email',
  };
  dataSource = students;

  constructor(private tableService: TableService) { }

  handleEdit(row: Student) {
    console.log('Edit clicked for row:', row);
  }

  handleDelete(row: Student) {
    console.log('Delete clicked for row:', row);
  }

  onStudentSubmitted(ev: Student): void {
    this.dataSource = [...this.dataSource, ev]
    this.tableService.updateData(this.dataSource)
  }

}
