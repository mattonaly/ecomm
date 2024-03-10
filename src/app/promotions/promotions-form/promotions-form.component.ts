import { NgClass, NgIf } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs';

import { PromotionsFormConditionsComponent } from '../promotions-form-conditions/promotions-form-conditions.component';
import { PromotionsFormDescriptionComponent } from '../promotions-form-description/promotions-form-description.component';
import {
  IStep,
  PromotionsFormStepperComponent,
} from '../promotions-form-stepper/promotions-form-stepper.component';
import { PromotionsFormTutorialComponent } from '../promotions-form-tutorial/promotions-form-tutorial.component';
import { PromotionsService } from '../services/promotions.service';
import { requireMarketingOrTechnical } from '../validators/promotions.validators';

@Component({
  selector: 'app-promotions-form',
  standalone: true,
  imports: [
    PromotionsFormStepperComponent,
    NgClass,
    NgIf,
    ReactiveFormsModule,
    PromotionsFormDescriptionComponent,
    PromotionsFormConditionsComponent,
    PromotionsFormTutorialComponent,
  ],
  templateUrl: './promotions-form.component.html',
  styleUrl: './promotions-form.component.css',
})
export class PromotionsFormComponent implements OnInit {
  public steps: IStep[] = [
    { label: 'DEFINITION', disabled: false },
    { label: 'CHOOSE PRODUCTS', disabled: false },
    { label: 'EXCLUDE PRODUCTS', disabled: false },
    { label: 'BONUS PRODUCTS', disabled: true },
    { label: 'PRODUCTS LIMITS', disabled: true },
    { label: 'CHOOSE CLIENTS', disabled: false },
    { label: 'EXCLUDE CLIENTS', disabled: false },
    { label: 'CLIENTS LIMITS', disabled: false },
    { label: 'SUMMARY', disabled: false },
  ];

  public selectedIndex: number = 0;

  public descriptionForm: UntypedFormGroup = new UntypedFormGroup(
    {
      marketingName: new FormControl(null, Validators.required),
      technicalName: new FormControl(null),
      description: new FormControl(null),
    },
    [requireMarketingOrTechnical()]
  );
  public conditionsForm: UntypedFormGroup = new UntypedFormGroup({
    destination: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required),
    benefitAmount: new FormControl({ value: null, disabled: true }),
    startDate: new FormControl(null, Validators.required),
    finishDate: new FormControl(null),
    pricingOptions: new FormControl(null),
    connectWithOtherPromotions: new FormControl(false),
    backPromotion: new FormControl(false),
  });

  public form: UntypedFormGroup = new UntypedFormGroup({
    description: this.descriptionForm,
    conditions: this.conditionsForm,
  });

  private destroyRef = inject(DestroyRef);

  constructor(
    private readonly promotionsService: PromotionsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.setupFormFromRoute();

    this.handleFormDraft();

    this.handleDraftSaving();
  }

  public onStepSelected(index: number): void {
    this.selectedIndex = index;
    console.log('Step selected', index);
  }

  public save(): void {
    const value = this.form.value;

    if (value.id) {
      this.promotionsService.savePromotion(value);
    } else {
      this.promotionsService.createPromotion(value);
    }

    this.router.navigate(['promotions']);
  }

  private handleFormDraft(): void {
    const draft = this.promotionsService.getDraft();

    draft && this.form.patchValue(draft);
  }

  private handleDraftSaving(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.promotionsService.saveDraft(value));
  }

  private setupFormFromRoute(): void {
    this.route.paramMap
      .pipe(
        map((params) => params.get('id')),
        filter(Boolean),
        tap((id) => this.form.addControl('id', new FormControl(+id))),
        switchMap((id) => this.promotionsService.getPromotion(+id)),
        tap((value) => !value && this.router.navigate(['promotions'])),
        filter(Boolean),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((value) => this.form.patchValue(value));
  }
}
