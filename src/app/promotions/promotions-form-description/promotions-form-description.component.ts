import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { IPromotion } from '../models/promotions.models';

@Component({
  selector: 'app-promotions-form-description',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule,
  ],
  templateUrl: './promotions-form-description.component.html',
  styleUrl: './promotions-form-description.component.css',
})
export class PromotionsFormDescriptionComponent {
  @Input() form!: FormGroup;
}
