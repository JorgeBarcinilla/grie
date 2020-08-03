import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";
import {
  Ejecucion,
  EjecucionRecuperacion
} from "src/app/models/ejecucionRecuperacion.model";
import { Res } from "src/app/models/res.model";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { EjecucionRecuperacionService } from "src/app/services/gestion-riesgo/ejecucionRecuperacion.service";
import { NotificacionService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-ejecucion-recuperacion",
  templateUrl: "./ejecucion-recuperacion.component.html",
  styleUrls: ["./ejecucion-recuperacion.component.css"]
})
export class EjecucionRecuperacionComponent implements OnInit {
  ejecucion = new Ejecucion();
  idSede: string;
  /*listaAcciones = [
    {
      necesidad: "UNA NECESIDAD",
      ejecutor: "Jorge LKuis PALACION",
      acciones: "uNA ACCION",
      diasEjecucion: "12-05-2021",
      seguimiento: {
        respuesta: "",
        accion: ""
      }
    }
  ];*/
  dataSourcesAcciones = new MatTableDataSource<Ejecucion>();
  displayedColumnsAcciones: string[] = [
    "necesidad",
    "ejecutor",
    "acciones",
    "fechaEjecucion",
    "seguimiento"
  ];

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _notificacionService: NotificacionService,
    private _ejecucionRecuperacion: EjecucionRecuperacionService
  ) {}

  subscribeIdSede: Subscription;
  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this._ejecucionRecuperacion
          .obtenerEjecucion(this.idSede)
          .subscribe((res: EjecucionRecuperacion) => {
            if (res == null) {
              const ejecucion = new EjecucionRecuperacion(this.idSede);
              this._ejecucionRecuperacion
                .crearEjecucion(ejecucion)
                .subscribe((res: string) => {
                  this.dataSourcesAcciones.data = ejecucion.ejecuciones;
                });
            } else {
              this.dataSourcesAcciones.data = res.ejecuciones;
            }
          });
      });
  }

  guardarEjecucion() {
    if (this.ejecucion.valid()) {
      this._ejecucionRecuperacion
        .guardarEjecucion(this.idSede, this.ejecucion.getValue())
        .subscribe((res: Res) => {
          this.dataSourcesAcciones.data.push(this.ejecucion.getValue());
          this.dataSourcesAcciones._updateChangeSubscription();
          this.ejecucion.reset();
          this._notificacionService.mostrarNotificacion(res.message, "success");
        });
    }
  }

  editarEjecucion(ejecucion: Ejecucion) {
    this._ejecucionRecuperacion
      .editarEjecucion(this.idSede, ejecucion)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });
  }
}
