import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppTableComponent } from './components/app-table/app-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    AppTableComponent,
  ],
})
export class SharedModule { }
