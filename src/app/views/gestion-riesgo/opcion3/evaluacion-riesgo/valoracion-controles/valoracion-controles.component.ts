import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  MatPaginator,
  MatTableDataSource,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { Riesgo, Causa } from "src/app/models/identificacionRiesgo.model";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { IdentificacionRiesgoService } from "src/app/services/gestion-riesgo/identificacion-riesgo.service";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { Subscription } from "rxjs";
import { ModalControlesRiesgosComponent } from "../modals/modal-controles-riesgos/modal-controles-riesgos.component";
import { EvaluacionRiesgosService } from "src/app/services/gestion-riesgo/evaluacion-riesgos.service";
import { Res } from "src/app/models/res.model";
import { ValorarRiesgoComponent } from "../modals/valorar-riesgo/valorar-riesgo.component";

@Component({
  selector: "app-valoracion-controles",
  templateUrl: "./valoracion-controles.component.html",
  styleUrls: ["./valoracion-controles.component.css"]
})
export class ValoracionControlesComponent implements OnInit {
  @Input() formularioValoracionControles: FormGroup;

  idSede: string;
  riesgosGuardados = [];

  dataSourceRiesgos = new MatTableDataSource<Riesgo>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumnsRiesgos: string[] = [
    "riesgo",
    "tipo",
    "causas",
    "solidez",
    "valorar"
  ];

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _evaluacionRiesgoRiesgoService: EvaluacionRiesgosService,
    private _notificacionService: NotificacionService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.dataSourceRiesgos.paginator = this.paginator;
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.obtenerRiesgos();
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

  obtenerRiesgos() {
    this.subscribeRiesgos = this._evaluacionRiesgoRiesgoService
      .obtenerRiesgos(
        this.idSede,
        "riesgo-tipo-causas-solidez-disminuirImpacto-disminuirProbabilidad-tratamiento-proceso-probabilidad-nivelImpacto"
      )
      .subscribe((riesgos: Riesgo[]) => {
        if (Array.isArray(riesgos)) {
          this.riesgosGuardados = riesgos;
        } else {
          this.riesgosGuardados = [];
        }
        this.dataSourceRiesgos.data = this.riesgosGuardados;
      });
  }

  establecerControl(riesgo: Riesgo, causa): void {
    const dialogRef = this.dialog.open(ModalControlesRiesgosComponent, {
      data: causa
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        causa.control = data;
        this.establecerSolidezRiesgo(riesgo);
        this._evaluacionRiesgoRiesgoService
          .guardarCriteriosCausas(riesgo)
          .subscribe((res: Res) => {
            this._notificacionService.mostrarNotificacion(res.message, "info");
            this.obtenerRiesgos();
          });
      }
    });
  }

  valorarControles(riesgo: Riesgo): void {
    const dialogRef = this.dialog.open(ValorarRiesgoComponent, {
      data: riesgo
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        riesgo = Object.assign(riesgo, data);
        this._evaluacionRiesgoRiesgoService
          .valorarControles(riesgo)
          .subscribe((res: Res) => {
            this._notificacionService.mostrarNotificacion(res.message, "info");
          });
      }
    });
  }

  establecerSolidezRiesgo(riesgo: Riesgo) {
    const causas = riesgo.causas;
    let prom = 0;
    for (let index = 0; index < causas.length; index++) {
      const element = causas[index];
      if (element.control) {
        switch (element.control.solidez) {
          case "fuerte":
            prom += 100;
            break;
          case "moderado":
            prom += 50;
            break;

          default:
            break;
        }
      } else {
        return;
      }
    }

    prom = prom / causas.length;

    if (prom > 99) {
      riesgo.solidez = "Fuerte";
    } else if (prom > 49) {
      riesgo.solidez = "Moderado";
    } else {
      riesgo.solidez = "Débil";
    }
  }
}
