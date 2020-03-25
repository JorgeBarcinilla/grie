import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LineamientoPoliticaRiesgo } from "src/app/models/lineamientoPoliticaRiesgo.model";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class LineamientoPoliticaRiesgoService {
  private lineamiento: LineamientoPoliticaRiesgo;
  private _fuenteLineamiento = new BehaviorSubject<LineamientoPoliticaRiesgo>(
    undefined
  );

  constructor(private _globalService: GlobalService) {}

  obtenerLineamiento(idSede: string) {
    this._globalService
      .getQuery("/lineamientoPoliticaRiesgo/get/" + idSede, "get", true)
      .subscribe((res: LineamientoPoliticaRiesgo) => {
        this.lineamiento = res;
        this._fuenteLineamiento.next(this.lineamiento);
      });

    return this._fuenteLineamiento.asObservable();
  }

  guardarLineamiento(data: LineamientoPoliticaRiesgo) {
    return this._globalService.getQuery(
      "/lineamientoPoliticaRiesgo/create",
      "post",
      true,
      data
    );
  }

  actualizarLineamiento(
    idLineamiento: string,
    data: LineamientoPoliticaRiesgo
  ) {
    return this._globalService.getQuery(
      "/lineamientoPoliticaRiesgo/update/" + idLineamiento,
      "put",
      true,
      data
    );
  }
}
