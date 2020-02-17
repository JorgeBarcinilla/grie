import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteTratamientoRiesgoComponent } from './reporte-tratamiento-riesgo.component';


const routes: Routes = [
  {
    path:'',
    component: ReporteTratamientoRiesgoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteTratamientoRiesgoRoutingModule { }
