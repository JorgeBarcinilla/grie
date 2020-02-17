import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaracterizacionContextoComponent } from './caracterizacion-contexto.component';


const routes: Routes = [
  {
    path:'',
    component: CaracterizacionContextoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaracterizacionContextoRoutingModule { }
