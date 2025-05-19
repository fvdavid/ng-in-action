import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./page/home/home.component').then((h) => h.HomeComponent),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import(
            './page/product/filter-product-by/filter-product-by.component'
          ).then((f) => f.FilterProductByComponent),
      },
      {
        path: '',
        redirectTo: 'trending',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./page/product/product-details/product-details.component').then(
        (pd) => pd.ProductDetailsComponent
      ),
  },
  {
    path: 's/place',
    loadComponent: () =>
      import('./page/product/product-place/product-place.component').then(
        (pp) => pp.ProductPlaceComponent
      ),
  },

  // {
  //   path: 'product',
  //   loadComponent: () =>
  //     import('./page/product/filter-product/filter-product.component').then(
  //       (fp) => fp.FilterProductComponent
  //     ),
  //   children: [
  //     {
  //       path: 'photos',
  //       loadComponent: () =>
  //         import(
  //           './page/product/filter-product-by/filter-product-by.component'
  //         ).then((f) => f.FilterProductByComponent),
  //     },
  //   ],
  // },

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
    redirectTo: 'trending',
    pathMatch: 'full',
  },
];
