import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { Subscription } from "rxjs";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { EvaluacionRiesgosService } from "src/app/services/gestion-riesgo/evaluacion-riesgos.service";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { ReporteTratamientoRiesgoService } from "src/app/services/gestion-riesgo/reporte-tratamiento-riesgo.service";

@Component({
  selector: "app-reporte-tratamiento-riesgo",
  templateUrl: "./reporte-tratamiento-riesgo.component.html",
  styleUrls: ["./reporte-tratamiento-riesgo.component.css"]
})
export class ReporteTratamientoRiesgoComponent implements OnInit {
  visible: boolean;

  idSede: string;
  riesgosGuardados = [];
  titleVerRiesgo: String;

  dataSourceRiesgos = new MatTableDataSource<Riesgo>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumnsRiesgos: string[] = [
    "riesgo",
    "tipo",
    "proceso",
    "descripcion",
    "solidez",
    "ver"
  ];

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;

  dataReport = [];

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _ReporteTratamientoRiesgoService: ReporteTratamientoRiesgoService,
    private _notificacionService: NotificacionService
  ) {}

  ngOnInit() {
    this.dataSourceRiesgos.paginator = this.paginator;
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeRiesgos = this._ReporteTratamientoRiesgoService
          .obtenerRiesgos(this.idSede)
          .subscribe((riesgos: Riesgo[]) => {
            if (Array.isArray(riesgos)) {
              this.riesgosGuardados = riesgos;
            } else {
              this.riesgosGuardados = [];
            }
            this.dataSourceRiesgos.data = this.riesgosGuardados;
          });
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribeIdSede.unsubscribe();
    if (this.subscribeRiesgos) {
      this.subscribeRiesgos.unsubscribe();
    }
  }

  close() {
    this.visible = false;
  }
  open(riesgo: Riesgo) {
    this.visible = true;
    this.titleVerRiesgo = riesgo.riesgo;
    this.createReport(riesgo);
  }

  createReport(riesgo: Riesgo) {
    this.dataReport = [
      { name: "Riesgo", content: [riesgo.riesgo] },
      { name: "Clasificación", content: [riesgo.tipo] },
      { name: "Probabilidad", content: [riesgo.probabilidad] },
      { name: "Impacto", content: [riesgo.nivelImpacto] },
      { name: "Causas", content: riesgo.causas.map(causa => causa.nombre) },
      {
        name: "Opción manejo",
        content: [riesgo.tratamiento.estado]
      },
      {
        name: "Actividad de control",
        content: riesgo.causas.map(causa =>
          causa.accion ? causa.accion.actividadControl : "No aplica"
        )
      },
      {
        name: "Soporte",
        content: riesgo.causas.map(causa =>
          causa.accion ? causa.accion.soporte : "No aplica"
        )
      },
      {
        name: "Responsable",
        content: riesgo.causas.map(causa =>
          causa.accion ? causa.accion.responsable : "No aplica"
        )
      },
      {
        name: "Tiempo",
        content: riesgo.causas.map(causa =>
          causa.accion ? causa.accion.tiempoEjecucion : "No aplica"
        )
      },

      { name: "Riesgo residual", content: ["6-1"] },

      { name: "Indicador", content: ["12-1"] }
    ];
  }
}
