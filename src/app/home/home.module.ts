import { RouterModule } from '@angular/router';
import { AuthModule } from './../auth/auth.module';
import { AuthRoutingModule } from './../auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class HomeModule { }
