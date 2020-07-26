import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Subscription } from "rxjs";
import {
  ServicioExternoRespuestaEmergencia,
  ServicioInternoRespuestaEmergencia,
  ServicioRespuestaEmergencia
} from "src/app/models/preparacioRespuestaEmergencia.model";
import { Res } from "src/app/models/res.model";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { PreparacionRespuestaService } from "src/app/services/gestion-riesgo/preparacionRespuesta.service";
import { NotificacionService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-servicios-respuesta-emergencias",
  templateUrl: "./servicios-respuesta-emergencias.component.html",
  styleUrls: ["./servicios-respuesta-emergencias.component.css"]
})
export class ServiciosRespuestaEmergenciasComponent implements OnInit {
  @Input()
  serviciosInternosRespuestaEmergencias: ServicioInternoRespuestaEmergencia[];
  //@Input()
  //serviciosExternosRespuestaEmergencias: ServicioExternoRespuestaEmergencia[];
  idSede: string;
  @Input() set serviciosExternosRespuestaEmergencias(
    value: ServicioExternoRespuestaEmergencia[]
  ) {
    this.dataSourceDirectorio.data = value;
    //this.dataSourceRequerimientos = new MatTableDataSource(value);
  }

  servicioExterno = new ServicioExternoRespuestaEmergencia();

  displayedColumnsServiciosRespuestaEmergencia: string[] = [
    "organizacion",
    "funciones",
    "nombreResponsables",
    "suplentes"
  ];
  dataSourceDirectorio = new MatTableDataSource<
    ServicioExternoRespuestaEmergencia
  >();
  displayedColumnsDirectorio: string[] = [
    "institucion",
    "nombreContacto",
    "telefono"
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

  agregarServicioExterno() {
    if (this.servicioExterno.valid()) {
      this._preparacionRespuestaEmergenciaService
        .guardarServicioExterno(this.idSede, this.servicioExterno.getValue())
        .subscribe((res: Res) => {
          this.dataSourceDirectorio.data.push(this.servicioExterno.getValue());
          this.dataSourceDirectorio._updateChangeSubscription();
          this.servicioExterno.reset();
          this._notificacionService.mostrarNotificacion(res.message, "success");
        });
    }
  }

  guardarServiciosInternos() {
    this._preparacionRespuestaEmergenciaService
      .guardarServiciosInternos(
        this.idSede,
        this.serviciosInternosRespuestaEmergencias
      )
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });
  }
}
