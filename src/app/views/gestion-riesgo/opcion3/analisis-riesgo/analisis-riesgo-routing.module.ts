import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalisisRiesgoComponent } from './analisis-riesgo.component';


const routes: Routes = [
  {
    path:'',
    component: AnalisisRiesgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalisisRiesgoRoutingModule { }
