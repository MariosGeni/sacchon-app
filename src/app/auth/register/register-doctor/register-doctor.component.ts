import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {

registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){ 
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)]],
      lname: ['', [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)]],
      birthdate:['',Validators.required],
      telephone:['',[Validators.required,
        Validators.minLength(10), 
        Validators.maxLength(10)]],
      email:['',[Validators.required,
        Validators.email]],
      username: ['', [Validators.required,
           Validators.minLength(4), 
           Validators.maxLength(15)]],
      password: ['', [Validators.required,
          Validators.minLength(4), 
          Validators.maxLength(15)]]
    })
   }

}
