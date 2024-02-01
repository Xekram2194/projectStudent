import { Injectable, TemplateRef } from '@angular/core';
import { AddEditModalComponent } from '../components/modal/add-edit/add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { FormService } from './form.service';
import { FormGroup } from '@angular/forms';

export type ModalAction = 'add' | 'edit'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog, private formService: FormService) { }

  openAddEditModal(
    title: string,
    action: ModalAction,
    formTemplate: TemplateRef<any>,
    form: FormGroup,
    handler: () => void,
  ) {
    switch (action) {
      case 'add': title = `Add ${title}`; break;
      case 'edit': title = `Edit ${title}`; break;
    }
    const dialogRef = this.dialog.open(AddEditModalComponent, {
      width: '500px',
      data: {
        title,
        formTemplate: formTemplate
      }
    });

    dialogRef.componentInstance.validate.subscribe(() => {
      this.formService.markFormGroupTouched(form);
      if (form.valid) {
        dialogRef.close();
        handler();
      }
    });

    dialogRef.afterClosed().subscribe(() => form.reset());
    dialogRef.backdropClick().subscribe(() => form.reset());
  }
}
