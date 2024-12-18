import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passwordControlName: string, rePasswordControlName: string): ValidatorFn {
    return (control) => {
        const passwordFromControl = control.get(passwordControlName);
        const rePasswordFromControl = control.get(rePasswordControlName);

        const passwordsAreMatching = passwordFromControl?.value === rePasswordFromControl?.value;
        return passwordsAreMatching ? null : { matchPasswordsValidator: true };
    }
}