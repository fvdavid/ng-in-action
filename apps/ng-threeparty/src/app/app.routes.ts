import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login-page/login-page.component').then(
        (lp) => lp.LoginPageComponent
      ),
  },
];
