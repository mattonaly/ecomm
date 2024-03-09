import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsFormDescriptionComponent } from './promotions-form-description.component';

describe('PromotionsFormDescriptionComponent', () => {
  let component: PromotionsFormDescriptionComponent;
  let fixture: ComponentFixture<PromotionsFormDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionsFormDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionsFormDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
