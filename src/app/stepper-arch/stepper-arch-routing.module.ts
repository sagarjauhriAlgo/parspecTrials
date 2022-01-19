import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperArchComponent } from './stepper-arch.component';

const routes: Routes = [{ path: '', component: StepperArchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperArchRoutingModule { }
