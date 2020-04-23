import { Injectable } from "@angular/core";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { BehaviorSubject } from "rxjs";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class ReporteTratamientoRiesgoService {
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
}
