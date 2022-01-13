import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent
 
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeaderModule { }
