import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { IdentificacionRiesgoService } from "src/app/services/gestion-riesgo/identificacion-riesgo.service";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { AnalisisRiesgoService } from "src/app/services/gestion-riesgo/analisis-riesgo.service";

const RIESGOS_MAP = {
  casiseguro: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: [],
  },
  probable: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: [],
  },
  posible: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: [],
  },
  improbable: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: [],
  },
  raravez: {
    insignificante: [],
    menor: [],
    moderado: [],
    mayor: [],
    catastrofico: [],
  },
};

@Component({
  selector: "app-estimar-riesgo-inicial",
  templateUrl: "./estimar-riesgo-inicial.component.html",
  styleUrls: ["./estimar-riesgo-inicial.component.css"],
})
export class EstimarRiesgoInicialComponent implements OnInit {
  idSede: string;
  riesgosMapeados;

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;

  constructor(
    private _changeSedeService: ChangeSedeService,
    private _analisisRiesgoRiesgoService: AnalisisRiesgoService
  ) {}

  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeRiesgos = this._analisisRiesgoRiesgoService
          .obtenerRiesgos(this.idSede, "probabilidad-nivelImpacto-riesgo")
          .subscribe((riesgos: Riesgo[]) => {
            if (riesgos) {
              this.mapearRiesgos(riesgos);
            }
          });
      });
  }

  mapearRiesgos(riesgos) {
    console.log(RIESGOS_MAP);
    this.riesgosMapeados = JSON.parse(JSON.stringify(RIESGOS_MAP));
    riesgos.forEach((riesgo) => {
      const probabilidad = riesgo.probabilidad
        .toLocaleLowerCase()
        .replace(" ", "");
      const nivelImpacto = riesgo.nivelImpacto
        .toLocaleLowerCase()
        .replace(" ", "");

      this.riesgosMapeados[probabilidad][nivelImpacto].push(riesgo.riesgo);
    });
  }
}
