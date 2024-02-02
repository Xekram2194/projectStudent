import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private dataSource = new BehaviorSubject<MatTableDataSource<any>>(new MatTableDataSource<any>());
  currentData = this.dataSource.asObservable();

  updateData(newData: any[], sort?: MatSort, paginator?: MatPaginator) {
    const tableDataSource = new MatTableDataSource(newData);
    if (sort) {
      tableDataSource.sort = sort;
    }
    if (paginator) {
      tableDataSource.paginator = paginator;
    }
    this.dataSource.next(tableDataSource);
  }
}
