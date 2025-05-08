import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./page/home/home.component').then((h) => h.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login-page/login-page.component').then(
        (lp) => lp.LoginPageComponent
      ),
  },
];
