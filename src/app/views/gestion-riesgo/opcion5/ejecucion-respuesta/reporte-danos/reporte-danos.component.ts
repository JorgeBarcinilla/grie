import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import {
  Edificacion,
  Reporte,
  ReporteDanio
} from "src/app/models/reporteDanios.model";
import { Res } from "src/app/models/res.model";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { ReporteDaniosService } from "src/app/services/gestion-riesgo/reporteDanios.service";
import { NotificacionService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-reporte-danos",
  templateUrl: "./reporte-danos.component.html",
  styleUrls: ["./reporte-danos.component.css"]
})
export class ReporteDanosComponent implements OnInit {
  reporte = new Reporte();
  edificacion = new Edificacion();
  idSede: string;

  fenomenos = [
    "Sismo",
    "Inundación",
    "Deslizamiento",
    "Avalancha",
    "Accidente de transito",
    "Contaminación",
    "Vendaval",
    "Tormenta eléctrica",
    "Caída del árbol",
    "Incendio forestal",
    "Toma armada",
    "Descarga eléctrica",
    "Incendio estructural",
    "Explosión",
    "Estampida de estudiantes",
    "Accidente de laboratorio",
    "Atentado terrorista",
    "Otro"
  ];

  tiposRespuestas = [];

  edificaciones = [
    "Almacén",
    "Auditorio",
    "Baño",
    "Biblioteca",
    "Bodega",
    "Cafetería",
    "Canchas y/o polideportivo",
    "Cocina",
    "Comedor",
    "Enfermería",
    "Gimnasio",
    "Laboratorio",
    "Oficina",
    "Parqueadero",
    "Punto de primeros auxilios",
    "Sala de informática",
    "Sala de profesores",
    "Salón",
    "Salón de arte",
    "Garitas (vigilancia)"
  ];

  listaEdidficacionesAfectadas = [];

  dataSourcesReportes = new MatTableDataSource<Reporte>();
  displayedColumnsReportes: string[] = [
    "fecha",
    "fenomeno",
    "serviciosSolicitados",
    "edificacionesAfectadas",
    "descripcion"
  ];

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _notificacionService: NotificacionService,
    private _reporteDanioService: ReporteDaniosService
  ) {}

  subscribeIdSede: Subscription;
  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this._reporteDanioService
          .obtenerReportesDanio(this.idSede)
          .subscribe((res: ReporteDanio) => {
            if (res == null) {
              const reporteDanio = new ReporteDanio(this.idSede);
              this._reporteDanioService
                .crearReportesDanio(reporteDanio)
                .subscribe((res: string) => {
                  this.dataSourcesReportes.data = reporteDanio.reportes;
                });
            } else {
              this.dataSourcesReportes.data = res.reportes;
            }
          });
      });
  }

  agregarEdificacion() {
    if (this.edificacion.valid()) {
      this.reporte.edificacionesAfectadas.push(this.edificacion.getValue());
      this.edificacion.reset();
    }
  }

  eliminarEdificacion(edificacion: Edificacion) {
    this.reporte.edificacionesAfectadas = this.reporte.edificacionesAfectadas.filter(
      ed => {
        return ed != edificacion;
      }
    );
  }

  agregarReporte() {
    if (this.reporte.valid()) {
      this._reporteDanioService
        .guardarReporteDanio(this.idSede, this.reporte.getValue())
        .subscribe((res: Res) => {
          this.dataSourcesReportes.data.push(this.reporte.getValue());
          this.dataSourcesReportes._updateChangeSubscription();
          this.reporte.reset();
          this._notificacionService.mostrarNotificacion(res.message, "success");
        });
    }
  }
}
