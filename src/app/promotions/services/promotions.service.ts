import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { IPromotion, IPromotionForm } from '../models/promotions.models';

@Injectable()
export class PromotionsService {
  private items: IPromotion[] = [
    {
      id: 1,
      marketingName: 'Promotion 1',
      technicalName: 'Tech 1',
      description: 'Desc 1',
      destination: { id: 'portal', name: 'Portal' },
      type: { id: 'bonus', name: 'Bonus' },
      benefitAmount: 1,
      startDate: new Date(),
      finishDate: new Date(),
      pricingOptions: 'businessConditions',
      connectWithOtherPromotions: false,
      backPromotion: true,
    },
    {
      id: 2,
      marketingName: 'Promotion 2',
      technicalName: 'Tech 2',
      description: 'Desc 2',
      destination: { id: 'pos', name: 'POS' },
      type: { id: 'discount', name: 'Discount' },
      benefitAmount: 2,
      startDate: new Date(),
      finishDate: new Date(),
      pricingOptions: 'basePrice',
      connectWithOtherPromotions: true,
      backPromotion: true,
    },
  ];

  public getPromotions(): Observable<IPromotion[]> {
    return of(this.items);
  }

  public saveDraft(promotion: IPromotionForm): void {
    localStorage.setItem('promotion', JSON.stringify(promotion));
  }

  public getDraft(): IPromotionForm | null {
    const promotion = localStorage.getItem('promotion');

    return promotion
      ? this.mapPromotionDraftToForm(JSON.parse(promotion))
      : null;
  }

  public createPromotion(promotion: IPromotionForm): void {
    this.items.push({
      id: this.items.length + 1,
      ...promotion.description,
      ...promotion.conditions,
    });
    localStorage.removeItem('promotion');
  }

  public savePromotion(promotion: IPromotionForm): void {
    console.warn('savePromotion', promotion);
    const index = this.items.findIndex((p) => p.id === promotion.id);
    this.items[index] = {
      id: promotion.id,
      ...promotion.description,
      ...promotion.conditions,
    };
    localStorage.removeItem('promotion');
  }

  public getPromotion(id: number): Observable<IPromotionForm | null> {
    const promotion = this.items.find((promotion) => promotion.id === id);
    return of(promotion ? this.mapPromotionToForm(promotion) : null);
  }

  public deletePromotion(id: number): Observable<IPromotion[]> {
    this.items = this.items.filter((promotion) => promotion.id !== id);
    return this.getPromotions();
  }

  private mapPromotionDraftToForm(promotion: IPromotionForm): IPromotionForm {
    return {
      ...promotion,
      conditions: {
        ...promotion.conditions,
        startDate: promotion.conditions.startDate
          ? new Date(promotion.conditions.startDate)
          : null,
        finishDate: promotion.conditions.finishDate
          ? new Date(promotion.conditions.finishDate)
          : null,
      },
    };
  }

  public mapPromotionToForm(promotion: IPromotion): IPromotionForm {
    return {
      id: promotion.id,
      description: {
        marketingName: promotion.marketingName,
        technicalName: promotion.technicalName,
        description: promotion.description,
      },
      conditions: {
        destination: promotion.destination,
        type: promotion.type,
        benefitAmount: promotion.benefitAmount,
        startDate: promotion.startDate,
        finishDate: promotion.finishDate,
        pricingOptions: promotion.pricingOptions,
        connectWithOtherPromotions: promotion.connectWithOtherPromotions,
        backPromotion: promotion.backPromotion,
      },
    };
  }
}
