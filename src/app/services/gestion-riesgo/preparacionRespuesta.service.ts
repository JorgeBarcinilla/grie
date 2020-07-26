import { Injectable } from "@angular/core";
import {
  Capacitacion,
  PreparacionRespuestaEmergencia,
  ServicioExternoRespuestaEmergencia,
  ServicioInternoRespuestaEmergencia
} from "src/app/models/preparacioRespuestaEmergencia.model";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class PreparacionRespuestaService {
  constructor(private _globalService: GlobalService) {}

  obtenerPreparacionRespuesta(idSede: string) {
    return this._globalService.getQuery(
      "/preparacionRespuesta/get/" + idSede,
      "get",
      true
    );
  }

  crearPreparacionRespuesta(
    preparacionRespuesta: PreparacionRespuestaEmergencia
  ) {
    return this._globalService.getQuery(
      "/preparacionRespuesta/create",
      "post",
      true,
      preparacionRespuesta
    );
  }

  guardarServiciosInternos(
    idCampus: string,
    serviciosInternos: ServicioInternoRespuestaEmergencia[]
  ) {
    return this._globalService.getQuery(
      "/preparacionRespuesta/servicioRespuesta/serviciosInternos/guardar/" +
        idCampus,
      "put",
      true,
      {
        data: serviciosInternos
      }
    );
  }

  guardarServicioExterno(
    idCampus: string,
    servicioExterno: ServicioExternoRespuestaEmergencia
  ) {
    return this._globalService.getQuery(
      "/preparacionRespuesta/servicioRespuesta/serviciosExternos/guardar/" +
        idCampus,
      "post",
      true,
      servicioExterno
    );
  }

  guardarCapacitacion(idCampus: string, capacitacion: Capacitacion) {
    return this._globalService.getQuery(
      "/preparacionRespuesta/capacitacion/guardar/" + idCampus,
      "put",
      true,
      capacitacion
    );
  }
}