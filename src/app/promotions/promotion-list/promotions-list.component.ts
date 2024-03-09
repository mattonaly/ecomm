import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';

import { PromotionsService } from '../services/promotions.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, AsyncPipe, NgIf, ConfirmDialogModule],
  templateUrl: './promotions-list.component.html',
  styleUrl: './promotions-list.component.css',
  providers: [ConfirmationService],
})
export class PromotionsListComponent {
  public promotions$ = this.promotionsService.getPromotions();

  constructor(
    private readonly promotionsService: PromotionsService,
    private readonly router: Router,
    private readonly confirmationService: ConfirmationService
  ) {}

  public createPromotion() {
    this.router.navigate(['promotions', 'create']);
  }

  public edit(id: number) {
    this.router.navigate(['promotions', 'edit', id]);
  }

  public delete(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this promotion?',
      accept: () =>
        (this.promotions$ = this.promotionsService.deletePromotion(id)),
    });
  }
}
