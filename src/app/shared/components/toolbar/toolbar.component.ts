import { Component, Input } from '@angular/core';
import { Action, ToolbarService } from '../../services/toolbar.service';
import { Subscription } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() title = '';
  @Input() drawer: MatDrawer | undefined;

  toolbarActions: Action[] = [];
  private toolbarSubscription: Subscription;

  constructor(private toolbarService: ToolbarService) {
    this.toolbarSubscription = this.toolbarService.toolbarActions.subscribe(actions => {
      this.toolbarActions = actions;
    });
  }

  ngOnDestroy(): void {
    this.toolbarSubscription.unsubscribe();
  }
}
