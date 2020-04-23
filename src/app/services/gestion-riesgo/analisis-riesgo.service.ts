import { Injectable } from "@angular/core";
import { GlobalService } from "../global.service";
import { DeterminarProbabilidad } from "src/app/models/analisisRiesgo.model";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AnalisisRiesgoService {
  private riesgos: Riesgo[] = [];
  private _fuenteRiesgos = new BehaviorSubject<Riesgo[]>(this.riesgos);

  constructor(private _globalService: GlobalService) {}

  obtenerRiesgos(idSede: string, keys?: string) {
    this._globalService
      .getQuery("/identificacionRiesgo/get/" + idSede + "/" + keys, "get", true)
      .subscribe((res: Riesgo[]) => {
        this.riesgos = res;
        this._fuenteRiesgos.next(this.riesgos);
      });
    return this._fuenteRiesgos.asObservable();
  }

  guardarProbabilidad(data: DeterminarProbabilidad[]) {
    /*console.log(data);
    data.forEach(element => {
      const riesgo = this.riesgos.find(riesgo => {
        return riesgo._id == element.idRiesgo;
      });
      for (const key in element) {
        if (riesgo.hasOwnProperty(key)) {
          riesgo[key] = element[key];
        }
      }
    });*/
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
