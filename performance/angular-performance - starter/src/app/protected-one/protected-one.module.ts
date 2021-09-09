import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedOneRoutingModule } from './protected-one-routing.module';
import { ProtectedOneComponent } from './protected-one.component';


@NgModule({
  declarations: [
    ProtectedOneComponent
  ],
  imports: [
    CommonModule,
    ProtectedOneRoutingModule
  ]
})
export class ProtectedOneModule { }
