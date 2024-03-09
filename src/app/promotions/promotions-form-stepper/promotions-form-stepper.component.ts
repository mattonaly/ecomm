import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

export interface IStep {
  label: string;
  disabled: boolean;
}

@Component({
  selector: 'app-promotions-form-stepper',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf, TooltipModule],
  templateUrl: './promotions-form-stepper.component.html',
  styleUrl: './promotions-form-stepper.component.css',
})
export class PromotionsFormStepperComponent {
  @Input() steps: IStep[] = [];
  @Input() selectedIndex: number = 0;
  @Input() disabled: boolean = false;
  @Output() stepSelectionChange = new EventEmitter<number>();

  public selectStep(index: number): void {
    if (index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.stepSelectionChange.emit(index);
    }
  }
}
