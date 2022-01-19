import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperArchRoutingModule } from './stepper-arch-routing.module';
import { StepperArchComponent } from './stepper-arch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StepperArchComponent
  ],
  imports: [
    CommonModule,
    StepperArchRoutingModule,
    SharedModule
  ]
})
export class StepperArchModule { }
