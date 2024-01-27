import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AdminComponent]
  
})
export class AdminModule { }
