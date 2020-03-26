import { Injectable } from "@angular/core";
import { CaracterizacionContexto } from "src/app/models/caracterizacionContexto.model";
import { BehaviorSubject } from "rxjs";
import { GlobalService } from "../global.service";

@Injectable({
  providedIn: "root"
})
export class CaracterizacionContextoService {
  private caracterizacionContexto: CaracterizacionContexto;
  private _fuenteCaracterizacionContexto = new BehaviorSubject<
    CaracterizacionContexto
  >(undefined);

  constructor(private _globalService: GlobalService) {}

  obtenerCaracterizacionContexto(idSede: string) {
    this._globalService
      .getQuery("/CaracterizacionContexto/get/" + idSede, "get", true)
      .subscribe((res: CaracterizacionContexto) => {
        this.caracterizacionContexto = res;
        this._fuenteCaracterizacionContexto.next(this.caracterizacionContexto);
      });

    return this._fuenteCaracterizacionContexto.asObservable();
  }

  guardarCaracterizacionContexto(data: CaracterizacionContexto) {
    return this._globalService.getQuery(
      "/CaracterizacionContexto/create",
      "post",
      true,
      data
    );
  }

  actualizarCaracterizacionContexto(
    idCaracterizacionContexto: string,
    data: CaracterizacionContexto
  ) {
    return this._globalService.getQuery(
      "/CaracterizacionContexto/update/" + idCaracterizacionContexto,
      "put",
      true,
      data
    );
  }

  logOut() {
    this._fuenteCaracterizacionContexto.next(undefined);
    this.caracterizacionContexto = undefined;
  }
}
