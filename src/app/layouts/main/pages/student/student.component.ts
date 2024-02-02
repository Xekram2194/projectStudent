import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TableService } from '../../../../shared/services/table.service';
import { Column } from '../../../../shared/components/table/table.component';
import { Student, StudentService } from '../../../../shared/services/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createStudentForm } from './student-form/student-form.component';
import { ModalService } from '../../../../shared/services/modal.service';
import { Action, ToolbarService } from '../../../../shared/services/toolbar.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  columns: Column<Student> = {
    'id': 'id',
    'code' : 'Code',
    'name': 'First name',
    'lastname': 'Last name',
    'email': 'Email',
  };
  dataSource : Student[] = [];
  studentForm !: FormGroup;

  @ViewChild('formTemplate') formTemplate!: TemplateRef<Student>;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private tableService: TableService,
    private toolbarService: ToolbarService,
    private studentService: StudentService
    ) {
    this.studentService.get().subscribe({
      next: (res) => {
        this.tableService.updateData(res);
      }
    })
   }

   handleAdd() {
    this.studentForm = this.fb.group(createStudentForm());
    this.modalService.openAddEditModal(
      'Student',
      'add',
      this.formTemplate,
      this.studentForm,
      () => this.tableService.handleOnAdd(this.studentService, this.studentForm),
    );
  }
  handleEdit(row: Student) {
    this.studentForm = this.fb.group(createStudentForm(row));
    this.modalService.openAddEditModal(
      'Student',
      'edit',
      this.formTemplate,
      this.studentForm,
      () => this.tableService.handleOnEdit(this.studentService, this.studentForm),
    );
  }

  handleDelete(row: Student) {
    this.tableService.handleOnDelete(this.studentService, row.id!);
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
