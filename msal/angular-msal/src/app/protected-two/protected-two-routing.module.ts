import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedTwoComponent } from './protected-two.component';

const routes: Routes = [{
  path: '',
  component: ProtectedTwoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedTwoRoutingModule { }
