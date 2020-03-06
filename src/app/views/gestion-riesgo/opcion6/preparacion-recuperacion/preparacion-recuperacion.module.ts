import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { PreparacionRecuperacionRoutingModule } from './preparacion-recuperacion-routing.module';
import { PreparacionRecuperacionComponent } from './preparacion-recuperacion.component';
import { ValoracionSituacionComponent } from './valoracion-situacion/valoracion-situacion.component';
import { EjecucionRecuperacionComponent } from './ejecucion-recuperacion/ejecucion-recuperacion.component';



@NgModule({
  declarations: [PreparacionRecuperacionComponent, ValoracionSituacionComponent, EjecucionRecuperacionComponent],
  imports: [
    CommonModule,
    PreparacionRecuperacionRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class PreparacionRecuperacionModule { }
