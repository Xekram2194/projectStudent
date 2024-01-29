import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { TeacherComponent } from './teacher.component';

@NgModule({
  declarations: [
    TeacherComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    TeacherComponent,
  ]
})
export class TeacherModule { }
