import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CaracterizacionContextoService } from "src/app/services/gestion-riesgo/caracterizacion-contexto.service";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { Subscription } from "rxjs";
import { Res } from "src/app/models/res.model";
import { CaracterizacionContexto } from "src/app/models/caracterizacionContexto.model";

@Component({
  selector: "app-caracterizacion-contexto",
  templateUrl: "./caracterizacion-contexto.component.html",
  styleUrls: ["./caracterizacion-contexto.component.css"]
})
export class CaracterizacionContextoComponent implements OnInit, OnDestroy {
  idSede: string;
  idCaracterizacionContexto: string;
  esActualizar: boolean;

  formularioCaracterizacionContexto = new FormGroup({
    //CONTEXTO EXTERNO
    contextoExterno: new FormGroup({
      contextoPolitico: new FormControl(""),
      contextoEconomicoFinanciero: new FormControl(""),
      contextoTecnologico: new FormControl(""),
      contextoLegalReglamentario: new FormControl(""),
      //contextoOtro: new FormControl(""),
      contextoSocialCultural: new FormControl(""),
      contextoAmbiental: new FormControl("")
    }),

    //CONTEXTO INTERNO

    contextoInterno: new FormGroup({
      estructuraFisica: new FormControl(""),
      estructuraOrganizacional: new FormControl(""),
      financieros: new FormControl(""),
      comunidadEducativa: new FormControl(""),
      factoresEducativos: new FormControl(""),
      CRAE: new FormControl(""),
      comunicacionInterna: new FormControl("")
    }),

    //CONTEXTO DEL PROCESO

    contextoProceso: new FormGroup({
      procesos: new FormControl("")
    }),

    //CONTEXTO DEL PROCESO

    identificacionActivos: new FormGroup({
      activos: new FormControl("")
    })
  });

  subscribeIdSede: Subscription;
  subscribeCaracterizacionContexto: Subscription;

  constructor(
    private _caracterizacionContextoService: CaracterizacionContextoService,
    private _changeSedeService: ChangeSedeService,
    private _notificacionService: NotificacionService
  ) {}

  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeCaracterizacionContexto = this._caracterizacionContextoService
          .obtenerCaracterizacionContexto(this.idSede)
          .subscribe((caracterizacionContexto: CaracterizacionContexto) => {
            if (caracterizacionContexto && caracterizacionContexto != null) {
              this.idCaracterizacionContexto = caracterizacionContexto._id;
              this.esActualizar = true;
              for (let key in this.formularioCaracterizacionContexto.value) {
                for (let subkey in this.formularioCaracterizacionContexto.get(
                  key
                ).value) {
                  this.formularioCaracterizacionContexto
                    .get(key)
                    .get(subkey)
                    .setValue(caracterizacionContexto[key][subkey]);
                }
              }
            } else {
              this.idCaracterizacionContexto = undefined;
              this.esActualizar = false;
              this.formularioCaracterizacionContexto.reset();
            }
          });
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribeIdSede.unsubscribe();
    if (this.subscribeCaracterizacionContexto) {
      this.subscribeCaracterizacionContexto.unsubscribe();
    }
  }

  guardarCaracterizacionContexto() {
    const data = Object.assign(this.formularioCaracterizacionContexto.value, {
      idCampus: this.idSede
    });

    if (this.esActualizar && this.idCaracterizacionContexto) {
      this._caracterizacionContextoService
        .actualizarCaracterizacionContexto(this.idCaracterizacionContexto, data)
        .subscribe((res: Res) => {
          this._notificacionService.mostrarNotificacion(res.message, "info");
        });
    } else {
      this._caracterizacionContextoService
        .guardarCaracterizacionContexto(data)
        .subscribe((res: Res) => {
          this._notificacionService.mostrarNotificacion(res.message, "success");
        });
    }
  }
}
