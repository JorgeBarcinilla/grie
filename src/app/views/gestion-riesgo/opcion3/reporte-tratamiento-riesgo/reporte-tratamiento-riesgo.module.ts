import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { ReporteTratamientoRiesgoRoutingModule } from './reporte-tratamiento-riesgo-routing.module';
import { ReporteTratamientoRiesgoComponent } from './reporte-tratamiento-riesgo.component';



@NgModule({
  declarations: [ReporteTratamientoRiesgoComponent],
  imports: [
    CommonModule,
    ReporteTratamientoRiesgoRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class ReporteTratamientoRiesgoModule { }
