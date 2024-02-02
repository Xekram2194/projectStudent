import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Teacher {
  id?: number;
  name: string;
  profession: string,
  lastname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private _http: HttpClient) { }

  get(): Observable<Teacher[]> {
    return this._http.get<Teacher[]>('http://localhost:3000/teachers')
  }

  add(data: Teacher): Observable<Teacher> {
    return this._http.post<Teacher>('http://localhost:3000/teachers', data);
  }

  update(id: number, data: Teacher): Observable<Teacher> {
    return this._http.put<Teacher>(`http://localhost:3000/teachers/${id}`, data);
  }

  delete(id: number): Observable<Teacher> {
    return this._http.delete<Teacher>(`http://localhost:3000/teachers/${id}`)
  }
}
