import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFailedComponent } from './login-failed.component';

const routes: Routes = [{
  path: '',
  component: LoginFailedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginFailedRoutingModule { }
