import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditModalComponent } from './add-edit.component';

describe('AddEditModalComponent', () => {
  let component: AddEditModalComponent;
  let fixture: ComponentFixture<AddEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
