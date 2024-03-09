import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsService } from './services/promotions.service';

@NgModule({
  imports: [CommonModule, PromotionsRoutingModule],
  providers: [PromotionsService],
})
export class PromotionsModule {}
