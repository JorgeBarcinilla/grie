import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionRiesgoComponent } from "./gestion-riesgo.component";

const routes: Routes = [
  {
    path: "/",
    component: GestionRiesgoComponent,
    redirectTo: "lineamientosPolitica"
  },
  {
    path: "lineamientosPolitica",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(
        `./opcion1/lineamientos-politica/lineamientos-politica.module`
      ).then(m => m.LineamientosPoliticaModule)
  },
  {
    path: "caracterizacionContexto",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(
        `./opcion2/caracterizacion-contexto/caracterizacion-contexto.module`
      ).then(m => m.CaracterizacionContextoModule)
  },
  {
    path: "identificacionRiesgo",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(
        `./opcion2/identificacion-riesgo/identificacion-riesgo.module`
      ).then(m => m.IdentificacionRiesgoModule)
  },
  {
    path: "analisisRiesgo",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(`./opcion3/analisis-riesgo/analisis-riesgo.module`).then(
        m => m.AnalisisRiesgoModule
      )
  },
  {
    path: "evaluacionRiesgos",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(`./opcion3/evaluacion-riesgo/evaluacion-riesgo.module`).then(
        m => m.EvaluacionRiesgoModule
      )
  },
  {
    path: "reporteTratamientoRiesgo",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(
        `./opcion3/reporte-tratamiento-riesgo/reporte-tratamiento-riesgo.module`
      ).then(m => m.ReporteTratamientoRiesgoModule)
  },
  {
    path: "preparacionRespuestaEmergencia",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(
        `./opcion4/preparacion-respuesta-emergencia/preparacion-respuesta-emergencia.module`
      ).then(m => m.PreparacionRespuestaEmergenciaModule)
  },
  {
    path: "ejecucionRespuesta",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(`./opcion5/ejecucion-respuesta/ejecucion-respuesta.module`).then(
        m => m.EjecucionRespuestaModule
      )
  },
  {
    path: "preparacionRecuperacion",
    component: GestionRiesgoComponent,
    loadChildren: () =>
      import(
        `./opcion6/preparacion-recuperacion/preparacion-recuperacion.module`
      ).then(m => m.PreparacionRecuperacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRiesgoRoutingModule {}
