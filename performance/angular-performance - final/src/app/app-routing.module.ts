import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  loadChildren: () => import('./protected-one/protected-one.module').then(x => x.ProtectedOneModule)
},
{
  path: 'protected-two',
  loadChildren: () => import('./protected-two/protected-two.module').then(x => x.ProtectedTwoModule)
},
{
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
