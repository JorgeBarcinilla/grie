import { Injectable } from "@angular/core";
import { GlobalService } from "../global.service";
import { Sede } from "src/app/models/sede.model";
import { Res } from "src/app/models/res.model";
import { BehaviorSubject } from "rxjs";
import { Institucion } from "src/app/models/institucion.model";
import { InstitucionService } from "./institucion.service";

@Injectable({
  providedIn: "root"
})
export class SedeService {
  private sedes: Sede[] = [];
  private _fuenteSedes = new BehaviorSubject<Sede[]>(this.sedes);

  constructor(
    private _globalService: GlobalService,
    private _institucionService: InstitucionService
  ) {}

  obtenerSedes(idSchool?: string) {
    if (idSchool) {
      this._globalService
        .getQuery("/campus/get/" + idSchool, "get", true)
        .subscribe((res: Sede[]) => {
          this.sedes = res;
          this._fuenteSedes.next(this.sedes);
        });
    } else if (this.sedes.length < 1) {
      this._institucionService
        .obtenerInstitucion()
        .subscribe((institucion: Institucion) => {
          if (institucion._id) {
            this._globalService
              .getQuery("/campus/get/" + institucion._id, "get", true)
              .subscribe((res: Sede[]) => {
                this.sedes = res;
                this._fuenteSedes.next(this.sedes);
              });
          }
        });
    } else {
      this._fuenteSedes.next(this.sedes);
    }
    return this._fuenteSedes.asObservable();
  }

  guardarSede(data: Sede) {
    return this._globalService.getQuery("/campus/create", "post", true, data);
  }

  /*asignarInstitucion(idSede: string, idSchool: string) {
    this._globalService
      .getQuery("/campus/assignSchool/" + idSede, "put", true, {
        idSchool: idSchool
      })
      .subscribe((res: Res) => {
        console.log(res);
      });
  }*/

  actualizarSede(idSede: string, data: Sede) {
    return this._globalService.getQuery(
      "/campus/update/" + idSede,
      "put",
      true,
      data
    );
  }

  eliminarSede(data: Sede) {
    return this._globalService.getQuery(
      "/campus/delete/" + data._id,
      "delete",
      true
    );
  }

  logOut() {
    this.sedes = [];
    this._fuenteSedes.next(this.sedes);
  }
}
