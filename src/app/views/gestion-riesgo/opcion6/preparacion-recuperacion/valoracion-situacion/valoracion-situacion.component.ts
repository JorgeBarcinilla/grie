import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { ReporteDaniosService } from "src/app/services/gestion-riesgo/reporteDanios.service";
import { Subscription } from "rxjs";
import { ValoracionSituacionService } from "src/app/services/gestion-riesgo/valoracion-situacion.service";
import {
  Valoracion,
  ValoracionSituacion
} from "src/app/models/valoracionSituacion.model";
import { Res } from "src/app/models/res.model";

@Component({
  selector: "app-valoracion-situacion",
  templateUrl: "./valoracion-situacion.component.html",
  styleUrls: ["./valoracion-situacion.component.css"]
})
export class ValoracionSituacionComponent implements OnInit {
  idSede: string;

  valoraciones: Valoracion[];
  displayedColumnsValoracion: string[] = ["informacion", "estado", "detalle"];
  constructor(
    private _changeSedeService: ChangeSedeService,
    private _notificacionService: NotificacionService,
    private _valoracionSituacion: ValoracionSituacionService
  ) {}

  subscribeIdSede: Subscription;
  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this._valoracionSituacion
          .obtenerValoracion(this.idSede)
          .subscribe((res: ValoracionSituacion) => {
            if (res == null) {
              const valoracionSituacion = new ValoracionSituacion(this.idSede);
              this._valoracionSituacion
                .crearValoracion(valoracionSituacion)
                .subscribe((res: string) => {
                  this.valoraciones = valoracionSituacion.valoraciones;
                });
            } else {
              this.valoraciones = res.valoraciones;
            }
          });
      });
  }

  actualizarValoraciones() {
    this._valoracionSituacion
      .guardarValoracion(this.idSede, this.valoraciones)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });
  }
}
