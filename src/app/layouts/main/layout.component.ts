import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';
import { ToolbarService } from '../../shared/services/toolbar.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class MainLayoutComponent {
  title = '';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  urls: { path: string; label: string }[] = [
    { path: '/', label: 'Dashboard' },
    { path: '/teacher', label: 'Teachers' },
    { path: '/student', label: 'Students' },
    { path: '/admin', label: 'Admin' },
  ];

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  calcContentHeight(height: number): string {
    return `calc(100vh - 2rem - ${height}px)`;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private toolbarService: ToolbarService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toolbarService.clearToolbarActions();
      }
    });
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  private updateTitle(): void {
    this.title = this.activatedRoute.snapshot.firstChild?.routeConfig?.title?.toString() || ''
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
