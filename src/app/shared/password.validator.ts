import { AbstractControl } from "@angular/forms";

//validator function could take only one parameter and so we will take the hold of registrationForm as entire one.
export function passwordValidator(control: AbstractControl): { [key: string]: boolean} | null{

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password && confirmPassword && password.value !== confirmPassword?.value ? 
    
    { 'misMatch': true } : 
    null; 

}