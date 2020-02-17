import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { LineamientosPoliticaRoutingModule } from './lineamientos-politica-routing.module';
import { LineamientosPoliticaComponent } from './lineamientos-politica.component';
import { InfoVistaComponent } from 'src/app/components/info-vista/info-vista.component';



@NgModule({
  declarations: [LineamientosPoliticaComponent],
  imports: [
    CommonModule,
    LineamientosPoliticaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class LineamientosPoliticaModule { }
