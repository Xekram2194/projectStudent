import { Component } from '@angular/core';
import { Action, ToolbarService } from '../../../../shared/services/toolbar.service';

export interface Teacher {
  id: number;
  name: string;
  profession: string,
  lastname: string;
  email: string;
}

type Column = { [key in keyof Teacher]: string }

const teachers: Teacher[] = [
  { id: 1, profession: 'Engineer', name: 'Carlos', lastname: 'Perez', email: 'test@test.com' },
  { id: 2, profession: 'Engineer', name: 'Andres', lastname: 'Sandia', email: 'test@test.com' },
  { id: 3, profession: 'Engineer', name: 'Maria', lastname: 'Lopez', email: 'test@test.com' },
  { id: 4, profession: 'Engineer', name: 'Franco', lastname: 'Gutierrez', email: 'test@test.com' },
  { id: 5, profession: 'Engineer', name: 'Diana', lastname: 'Lopez', email: 'test@test.com' },
];

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  columns: Column = {
    'id': 'id',
    'profession': 'Profession',
    'name': 'First name',
    'lastname': 'Last name',
    'email': 'Email',
  };
  dataSource = teachers;

  constructor(private toolbarService: ToolbarService) { }

  handleEdit(row: Teacher) {
    console.log('Edit clicked for row:', row);
  }

  handleDelete(row: Teacher) {
    console.log('Delete clicked for row:', row);
  }

  ngOnInit(): void {
    const actions: Action[] = [
      {
        label: 'Add New',
        icon: 'person_add',
        action: () => {
          console.log('Add New clicked!');
        },
      },
    ];

    this.toolbarService.setToolbarActions(actions);
  }
}
