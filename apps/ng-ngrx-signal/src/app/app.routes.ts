import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./todo/todo.component').then((t) => t.TodoComponent),
  },
];
