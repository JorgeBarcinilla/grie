import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionRiesgoRoutingModule } from './evaluacion-riesgo-routing.module';
import { EvaluacionRiesgoComponent } from './evaluacion-riesgo.component';
import { AppMeterialModule } from 'src/app/shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';


@NgModule({
  declarations: [EvaluacionRiesgoComponent],
  imports: [
    CommonModule,
    EvaluacionRiesgoRoutingModule,
    AppMeterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class EvaluacionRiesgoModule { }
