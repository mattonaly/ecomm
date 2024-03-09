import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'promotions',
  },
  {
    path: 'promotions',
    loadChildren: () =>
      import('./promotions/promotions.module').then((m) => m.PromotionsModule),
  },
];
