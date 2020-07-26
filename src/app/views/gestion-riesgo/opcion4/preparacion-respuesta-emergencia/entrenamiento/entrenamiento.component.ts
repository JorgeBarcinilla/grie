import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";
import { Entrenamiento } from "src/app/models/preparacioRespuestaEmergencia.model";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { PreparacionRespuestaService } from "src/app/services/gestion-riesgo/preparacionRespuesta.service";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { Subscription } from "rxjs";
import { Res } from "src/app/models/res.model";

@Component({
  selector: "app-entrenamiento",
  templateUrl: "./entrenamiento.component.html",
  styleUrls: ["./entrenamiento.component.css"]
})
export class EntrenamientoComponent implements OnInit {
  @Input() entrenamiento: Entrenamiento;
  idSede: string;
  displayedColumnsEntrenamiento: string[] = [
    "actividad",
    "tiempo",
    "dificultades",
    "accionesMejoramiento",
    "responsable",
    "fechaMejora",
    "recursos"
  ];

  constructor(
    private _notificacionService: NotificacionService,
    private _preparacionRespuestaEmergenciaService: PreparacionRespuestaService,
    private _changeSedeService: ChangeSedeService
  ) {}
  subscribeIdSede: Subscription;
  ngOnInit() {
    console.log(this.entrenamiento);
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
      });
  }

  guardarEntrenamiento() {
    this._preparacionRespuestaEmergenciaService
      .guardarEntrenamiento(this.idSede, this.entrenamiento)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });
  }
}
