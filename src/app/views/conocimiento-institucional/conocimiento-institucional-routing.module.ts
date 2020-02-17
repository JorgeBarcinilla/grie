import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'identificacionInstitucion'
  },
  {
    path : 'identificacionInstitucion',
    loadChildren : () => import(`./opcion1/identificacion-institucion/identificacion-institucion.module`).then(m => m.IdentificacionInstitucionModule)
  },
  {
    path : 'identificacionSede',
    loadChildren : () => import(`./opcion1/identificacion-sede/identificacion-sede.module`).then(m => m.IdentificacionSedeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConocimientoInstitucionalRoutingModule { }
