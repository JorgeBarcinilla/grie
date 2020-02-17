import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';

import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { AppMeterialModule } from 'src/app/shared/angular-material.module';
import { CaracterizacionContextoRoutingModule } from './caracterizacion-contexto-routing.module';
import { CaracterizacionContextoComponent } from './caracterizacion-contexto.component';
import { ContextoExternoComponent } from './contexto-externo/contexto-externo.component';
import { ContextoInternoComponent } from './contexto-interno/contexto-interno.component';
import { ContextoProcesoComponent } from './contexto-proceso/contexto-proceso.component';
import { IdentificacionActivosSeguridadComponent } from './identificacion-activos-seguridad/identificacion-activos-seguridad.component';
import { InfoVistaComponent } from 'src/app/components/info-vista/info-vista.component';



@NgModule({
  declarations: [CaracterizacionContextoComponent,ContextoExternoComponent,ContextoInternoComponent,ContextoProcesoComponent,IdentificacionActivosSeguridadComponent],
  imports: [
    CommonModule,
    CaracterizacionContextoRoutingModule,
    AppMeterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class CaracterizacionContextoModule { }
