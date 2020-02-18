import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocimientoInstitucionalComponent } from './conocimiento-institucional.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'identificacionInstitucion'
  },
  {
    path : 'identificacionInstitucion',
    component: ConocimientoInstitucionalComponent,
    loadChildren : () => import(`./opcion1/identificacion-institucion/identificacion-institucion.module`).then(m => m.IdentificacionInstitucionModule)
  },
  {
    path : 'identificacionSede',
    component: ConocimientoInstitucionalComponent,
    loadChildren : () => import(`./opcion1/identificacion-sede/identificacion-sede.module`).then(m => m.IdentificacionSedeModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConocimientoInstitucionalRoutingModule { }
