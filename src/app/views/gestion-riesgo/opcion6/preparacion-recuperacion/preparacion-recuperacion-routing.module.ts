import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreparacionRecuperacionComponent } from './preparacion-recuperacion.component';


const routes: Routes = [
  {
    path:'',
    component: PreparacionRecuperacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparacionRecuperacionRoutingModule { }
