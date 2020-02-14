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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMeterialModule } from './shared/angular-material.module';
import { InfoVistaComponent } from './components/info-vista/info-vista.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { SliderRangeComponent } from './components/utils/slider-range/slider-range.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/utils/card/card.component';
import { ContextoInternoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/contexto-interno/contexto-interno.component';
import { ContextoExternoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/contexto-externo/contexto-externo.component';
import { ContextoProcesoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/contexto-proceso/contexto-proceso.component';
import { IdentificacionActivosSeguridadComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/identificacion-activos-seguridad/identificacion-activos-seguridad.component';

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
    IdentificacionSedeComponent,
    HeaderComponent,
    FooterComponent,
    InfoVistaComponent,
    CardTitleComponent,
    SliderRangeComponent,
    CardComponent,
    ContextoInternoComponent,
    ContextoExternoComponent,
    ContextoProcesoComponent,
    IdentificacionActivosSeguridadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMeterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
