import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedTwoRoutingModule } from './protected-two-routing.module';
import { ProtectedTwoComponent } from './protected-two.component';


@NgModule({
  declarations: [
    ProtectedTwoComponent
  ],
  imports: [
    CommonModule,
    ProtectedTwoRoutingModule
  ]
})
export class ProtectedTwoModule { }
