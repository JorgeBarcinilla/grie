import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoVistaComponent } from './components/info-vista/info-vista.component';
import { ImageExampleComponent } from './components/utils/image-example/image-example.component';
import { AppMeterialModule } from './shared/angular-material.module';
import { IdentificacionInstitucionComponent } from './views/conocimiento-institucional/opcion1/identificacion-institucion/identificacion-institucion.component';
import { IdentificacionSedeComponent } from './views/conocimiento-institucional/opcion1/identificacion-sede/identificacion-sede.component';
import { LineamientosPoliticaComponent } from './views/gestion-riesgo/opcion1/lineamientos-politica/lineamientos-politica.component';
import { CaracterizacionContextoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/caracterizacion-contexto.component';
import { ContextoExternoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/contexto-externo/contexto-externo.component';
import { ContextoInternoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/contexto-interno/contexto-interno.component';
import { ContextoProcesoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/contexto-proceso/contexto-proceso.component';
import { IdentificacionActivosSeguridadComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/identificacion-activos-seguridad/identificacion-activos-seguridad.component';
import { IdentificacionRiesgoComponent } from './views/gestion-riesgo/opcion2/identificacion-riesgo/identificacion-riesgo.component';
import { AnalisisRiesgoComponent } from './views/gestion-riesgo/opcion3/analisis-riesgo/analisis-riesgo.component';
import { EvaluacionRiesgoComponent } from './views/gestion-riesgo/opcion3/evaluacion-riesgo/evaluacion-riesgo.component';
import { ReporteTratamientoRiesgoComponent } from './views/gestion-riesgo/opcion3/reporte-tratamiento-riesgo/reporte-tratamiento-riesgo.component';
import { PrepracionRespuestaEmergenciaComponent } from './views/gestion-riesgo/opcion4/prepracion-respuesta-emergencia/prepracion-respuesta-emergencia.component';
import { EjecucionRespuestaComponent } from './views/gestion-riesgo/opcion5/ejecucion-respuesta/ejecucion-respuesta.component';
import { PreparacionRecuperacionComponent } from './views/gestion-riesgo/opcion6/preparacion-recuperacion/preparacion-recuperacion.component';
import { ButtonExampleComponent } from './components/utils/button-example/button-example.component';



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
    ContextoInternoComponent,
    ContextoExternoComponent,
    ContextoProcesoComponent,
    IdentificacionActivosSeguridadComponent,
    ImageExampleComponent,
    ButtonExampleComponent
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
  entryComponents: [ImageExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
