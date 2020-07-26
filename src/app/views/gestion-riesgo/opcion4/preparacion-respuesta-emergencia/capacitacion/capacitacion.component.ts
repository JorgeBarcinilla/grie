import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Capacitacion } from "src/app/models/preparacioRespuestaEmergencia.model";
import { Res } from "src/app/models/res.model";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { PreparacionRespuestaService } from "src/app/services/gestion-riesgo/preparacionRespuesta.service";
import { NotificacionService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-capacitacion",
  templateUrl: "./capacitacion.component.html",
  styleUrls: ["./capacitacion.component.css"]
})
export class CapacitacionComponent implements OnInit {
  @Input() capacitacion: Capacitacion;
  idSede: string;

  displayedColumnsCapacitacion: string[] = [
    "servicio",
    "nPersonasCapacitadas",
    "nPersonasCapacitar",
    "oferenteCapacitacion",
    "responsable",
    "fechaCapacitacion",
    "recursos"
  ];
  constructor(
    private _notificacionService: NotificacionService,
    private _preparacionRespuestaEmergenciaService: PreparacionRespuestaService,
    private _changeSedeService: ChangeSedeService
  ) {}

  subscribeIdSede: Subscription;
  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
      });
  }

  guardarCapacitacion() {
    this._preparacionRespuestaEmergenciaService
      .guardarCapacitacion(this.idSede, this.capacitacion)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });
  }
}
