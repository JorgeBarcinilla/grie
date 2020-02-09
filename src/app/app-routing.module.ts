import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificacionInstitucionComponent } from './views/conocimiento-institucional/opcion1/identificacion-institucion/identificacion-institucion.component';
import { IdentificacionSedeComponent } from './views/conocimiento-institucional/opcion1/identificacion-sede/identificacion-sede.component';
import { LineamientosPoliticaComponent } from './views/gestion-riesgo/opcion1/lineamientos-politica/lineamientos-politica.component';
import { CaracterizacionContextoComponent } from './views/gestion-riesgo/opcion2/caracterizacion-contexto/caracterizacion-contexto.component';
import { IdentificacionRiesgoComponent } from './views/gestion-riesgo/opcion2/identificacion-riesgo/identificacion-riesgo.component';
import { AnalisisRiesgoComponent } from './views/gestion-riesgo/opcion3/analisis-riesgo/analisis-riesgo.component';
import { EvaluacionRiesgoComponent } from './views/gestion-riesgo/opcion3/evaluacion-riesgo/evaluacion-riesgo.component';
import { ReporteTratamientoRiesgoComponent } from './views/gestion-riesgo/opcion3/reporte-tratamiento-riesgo/reporte-tratamiento-riesgo.component';
import { PrepracionRespuestaEmergenciaComponent } from './views/gestion-riesgo/opcion4/prepracion-respuesta-emergencia/prepracion-respuesta-emergencia.component';
import { EjecucionRespuestaComponent } from './views/gestion-riesgo/opcion5/ejecucion-respuesta/ejecucion-respuesta.component';
import { PreparacionRecuperacionComponent } from './views/gestion-riesgo/opcion6/preparacion-recuperacion/preparacion-recuperacion.component';


const routes: Routes = [
  {
    path : 'identificacionInstitucion',
    component : IdentificacionInstitucionComponent
  },
  {
    path : 'identificacionSede',
    component : IdentificacionSedeComponent
  },
  {
    path : 'lineamientosPolitica',
    component : LineamientosPoliticaComponent
  },
  {
    path : 'caracterizacionContexto',
    component : CaracterizacionContextoComponent
  },
  {
    path : 'identificacionRiesgo',
    component : IdentificacionRiesgoComponent
  },
  {
    path : 'analisisRiesgo',
    component : AnalisisRiesgoComponent
  },
  {
    path : 'evaluacionRiesgos',
    component : EvaluacionRiesgoComponent
  },
  {
    path : 'reporteTratamientoRiesgo',
    component : ReporteTratamientoRiesgoComponent
  },
  {
    path : 'preparacionRespuestaEmergencia',
    component : PrepracionRespuestaEmergenciaComponent
  },
  {
    path : 'ejecucionRespuesta',
    component : EjecucionRespuestaComponent
  },
  {
    path : 'preparacionRecuperacion',
    component : PreparacionRecuperacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //enableTracing : true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
