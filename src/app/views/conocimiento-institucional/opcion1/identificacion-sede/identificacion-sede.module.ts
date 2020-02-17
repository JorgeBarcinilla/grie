import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentificacionSedeRoutingModule } from './identificacion-sede-routing.module';
import { IdentificacionSedeComponent } from './identificacion-sede.component';


@NgModule({
  declarations: [IdentificacionSedeComponent],
  imports: [
    CommonModule,
    IdentificacionSedeRoutingModule
  ]
})
export class IdentificacionSedeModule { }
