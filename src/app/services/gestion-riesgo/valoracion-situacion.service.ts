import { Injectable } from "@angular/core";
import {
  Valoracion,
  ValoracionSituacion
} from "src/app/models/valoracionSituacion.model";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class ValoracionSituacionService {
  constructor(private _globalService: GlobalService) {}

  crearValoracion(valoracionSituacion: ValoracionSituacion) {
    return this._globalService.getQuery(
      "/valoracionSituacion/create",
      "post",
      true,
      valoracionSituacion
    );
  }

  obtenerValoracion(idSede: string) {
    return this._globalService.getQuery(
      "/valoracionSituacion/get/" + idSede,
      "get",
      true
    );
  }

  guardarValoracion(idCampus: string, valoraciones: Valoracion[]) {
    return this._globalService.getQuery(
      "/valoracionSituacion/guardar/" + idCampus,
      "post",
      true,
      {
        data: valoraciones
      }
    );
  }
}
