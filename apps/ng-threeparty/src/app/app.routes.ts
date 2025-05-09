import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./page/home/home.component').then((h) => h.HomeComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./page/login/login-page/login-page.component').then(
        (lp) => lp.LoginPageComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./page/login/sign-in/sign-in.component').then(
            (s) => s.SignInComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./page/login/register/register.component').then(
            (r) => r.RegisterComponent
          ),
      },
    ],
  },

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];
