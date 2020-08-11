import { Injectable } from "@angular/core";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { BehaviorSubject } from "rxjs";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root",
})
export class IdentificacionRiesgoService {
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

  guardarRiesgo(data: Riesgo) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/create",
      "post",
      true,
      data
    );
  }

  eliminarRiesgo(id: string) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/delete/" + id,
      "delete",
      true
    );
  }

  actualizarRiesgo(idRiesgo: string, data: any) {
    return this._globalService.getQuery(
      "/identificacionRiesgo/update/" + idRiesgo,
      "put",
      true,
      data
    );
  }

  logOut() {
    this.riesgos = [];
    this._fuenteRiesgos.next(this.riesgos);
  }
}
