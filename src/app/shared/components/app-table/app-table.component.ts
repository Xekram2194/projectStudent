import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrl: './app-table.component.scss'
})
export class AppTableComponent {
  @Input() columns: string[] = [];
  @Input() dataSource: any[] = [];
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort) sort!: MatSort;

  tableDataSource!: MatTableDataSource<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
    this.tableDataSource.sort = this.sort;
    this.changeDetectorRef.detectChanges();
    console.log(typeof this.onEdit)
  }
}
