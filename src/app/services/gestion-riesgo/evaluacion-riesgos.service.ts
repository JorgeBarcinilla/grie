import { Injectable } from "@angular/core";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root",
})
export class EvaluacionRiesgosService {
  constructor(private _globalService: GlobalService) {}

  guardarCriteriosCausas(riesgo: Riesgo) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/updateCausa/" + riesgo._id,
      "put",
      true,
      {
        causas: riesgo.causas,
        solidez: riesgo.solidez,
      }
    );
  }
}
