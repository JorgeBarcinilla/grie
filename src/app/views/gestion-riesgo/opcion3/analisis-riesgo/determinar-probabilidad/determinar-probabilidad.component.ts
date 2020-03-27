import { Component, OnInit, Input, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";
import { IdentificacionRiesgoService } from "src/app/services/gestion-riesgo/identificacion-riesgo.service";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { Subscription } from "rxjs";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { DeterminarProbabilidad } from "src/app/models/analisisRiesgo.model";
import { AnalisisRiesgoService } from "src/app/services/gestion-riesgo/analisis-riesgo.service";
import { Res } from "src/app/models/res.model";

export interface DataElementProbabilidadRiesgos {
  id: string;
  riesgo: string;
  formGroup: { name: string; formControls: ["probabilidad", "nivelImpacto"] };
  //impacto:{name: string, formControls:['impacto']}
}

@Component({
  selector: "app-determinar-probabilidad",
  templateUrl: "./determinar-probabilidad.component.html",
  styleUrls: ["./determinar-probabilidad.component.css"]
})
export class DeterminarProbabilidadComponent implements OnInit {
  idSede: string;

  listaRiesgos = [];
  dataSourcesRiesgos = new MatTableDataSource<DataElementProbabilidadRiesgos>();
  displayedColumnsRiesgos: string[] = ["riesgo", "probabilidad", "impacto"];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  listaProbabilidades: DeterminarProbabilidad[] = [];

  listaFrecuencia = [
    "Casi seguro",
    "Probable",
    "Posible",
    "Improbable",
    "Rara vez"
  ];
  listaImpacto = [
    "Catastrofico",
    "Mayor",
    "Moderado",
    "Menor",
    "Insignificante"
  ];

  formParcialDeterminarProbabilidad = new FormGroup({});

  constructor(
    private _operacionesTabla: OperacionesTablaService,
    private _changeSedeService: ChangeSedeService,
    private _identificacionRiesgoRiesgoService: IdentificacionRiesgoService,
    private _analisisRiesgoRiesgoService: AnalisisRiesgoService,
    private _notificacionService: NotificacionService
  ) {}

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;

  ngOnInit() {
    this.dataSourcesRiesgos.paginator = this.paginator;
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeRiesgos = this._identificacionRiesgoRiesgoService
          .obtenerRiesgos(this.idSede)
          .subscribe((riesgos: Riesgo[]) => {
            if (Array.isArray(riesgos)) {
              riesgos.forEach(riesgo => {
                const row = {
                  id: riesgo._id,
                  riesgo: riesgo.riesgo,
                  formGroup: {
                    name: riesgo.riesgo.replace(" ", "").toLowerCase(),
                    formControls: ["probabilidad", "nivelImpacto"]
                  }
                };
                this.listaRiesgos.push(row);
              });
              this._operacionesTabla.buildForm(
                this.formParcialDeterminarProbabilidad,
                this.listaRiesgos
              );
              riesgos.forEach(riesgo => {
                if (riesgo.nivelImpacto) {
                  this.formParcialDeterminarProbabilidad
                    .get(riesgo.riesgo.replace(" ", "").toLowerCase())
                    .get("nivelImpacto")
                    .setValue(riesgo.nivelImpacto);
                  if (riesgo.tipo == "Corrupcion") {
                    this.formParcialDeterminarProbabilidad
                      .get(riesgo.riesgo.replace(" ", "").toLowerCase())
                      .get("nivelImpacto")
                      .disable();
                  }
                }
                if (riesgo.probabilidad) {
                  this.formParcialDeterminarProbabilidad
                    .get(riesgo.riesgo.replace(" ", "").toLowerCase())
                    .get("probabilidad")
                    .setValue(riesgo.probabilidad);
                }
              });
              this.dataSourcesRiesgos.data = this.listaRiesgos;
            } else {
              this.listaRiesgos = [];
            }
          });
      });
  }

  guardarDeterminarProbabilidad() {
    for (let key in this.formParcialDeterminarProbabilidad.value) {
      const id = this.listaRiesgos.find(riesgo => {
        return riesgo.formGroup.name == key;
      }).id;
      console.log(id);
      this.formParcialDeterminarProbabilidad.value[key]["id"] = id;
      this.listaProbabilidades.push(
        this.formParcialDeterminarProbabilidad.value[key]
      );
    }

    this._analisisRiesgoRiesgoService
      .guardarProbabilidad(this.listaProbabilidades)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "info");
      });
  }
}
