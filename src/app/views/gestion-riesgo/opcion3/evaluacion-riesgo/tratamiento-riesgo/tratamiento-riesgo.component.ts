import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { Subscription } from "rxjs";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { EvaluacionRiesgosService } from "src/app/services/gestion-riesgo/evaluacion-riesgos.service";
import { MatDialog } from "@angular/material";
import { ModalTratamientoRiesgoComponent } from "../modals/modal-tratamiento-riesgo/modal-tratamiento-riesgo.component";
import { Res } from "src/app/models/res.model";
import { NotificacionService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-tratamiento-riesgo",
  templateUrl: "./tratamiento-riesgo.component.html",
  styleUrls: ["./tratamiento-riesgo.component.css"]
})
export class TratamientoRiesgoComponent implements OnInit {
  listaProcesos: any = [
    ["Direccionamiento estratégico y horizonte institucional", []],
    ["Gestión estratégica", []],
    ["Gobierno escolar", []],
    ["Cultura institucional", []],
    ["Clima escolar", []],
    ["Relaciones con el entorno", []],
    ["Diseño pedagógico", []],
    ["Prácticas pedagógicas", []],
    ["Gestión de aula", []],
    ["Seguimiento académico", []],
    ["Apoyo a la gestión académica", []],
    ["Administración de planta física y recursos", []],
    ["Administración de servicios complementarios", []],
    ["Talento humano", []],
    ["Apoyo financiero y contable", []],
    ["Inclusión", []],
    ["Proyección a la comunidad", []],
    ["Participación y convivencia", []],
    ["Prevención de riesgos", []]
  ];

  idSede: string;
  @Input() formularioTratamientoRiesgo: FormGroup;
  riesgos: Riesgo[] = [];

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _evaluacionRiesgoRiesgoService: EvaluacionRiesgosService,
    private _notificacionService: NotificacionService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeRiesgos = this._evaluacionRiesgoRiesgoService
          .obtenerRiesgos(
            this.idSede,
            "riesgo-tipo-causas-solidez-disminuirImpacto-disminuirProbabilidad-tratamiento-proceso"
          )
          .subscribe((riesgos: Riesgo[]) => {
            if (riesgos) {
              this.riesgos = riesgos;
              this.riesgos.forEach(riesgo => {
                this.listaProcesos.forEach(proceso => {
                  console.log(proceso[0] + "-" + riesgo.proceso);
                  if (proceso[0] == riesgo.proceso) {
                    proceso[1].push(riesgo);
                  }
                });
              });
            }
          });
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

  tratarRiesgo(riesgo: Riesgo) {
    const dialogRef = this.dialog.open(ModalTratamientoRiesgoComponent, {
      data: riesgo
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this._evaluacionRiesgoRiesgoService
          .guardarTratamientoRiesgo(riesgo._id, data)
          .subscribe((res: Res) => {
            this._notificacionService.mostrarNotificacion(res.message, "info");
          });
      }
    });
  }
}
