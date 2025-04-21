import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./page/quiz.component').then((m) => m.QuizComponent),
    title: 'Quiz',
  },
];
