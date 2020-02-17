import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificacionRiesgoComponent } from './identificacion-riesgo.component';


const routes: Routes = [
  {
    path:'',
    component: IdentificacionRiesgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentificacionRiesgoRoutingModule { }
