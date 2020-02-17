import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluacionRiesgoComponent } from './evaluacion-riesgo.component';


const routes: Routes = [
  {
    path:'',
    component: EvaluacionRiesgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionRiesgoRoutingModule { }
