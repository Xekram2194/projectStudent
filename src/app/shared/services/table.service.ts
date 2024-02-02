import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, EMPTY, catchError, map, mergeMap, take } from 'rxjs';
import { DataService } from './data.service';
import { FormGroup } from '@angular/forms';

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

  handleOnAdd<T>(service: DataService<T>, form: FormGroup) {
    service.add(form.value).pipe(
      mergeMap(newData => {
        return this.currentData.pipe(
          take(1),
          map(currentData => {
            const updatedData = [...currentData.data, newData];
            return updatedData;
          }),
        );
      }),
      catchError((error: any) => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe(updatedData => {
      this.updateData(updatedData);
    });
  }

  handleOnEdit<T>(service: DataService<T>, form: FormGroup) {
    service.update(form.value.id, form.value).pipe(
      mergeMap((newData) => {
        return this.currentData.pipe(
          take(1),
          map(currentData => {
            const updatedData = currentData.data.map(item =>
              item.id === form.value.id ? newData : item
            );
            return updatedData;
          }),
        );
      }),
      catchError((error: any) => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe(updatedData => {
      this.updateData(updatedData);
    });
  }

  handleOnDelete<T>(service: DataService<T>, id: number) {
    service.delete(id).pipe(
      mergeMap(() => {
        return this.currentData.pipe(
          take(1),
          map(currentData => {
            const updateData = currentData.data.filter(item =>
              item.id !== id
            );
            return updateData;
          })
        )
      }),
      catchError((error: any) => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe(updatedData => {
      this.updateData(updatedData);
    })
  }
}
