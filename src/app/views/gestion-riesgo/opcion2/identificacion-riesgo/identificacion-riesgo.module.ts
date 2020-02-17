import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { IdentificacionRiesgoRoutingModule } from './identificacion-riesgo-routing.module';
import { IdentificacionRiesgoComponent } from './identificacion-riesgo.component';



@NgModule({
  declarations: [IdentificacionRiesgoComponent],
  imports: [
    CommonModule,
    IdentificacionRiesgoRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class IdentificacionRiesgoModule { }
