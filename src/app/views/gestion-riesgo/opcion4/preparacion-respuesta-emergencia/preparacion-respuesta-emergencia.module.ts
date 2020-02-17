import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { PreparacionRecuperacionModule } from '../../opcion6/preparacion-recuperacion/preparacion-recuperacion.module';
import { PreparacionRespuestaEmergenciaRoutingModule } from './preparacion-respuesta-emergencia-routing.module';



@NgModule({
  declarations: [PreparacionRecuperacionModule],
  imports: [
    CommonModule,
    PreparacionRespuestaEmergenciaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class PreparacionRespuestaEmergenciaModule { }
