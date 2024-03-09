import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./promotion-list/promotions-list.component').then(
        (m) => m.PromotionsListComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./promotions-form/promotions-form.component').then(
        (m) => m.PromotionsFormComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./promotions-form/promotions-form.component').then(
        (m) => m.PromotionsFormComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionsRoutingModule {}
