import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ArrayLengthValidator {
  static equalLength(length: number): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      if ((control.value as Array<any>).length != length) {
        return { equalLength: true };
      }
      return null;
    };
  }
}
