import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrl: './app-table.component.scss'
})
export class AppTableComponent {
  @Input() showNumeration = true;
  @Input() hiddenColumns: string[] = [''];
  @Input() columnMappings: { [key: string]: string } = {};
  @Input() dataSource: any[] = [];
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatSort) sort!: MatSort;

  tableDataSource!: MatTableDataSource<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  get columns(): string[] {
    const baseColumns = Object.keys(this.columnMappings);
    return this.showNumeration ? ['numeration', ...baseColumns] : baseColumns;
  }

  getDisplayedColumns(): string[] {
    const baseColumns = this.columns.concat('actions');
    return baseColumns.filter(item => !this.hiddenColumns.includes(item));
  }

  ngAfterViewInit() {
    this.tableDataSource = new MatTableDataSource(this.dataSource);
    this.tableDataSource.sort = this.sort;

    this.changeDetectorRef.detectChanges();
  }
}
