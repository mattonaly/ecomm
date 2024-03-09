import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-promotions-form-conditions',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    TooltipModule,
    RadioButtonModule,
    CheckboxModule,
  ],
  templateUrl: './promotions-form-conditions.component.html',
  styleUrl: './promotions-form-conditions.component.css',
})
export class PromotionsFormConditionsComponent {
  @Input() form!: FormGroup;

  public destinations = [
    { id: 'portal', name: 'Portal' },
    { id: 'pos', name: 'POS' },
  ];
  public types = [
    { id: 'bonus', name: 'Bonus' },
    { id: 'discount', name: 'Discount' },
  ];
}
