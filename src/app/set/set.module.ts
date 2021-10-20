import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetRoutingModule } from './set-routing.module';
import { UsernameComponent } from './username/username.component';



@NgModule({
  declarations: [
    UsernameComponent
  ],
  imports: [
    CommonModule,
    SetRoutingModule
  ]
})
export class SetModule { }
