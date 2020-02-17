import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineamientosPoliticaComponent } from './lineamientos-politica.component';


const routes: Routes = [
  {
    path:'',
    component: LineamientosPoliticaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineamientosPoliticaRoutingModule { }
