import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificacionSedeComponent } from './identificacion-sede.component';


const routes: Routes = [
  {
    path:'',
    component: IdentificacionSedeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentificacionSedeRoutingModule { }
