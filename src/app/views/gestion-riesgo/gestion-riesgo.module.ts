import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AppMeterialModule } from 'src/app/shared/angular-material.module';
import { GestionRiesgoRoutingModule } from './gestion-riesgo-routing.module';
import { GestionRiesgoComponent } from './gestion-riesgo.component';
import { InfoVistaComponent } from 'src/app/components/info-vista/info-vista.component';



@NgModule({
  declarations: [GestionRiesgoComponent,HeaderComponent,InfoVistaComponent],
  imports: [
    CommonModule,
    GestionRiesgoRoutingModule,
    AppMeterialModule,
  ]
})
export class GestionRiesgoModule { }
