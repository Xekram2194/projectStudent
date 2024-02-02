import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  code: string;
  name: string;
  lastname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  get(): Observable<Student[]> {
    return this._http.get<Student[]>('http://localhost:3000/students')
  }

  add(data: Student): Observable<Student> {
    return this._http.post<Student>('http://localhost:3000/students', data);
  }

  update(id: number, data: Student): Observable<Student> {
    return this._http.put<Student>(`http://localhost:3000/students/${id}`, data);
  }

  delete(id: number): Observable<Student> {
    return this._http.delete<Student>(`http://localhost:3000/students/${id}`)
  }

}
