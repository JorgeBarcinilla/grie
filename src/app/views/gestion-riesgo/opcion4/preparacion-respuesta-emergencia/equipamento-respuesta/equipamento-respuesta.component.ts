import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";
import { EquipamientoRespuesta } from "src/app/models/preparacioRespuestaEmergencia.model";
import { Subscription } from "rxjs";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { PreparacionRespuestaService } from "src/app/services/gestion-riesgo/preparacionRespuesta.service";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { Res } from "src/app/models/res.model";

@Component({
  selector: "app-equipamento-respuesta",
  templateUrl: "./equipamento-respuesta.component.html",
  styleUrls: ["./equipamento-respuesta.component.css"]
})
export class EquipamentoRespuestaComponent implements OnInit {
  @Input() equipamientoRespuesta: EquipamientoRespuesta;
  idSede: string;

  //INCENDIO
  displayedColumnsEquipamientoIncendio: string[] = [
    "descripcion",
    "verificacion",
    "equiposRequeridos",
    "responsable",
    "fechaAdquicicion",
    "recursos"
  ];

  //PRIMEROS AUXILIOS
  displayedColumnsEquipamientoAuxilios: string[] = [
    "descripcion",
    "verificacion",
    "equiposRequeridos",
    "responsable",
    "fechaAdquicicion",
    "recursos"
  ];

  //Necesidades de señalización
  displayedColumnsEquipamientoSenalizacion: string[] = [
    "descripcion",
    "senalesExistentes",
    "senalesRequeridas",
    "responsable",
    "fechaAdquicicion",
    "recursos"
  ];

  //Necesidades del sistema de alarma
  displayedColumnsEquipamientoAlarma: string[] = [
    "descripcion",
    "verificacion",
    "modificaciones",
    "responsable",
    "fechaMejora",
    "recursos"
  ];

  //  Necesidades de equipos para comunicaciones
  displayedColumnComunicaciones: string[] = [
    "descripcion",
    "verificacion",
    "equiposRequeridos",
    "responsable",
    "fechaAdquisicion",
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

  guardarEquipamiento() {
    this._preparacionRespuestaEmergenciaService
      .guardarEquipamiento(this.idSede, this.equipamientoRespuesta)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });
  }
}
