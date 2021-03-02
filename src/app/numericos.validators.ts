import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';


export function mayorAZero(): ValidatorFn {
  /*return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return (+value) > 0 ? null : {esMenorAZero: true, msj: 'CHale'};
  };*/

  const fn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return (+value) > 0 ? null : {esMenorAZero: true, msj: 'La edad es menor o igual a 0'};
  };

  return fn;
}

export function AlMenosUnNumero(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return +(control.value.substr(0, 1)) >= 0 ? null : {error: true};
  };
}
