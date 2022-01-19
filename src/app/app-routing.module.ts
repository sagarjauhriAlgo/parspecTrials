import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'step-arch',
    loadChildren: () => import('./stepper-arch/stepper-arch.module').then(m => m.StepperArchModule)
  },
  {
    path: '**',
    redirectTo: 'step-arch',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
