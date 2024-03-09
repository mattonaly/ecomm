import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsFormConditionsComponent } from './promotions-form-conditions.component';

describe('PromotionsFormConditionsComponent', () => {
  let component: PromotionsFormConditionsComponent;
  let fixture: ComponentFixture<PromotionsFormConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionsFormConditionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionsFormConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
