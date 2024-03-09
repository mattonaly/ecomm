import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsFormTutorialComponent } from './promotions-form-tutorial.component';

describe('PromotionsFormTutorialComponent', () => {
  let component: PromotionsFormTutorialComponent;
  let fixture: ComponentFixture<PromotionsFormTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionsFormTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionsFormTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
