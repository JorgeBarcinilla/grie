import { Injectable } from "@angular/core";
import {
  Ejecucion,
  EjecucionRecuperacion
} from "src/app/models/ejecucionRecuperacion.model";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class EjecucionRecuperacionService {
  constructor(private _globalService: GlobalService) {}

  crearEjecucion(ejecucion: EjecucionRecuperacion) {
    return this._globalService.getQuery(
      "/ejecucionRespuesta/create",
      "post",
      true,
      ejecucion
    );
  }

  obtenerEjecucion(idSede: string) {
    return this._globalService.getQuery(
      "/ejecucionRespuesta/get/" + idSede,
      "get",
      true
    );
  }

  guardarEjecucion(idCampus: string, ejecucion: Ejecucion) {
    return this._globalService.getQuery(
      "/ejecucionRespuesta/guardar/" + idCampus,
      "post",
      true,
      ejecucion
    );
  }

  editarEjecucion(idCampus: string, ejecucion: Ejecucion) {
    return this._globalService.getQuery(
      "/ejecucionRespuesta/editar/" + idCampus,
      "put",
      true,
      ejecucion
    );
  }
}
