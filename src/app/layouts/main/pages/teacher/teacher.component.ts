import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Action, ToolbarService } from '../../../../shared/services/toolbar.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createTeacherForm } from './form/form.component';
import { ModalService } from '../../../../shared/services/modal.service';
import { Teacher, TeacherService } from '../../../../shared/services/teacher.service';
import { TableService } from '../../../../shared/services/table.service';

type Column = { [key in keyof Teacher]: string }

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
  dataSource: Teacher[] = [];
  teacherForm!: FormGroup;

  @ViewChild('formTemplate') formTemplate!: TemplateRef<any>;

  constructor(
    private toolbarService: ToolbarService,
    private modalService: ModalService,
    private tableService: TableService,
    private fb: FormBuilder,
    private teacherService: TeacherService,
  ) {
    this.teacherService.get().subscribe({
      next: (res) => {
        this.tableService.updateData(res);
      }
    })
  }

  handleAdd() {
    this.teacherForm = this.fb.group(createTeacherForm());
    this.modalService.openAddEditModal(
      'Teacher',
      'add',
      this.formTemplate,
      this.teacherForm,
      () => this.tableService.handleOnAdd(this.teacherService, this.teacherForm),
    );
  }

  handleEdit(row: Teacher) {
    this.teacherForm = this.fb.group(createTeacherForm(row));
    this.modalService.openAddEditModal(
      'Teacher',
      'edit',
      this.formTemplate,
      this.teacherForm,
      () => this.tableService.handleOnEdit(this.teacherService, this.teacherForm),
    );
  }

  handleDelete(row: Teacher) {
    this.tableService.handleOnDelete(this.teacherService, row.id!);
  }

  ngOnInit(): void {
    const actions: Action[] = [
      {
        label: 'Add New',
        icon: 'person_add',
        action: () => this.handleAdd(),
      },
    ];

    this.toolbarService.setToolbarActions(actions);
  }
}
