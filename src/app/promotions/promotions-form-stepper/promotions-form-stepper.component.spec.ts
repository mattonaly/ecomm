import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsFormStepperComponent } from './promotions-form-stepper.component';

describe('PromotionsFormStepperComponent', () => {
  let component: PromotionsFormStepperComponent;
  let fixture: ComponentFixture<PromotionsFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionsFormStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionsFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
