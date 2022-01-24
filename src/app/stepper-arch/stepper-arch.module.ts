import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperArchRoutingModule } from './stepper-arch-routing.module';
import { StepperArchComponent } from './stepper-arch.component';
import { SharedModule } from '../shared/shared.module';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StepperArchComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    CommonModule,
    StepperArchRoutingModule,
    SharedModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ]
})
export class StepperArchModule { }
