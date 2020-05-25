import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { IdentificacionRiesgoService } from "src/app/services/gestion-riesgo/identificacion-riesgo.service";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { EvaluacionRiesgosService } from "src/app/services/gestion-riesgo/evaluacion-riesgos.service";

const PROBABILIDAD = [
  "casiseguro",
  "probable",
  "posible",
  "improbable",
  "raravez"
];
const IMPACTO = [
  "catastrofico",
  "mayor",
  "moderado",
  "menor",
  "insignificante"
];

const RIESGOS_MAP = {
  casiseguro: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: []
  },
  probable: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: []
  },
  posible: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: []
  },
  improbable: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: []
  },
  raravez: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: []
  }
};

@Component({
  selector: "app-nivel-riesgo-residual",
  templateUrl: "./nivel-riesgo-residual.component.html",
  styleUrls: ["./nivel-riesgo-residual.component.css"]
})
export class NivelRiesgoResidualComponent implements OnInit {
  idSede: string;
  riesgosMapeados;

  riesgosNoMapeados: Riesgo[] = [];

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _evaluacionRiesgoRiesgoService: EvaluacionRiesgosService
  ) {}

  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeRiesgos = this._evaluacionRiesgoRiesgoService
          .obtenerRiesgos(
            this.idSede,
            "riesgo-tipo-causas-solidez-disminuirImpacto-disminuirProbabilidad-tratamiento-proceso-probabilidad-nivelImpacto"
          )
          .subscribe((riesgos: Riesgo[]) => {
            if (riesgos) {
              this.mapearRiesgos(riesgos);
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

  mapearRiesgos(riesgos: Riesgo[]) {
    console.log(RIESGOS_MAP);
    console.log(riesgos);
    this.riesgosMapeados = JSON.parse(JSON.stringify(RIESGOS_MAP));

    riesgos.forEach(riesgo => {
      let solidez = riesgo.solidez;
      let disminuirImpacto = riesgo.disminuirImpacto;
      let disminuirProbabilidad = riesgo.disminuirProbabilidad;
      let imp = 0;
      let prob = 0;
      if (solidez && disminuirImpacto && disminuirProbabilidad) {
        solidez = solidez.toLowerCase();
        disminuirImpacto = disminuirImpacto.toLowerCase();
        disminuirProbabilidad = disminuirProbabilidad.toLowerCase();
        if (
          solidez == "fuerte" &&
          disminuirImpacto == "directamente" &&
          disminuirProbabilidad == "directamente"
        ) {
          prob += 2;
          imp += 2;
        } else if (
          solidez == "fuerte" &&
          disminuirImpacto == "directamente" &&
          disminuirProbabilidad == "indirectamente"
        ) {
          prob += 2;
          imp += 1;
        } else if (
          solidez == "fuerte" &&
          disminuirImpacto == "directamente" &&
          disminuirProbabilidad == "no disminuye"
        ) {
          prob += 2;
          imp += 0;
        } else if (
          solidez == "fuerte" &&
          disminuirImpacto == "no disminuye" &&
          disminuirProbabilidad == "directamente"
        ) {
          prob += 0;
          imp += 2;
        } else if (
          solidez == "moderado" &&
          disminuirImpacto == "directamente" &&
          disminuirProbabilidad == "directamente"
        ) {
          prob += 1;
          imp += 1;
        } else if (
          solidez == "moderado" &&
          disminuirImpacto == "directamente" &&
          disminuirProbabilidad == "indirectamente"
        ) {
          prob += 1;
          imp += 0;
        } else if (
          solidez == "moderado" &&
          disminuirImpacto == "directamente" &&
          disminuirProbabilidad == "no disminuye"
        ) {
          prob += 1;
          imp += 0;
        } else if (
          solidez == "moderado" &&
          disminuirImpacto == "no disminuye" &&
          disminuirProbabilidad == "directamente"
        ) {
          prob += 0;
          imp += 1;
        }
        const posProbInit = PROBABILIDAD.indexOf(
          riesgo.probabilidad.toLowerCase().replace(" ", "")
        );
        const posProbFinal = posProbInit + prob;
        const posImpInit = IMPACTO.indexOf(
          riesgo.nivelImpacto.toLowerCase().replace(" ", "")
        );
        const posImpFinal = posImpInit + imp;
        this.riesgosMapeados[
          PROBABILIDAD[
            posProbFinal > PROBABILIDAD.length - 1
              ? PROBABILIDAD.length - 1
              : posProbFinal
          ]
        ][
          IMPACTO[
            posImpFinal > IMPACTO.length - 1 ? IMPACTO.length - 1 : posImpFinal
          ]
        ].push(riesgo.riesgo);
      } else {
        this.riesgosNoMapeados.push(riesgo);
      }
    });
  }
}
