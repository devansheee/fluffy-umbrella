import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password.validator';
import { formBiddenNameValidator } from '../shared/username.validator';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //this model is used with formgrps and form control. i replaced this with form model builder.
  // registrationForm= new FormGroup({
  //   username : new FormControl('Devanshee'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  

  //the below model was for normal validation on the reactive form. now we would be shifting this model to ngOnInit to do custom validation and hook it with the lifecycle methods.
  registrationForm = this.fb.group({
    //first value in the below array is the default value of the form control. second is the validation rules.
    username : ['Devanshee', [Validators.required, Validators.minLength(3), formBiddenNameValidator]],
    password: [''],
    email: [''],
    subscribe: [''],
    confirmPassword: [''],
    address: this.fb.group({
        city: [''],
        state: [''],
        postalCode:  ['']
    }),
    
  }, {validator: passwordValidator});


  //this is not working!
 // registrationForm : FormGroup;
  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit(): void {

    // registrationForm = this.fb.group({
    //   //first value in the below array is the default value of the form control. second is the validation rules.
    //   username : ['Devanshee', [Validators.required, Validators.minLength(3), formBiddenNameValidator]],
    //   password: [''],
    //   email: [''],
    //   subscribe: ['false'],
    //   confirmPassword: [''],
    //   address: this.fb.group({
    //       city: [''],
    //       state: [''],
    //       postalCode:  ['']
    //   }),
      
    // }, {validator: passwordValidator});

  }
  // loadApiData(){
  //   this.registrationForm.setValue({
  //     username: 'devanshee',
  //     password: 'test',
  //     confirmPassword : 'test',
  //     address :{
  //       city: 'indore',
  //       state: 'MP',
  //       postalCode:'456456'
  //     }
  //   });

  //   use .patchValue() function to partially populate the data
  // }

  get username(){
    return this.registrationForm.get('username');
  }

  onSubmit(){
    this.registrationService.register(this.registrationForm.value)
        .subscribe(
          response => console.log('Success', response),
          error => console.log('Error : ', error)
        );
    console.log(this.registrationForm.value);
  }

}
