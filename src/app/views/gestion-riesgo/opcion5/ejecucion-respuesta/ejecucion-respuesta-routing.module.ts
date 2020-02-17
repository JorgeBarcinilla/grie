import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjecucionRespuestaComponent } from './ejecucion-respuesta.component';


const routes: Routes = [
  {
    path:'',
    component: EjecucionRespuestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjecucionRespuestaRoutingModule { }
