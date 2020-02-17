import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificacionInstitucionRoutingModule } from './identificacion-institucion-routing.module';
import { IdentificacionInstitucionComponent } from './identificacion-institucion.component';


@NgModule({
  declarations: [IdentificacionInstitucionComponent],
  imports: [
    CommonModule,
    IdentificacionInstitucionRoutingModule
  ]
})
export class IdentificacionInstitucionModule { }
