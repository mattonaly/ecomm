import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function requireMarketingOrTechnical(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const marketingNameControl = control.get('marketingName');
    const technicalNameControl = control.get('technicalName');

    if (!marketingNameControl || !technicalNameControl) {
      return null;
    }

    const marketingName = marketingNameControl.value;
    const technicalName = technicalNameControl.value;

    if (!marketingName && !technicalName) {
      return { requireMarketingOrTechnical: true };
    }

    return null;
  };
}
