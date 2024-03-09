export interface IPromotion {
  id: number;
  marketingName: string;
  technicalName: string;
  description: string;
  destination: ISelectOption;
  type: ISelectOption;
  benefitAmount: number;
  startDate: Date | null;
  finishDate: Date | null;
  pricingOptions: string;
  connectWithOtherPromotions: boolean;
  backPromotion: boolean;
}

export interface IPromotionForm {
  id: IPromotion['id'];
  description: Pick<
    IPromotion,
    'marketingName' | 'technicalName' | 'description'
  >;
  conditions: Omit<
    IPromotion,
    'id' | 'marketingName' | 'technicalName' | 'description'
  >;
}

export interface ISelectOption {
  id: string;
  name: string;
}
