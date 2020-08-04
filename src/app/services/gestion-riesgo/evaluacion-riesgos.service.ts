import { Injectable } from "@angular/core";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { GlobalService } from "../global.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EvaluacionRiesgosService {
  private riesgos: Riesgo[] = [];

  constructor(private _globalService: GlobalService) {}

  obtenerRiesgos(idSede: string, keys?: string) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/get/" + idSede + "/" + keys,
      "get",
      true
    );
  }

  guardarCriteriosCausas(riesgo: Riesgo) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/updateCausa/" + riesgo._id,
      "put",
      true,
      {
        causas: riesgo.causas,
        solidez: riesgo.solidez
      }
    );
  }

  valorarControles(riesgo: Riesgo) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/valorarControles/" + riesgo._id,
      "put",
      true,
      {
        disminuirImpacto: riesgo.disminuirImpacto,
        disminuirProbabilidad: riesgo.disminuirProbabilidad
      }
    );
  }
  guardarTratamientoRiesgo(idRiesgo: string, data) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/tratarRiesgo/" + idRiesgo,
      "put",
      true,
      data
    );
  }
}
