import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent, Dialog } from '../modal/confirmation/confirmation.component';
import { MatPaginator } from '@angular/material/paginator';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() showNumeration = true;
  @Input() hiddenColumns: string[] = [''];
  @Input() columnMappings: { [key: string]: string } = {};
  @Input() dataSource: any[] = [];
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  tableDataSource!: MatTableDataSource<any>;

  constructor(
    private dialog: MatDialog,
    private tableService: TableService,
  ) { }

  get columns(): string[] {
    const baseColumns = Object.keys(this.columnMappings);
    return this.showNumeration ? ['numeration', ...baseColumns] : baseColumns;
  }

  getDisplayedColumns(): string[] {
    const baseColumns = this.columns.concat('actions');
    return baseColumns.filter(item => !this.hiddenColumns.includes(item));
  }

  showDialog(row: any): void {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete',
        message: 'Do you want to continue?'
      } as Dialog
    }).afterClosed()
      .subscribe((confirmed: Boolean) => {
        if (confirmed) {
          this.onDelete.emit(row)
        }
      });
  }

  ngOnInit() {
    this.tableService.currentData.subscribe((newDataSource) => {
      this.tableDataSource = newDataSource;
      this.tableDataSource.sort = this.sort;
      this.tableDataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.tableService.updateData(this.dataSource);
  }
}
