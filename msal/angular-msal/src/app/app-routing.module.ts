import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeModule } from './home/home.module';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: () => HomeModule // never lazy load the default page
},
{
  path: 'protected-one',
  canActivate: [MsalGuard],
  loadChildren: () => import('./protected-one/protected-one.module').then(x => x.ProtectedOneModule)
},
{
  path: 'protected-two',
  canActivate: [MsalGuard],
  loadChildren: () => import('./protected-two/protected-two.module').then(x => x.ProtectedTwoModule)
},
{
  path: 'login-failed',
  loadChildren: () => import('./login-failed/login-failed.module').then(x => x.LoginFailedModule)
},
{
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
