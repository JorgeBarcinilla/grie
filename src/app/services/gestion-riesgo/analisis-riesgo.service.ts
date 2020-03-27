import { Injectable } from "@angular/core";
import { GlobalService } from "../global.service";
import { DeterminarProbabilidad } from "src/app/models/analisisRiesgo.model";

@Injectable({
  providedIn: "root"
})
export class AnalisisRiesgoService {
  constructor(private _globalService: GlobalService) {}

  guardarProbabilidad(data: DeterminarProbabilidad[]) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/guardarProbabilidad",
      "put",
      true,
      {
        riesgos: data
      }
    );
  }
}
