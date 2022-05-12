import {AbstractControl, Validators} from "@angular/forms";
import {startsWithUpperCase} from "../../../utils/StringUtils";

export default function ValidateTitle(control: AbstractControl) {

  const requiredResult = Validators.required(control);
  if (requiredResult) {
    return requiredResult;
  }

  const fn = Validators.minLength(3);
  const minlengthResult = fn(control);
  if (minlengthResult) {
    return minlengthResult;
  }

  const title = control.value;
  const r = (!startsWithUpperCase(title)) ? {invalidTitle: true} : null;
  console.log('ValidateTitle: r ',r)
  return r;
}
