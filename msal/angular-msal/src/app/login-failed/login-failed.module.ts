import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFailedRoutingModule } from './login-failed-routing.module';
import { LoginFailedComponent } from './login-failed.component';


@NgModule({
  declarations: [
    LoginFailedComponent
  ],
  imports: [
    CommonModule,
    LoginFailedRoutingModule
  ]
})
export class LoginFailedModule { }
