import { Injectable } from "@angular/core";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { BehaviorSubject } from "rxjs";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root",
})
export class ReporteTratamientoRiesgoService {
  constructor(private _globalService: GlobalService) {}

  obtenerRiesgos(idSede: string, keys?: string) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/get/" + idSede + "/" + keys,
      "get",
      true
    );
  }
}
