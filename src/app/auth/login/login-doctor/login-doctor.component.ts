import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginDoctorService } from './login-doctor.service';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent implements OnInit {

  loginFormDoctor!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginDoctorService:LoginDoctorService, private router:Router){}
 
  ngOnInit(){ 
    this.loginFormDoctor = this.formBuilder.group({
      username: ['', [Validators.required,
           Validators.minLength(4), 
           Validators.maxLength(15)]],
      password: ['', [Validators.required,
          Validators.minLength(4), 
          Validators.maxLength(15)]]
    })
   }

   logInDoctor(){
     let username: string;
     let password: string;
     let login: Login = this.loginFormDoctor.value;
     console.log(this.loginFormDoctor.get('username')?.value)
     this.loginDoctorService.authenticationD(login).subscribe(response=>{
      if(response == "OK"){
        username = this.loginFormDoctor.get('username')?.value;
        password = this.loginFormDoctor.get('password')?.value;
        sessionStorage.setItem("credentials2",username +":"+ password);
        this.router.navigate(['doctor'])
      }
      else{
        alert("Try again.Wrong username or password");
      }
     })
   
   }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
