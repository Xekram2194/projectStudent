import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Action, ToolbarService } from '../../../../shared/services/toolbar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditModalComponent, ModalAction } from '../../../../shared/components/modal/add-edit/add-edit.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createTeacherForm } from './form/form.component';

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
  teacherForm: FormGroup;

  @ViewChild('formTemplate') formTemplate!: TemplateRef<any>;

  constructor(private toolbarService: ToolbarService,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.teacherForm = this.fb.group(createTeacherForm());
  }

  openAddEditModal(action: ModalAction, handler: () => void) {
    let title = '';
    switch (action) {
      case 'add': title = 'Add Teacher'; break;
      case 'edit': title = 'Edit Teacher'; break;
    }
    const dialogRef = this.dialog.open(AddEditModalComponent, {
      width: '500px',
      data: {
        title,
        formTemplate: this.formTemplate
      }
    });

    dialogRef.componentInstance.validate.subscribe(() => {
      if (this.teacherForm.valid) {
        dialogRef.close();
        handler();
      }
    });

    dialogRef.backdropClick().subscribe(() => this.teacherForm.reset());
  }

  handleAdd() {
    this.openAddEditModal('add', () => console.log('Add clicked'));
  }

  handleEdit(row: Teacher) {
    this.openAddEditModal('edit', () => console.log('Edit clicked for row:', row));
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
          this.handleAdd()
        },
      },
    ];

    this.toolbarService.setToolbarActions(actions);
  }
}
