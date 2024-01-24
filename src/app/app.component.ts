import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
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
