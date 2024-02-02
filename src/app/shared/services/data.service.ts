import { Observable } from 'rxjs';

export interface DataService<T> {
  add(data: T): Observable<T>;
  update(id: number, data: T): Observable<T>;
  delete(id: number): Observable<T>;
  get(): Observable<T[]>;
}
