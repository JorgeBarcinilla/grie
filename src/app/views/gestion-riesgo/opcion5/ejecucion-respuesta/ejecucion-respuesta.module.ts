import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjecucionRespuestaRoutingModule } from './ejecucion-respuesta-routing.module';
import { EjecucionRespuestaComponent } from './ejecucion-respuesta.component';
import { CardTitleComponent } from 'src/app/components/utils/card-title/card-title.component';
import { InfoVistaComponent } from 'src/app/components/info-vista/info-vista.component';
import { ButtonExampleComponent } from 'src/app/components/utils/button-example/button-example.component';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';


@NgModule({
  declarations: [EjecucionRespuestaComponent],
  imports: [
    CommonModule,
    EjecucionRespuestaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class EjecucionRespuestaModule { }
