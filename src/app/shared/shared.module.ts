import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TableComponent } from './components/table/table.component';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './components/modal/confirmation/confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    TableComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TableComponent,
  ],
})
export class SharedModule { }
