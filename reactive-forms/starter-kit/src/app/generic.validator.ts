import { delay } from 'rxjs/operators';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
export class GenericValidator {
  static range(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value < min || control.value > max) {
        return {
          range: {
            min,
            max,
          },
        };
      }

      return null;
    };
  }

  static isHeroNameTaken(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    if (control.value === 'hulk') {
      return of({ heroNameTaken: true }).pipe(delay(2000));
    }

    return of(null).pipe(delay(2000));
  }
}
