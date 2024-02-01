import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditModalComponent {
  @Output() validate = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<AddEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  saveData() {
    this.validate.emit();
  }

  closeModal() {
    this.dialogRef.close(false);
  }
}
