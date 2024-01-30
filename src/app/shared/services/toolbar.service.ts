import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Action {
  label: string,
  icon: string,
  action: () => void,
}

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private toolbarActionsSubject = new BehaviorSubject<Action[]>([]);
  toolbarActions: Observable<Action[]> = this.toolbarActionsSubject.asObservable();

  setToolbarActions(actions: Action[]): void {
    this.toolbarActionsSubject.next(actions);
  }

  clearToolbarActions(): void {
    this.toolbarActionsSubject.next([]);
  }
}
