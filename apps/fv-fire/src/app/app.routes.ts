import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./page/home/home.component').then((h) => h.HomeComponent),
  },
];
