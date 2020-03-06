import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonExampleModule } from 'src/app/components/utils/button-example/button-example.module';
import { CardTitleModule } from 'src/app/components/utils/card-title/card-title.module';
import { AppMaterialModule } from 'src/app/shared/angular-material.module';
import { PreparacionRespuestaEmergenciaRoutingModule } from './preparacion-respuesta-emergencia-routing.module';
import { preparacionRespuestaEmergenciaComponent } from './preparacion-respuesta-emergencia.component';
import { ServiciosRespuestaEmergenciasComponent } from './servicios-respuesta-emergencias/servicios-respuesta-emergencias.component';
import { CapacitacionComponent } from './capacitacion/capacitacion.component';
import { EquipamentoRespuestaComponent } from './equipamento-respuesta/equipamento-respuesta.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';




@NgModule({
  declarations: [preparacionRespuestaEmergenciaComponent, ServiciosRespuestaEmergenciasComponent, CapacitacionComponent, EquipamentoRespuestaComponent, EntrenamientoComponent],
  imports: [
    CommonModule,
    PreparacionRespuestaEmergenciaRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CardTitleModule,
    ButtonExampleModule
  ]
})
export class PreparacionRespuestaEmergenciaModule { }
