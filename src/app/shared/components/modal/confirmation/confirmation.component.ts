import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Dialog {
  title: string,
  message: string,
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationDialogComponent {
  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog,
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirmed(): void {
    this.dialogRef.close(true);
  }
}
