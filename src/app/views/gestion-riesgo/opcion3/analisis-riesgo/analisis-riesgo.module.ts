import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { AnalisisRiesgoRoutingModule } from './analisis-riesgo-routing.module';
import { AnalisisRiesgoComponent } from './analisis-riesgo.component';
import { DeterminarProbabilidadComponent } from './determinar-probabilidad/determinar-probabilidad.component';
import { EstimarRiesgoInicialComponent } from './estimar-riesgo-inicial/estimar-riesgo-inicial.component';



@NgModule({
  declarations: [AnalisisRiesgoComponent, DeterminarProbabilidadComponent, EstimarRiesgoInicialComponent],
  imports: [
    CommonModule,
    AnalisisRiesgoRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class AnalisisRiesgoModule { }
