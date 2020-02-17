import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificacionInstitucionComponent } from './identificacion-institucion.component';


const routes: Routes = [
  {
    path:'',
    component: IdentificacionInstitucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentificacionInstitucionRoutingModule { }
