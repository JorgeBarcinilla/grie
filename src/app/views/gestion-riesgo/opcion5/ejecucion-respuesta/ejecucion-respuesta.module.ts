import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionRespuestaRoutingModule } from './ejecucion-respuesta-routing.module';
import { EjecucionRespuestaComponent } from './ejecucion-respuesta.component';
import { CardTitleComponent } from 'src/app/components/utils/card-title/card-title.component';
import { InfoVistaComponent } from 'src/app/components/info-vista/info-vista.component';
import { ButtonExampleComponent } from 'src/app/components/utils/button-example/button-example.component';
import { AppMeterialModule } from 'src/app/shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EjecucionRespuestaComponent, CardTitleComponent,InfoVistaComponent,ButtonExampleComponent],
  imports: [
    CommonModule,
    EjecucionRespuestaRoutingModule,
    AppMeterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EjecucionRespuestaModule { }
