import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LineamientosPoliticaComponent } from './views/gestion-riesgo/opcion1/lineamientos-politica/lineamientos-politica.component';
import { CaracterizacionContextoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/caracterizacion-contexto.component';
import { IdentificacionRiesgoComponent } from './views/gestion-riesgo/opcion2/identificacion-riesgo/identificacion-riesgo.component';
import { AnalisisRiesgoComponent } from './views/gestion-riesgo/opcion3/analisis-riesgo/analisis-riesgo.component';
import { EvaluacionRiesgoComponent } from './views/gestion-riesgo/opcion3/evaluacion-riesgo/evaluacion-riesgo.component';
import { ReporteTratamientoRiesgoComponent } from './views/gestion-riesgo/opcion3/reporte-tratamiento-riesgo/reporte-tratamiento-riesgo.component';
import { PrepracionRespuestaEmergenciaComponent } from './views/gestion-riesgo/opcion4/prepracion-respuesta-emergencia/prepracion-respuesta-emergencia.component';
import { EjecucionRespuestaComponent } from './views/gestion-riesgo/opcion5/ejecucion-respuesta/ejecucion-respuesta.component';
import { PreparacionRecuperacionComponent } from './views/gestion-riesgo/opcion6/preparacion-recuperacion/preparacion-recuperacion.component';
import { IdentificacionInstitucionComponent } from './views/conocimiento-institucional/opcion1/identificacion-institucion/identificacion-institucion.component';
import { IdentificacionSedeComponent } from './views/conocimiento-institucional/opcion1/identificacion-sede/identificacion-sede.component';

@NgModule({
  declarations: [
    AppComponent,
    LineamientosPoliticaComponent,
    CaracterizacionContextoComponent,
    IdentificacionRiesgoComponent,
    AnalisisRiesgoComponent,
    EvaluacionRiesgoComponent,
    ReporteTratamientoRiesgoComponent,
    PrepracionRespuestaEmergenciaComponent,
    EjecucionRespuestaComponent,
    PreparacionRecuperacionComponent,
    IdentificacionInstitucionComponent,
    IdentificacionSedeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
