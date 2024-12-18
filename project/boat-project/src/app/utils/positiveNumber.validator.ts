import { ValidatorFn } from "@angular/forms";

// export function positiveNumberValidator(numberControlName: number): ValidatorFn{
//     return (control) => {
//         const numberFromControl = control.get(numberControlName);
//         const isPossitive = numberFromControl?.value > 0;
//         return isPossitive ? null : {positiveNumberValidator: true};
//     }
// }