import { Injectable } from "@angular/core";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { GlobalService } from "../global.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EvaluacionRiesgosService {
  private flagRiesgos: boolean = false;
  private riesgos: Riesgo[] = [];
  private _fuenteRiesgos = new BehaviorSubject<Riesgo[]>(this.riesgos);

  constructor(private _globalService: GlobalService) {}

  obtenerRiesgos(idSede: string, keys?: string) {
    if (this.riesgos.length < 1 && !this.flagRiesgos) {
      this.flagRiesgos = true;
      this._globalService
        .getQuery(
          "/identificacionRiesgo/get/" + idSede + "/" + keys,
          "get",
          true
        )
        .subscribe((res: Riesgo[]) => {
          this.riesgos = res;
          this._fuenteRiesgos.next(this.riesgos);
        });
    }
    return this._fuenteRiesgos.asObservable();
  }

  guardarCriteriosCausas(riesgo: Riesgo) {
    for (let index = 0; index < this.riesgos.length; index++) {
      let element = this.riesgos[index];
      if (element._id == riesgo._id) {
        element = riesgo;
        break;
      }
    }

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

  valorarControles(riesgo: Riesgo) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/valorarControles/" + riesgo._id,
      "put",
      true,
      {
        disminuirImpacto: riesgo.disminuirImpacto,
        disminuirProbabilidad: riesgo.disminuirProbabilidad,
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
