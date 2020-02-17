import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { preparacionRespuestaEmergenciaComponent } from './preparacion-respuesta-emergencia.component';


const routes: Routes = [
  {
    path:'',
    component: preparacionRespuestaEmergenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionRespuestaEmergenciaRoutingModule { }
