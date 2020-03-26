import { Injectable } from "@angular/core";
import { GlobalService } from "../global.service";
import { Institucion } from "src/app/models/institucion.model";
import { BehaviorSubject } from "rxjs";

const defaultInstitucion: Institucion = {
  nombre: "",
  codDane: "",
  rector: "",
  coordinador: "",
  liderPRAE: "",
  liderLogistica: "",
  liderConsejoAcademico: "",
  liderBrigada: "",
  liderPadres: "",
  liderEstudiantes: "",
  representanteOrganismosSocorro: "",
  mision: "",
  vision: "",
  objetivos: "",
  valores: ""
};

@Injectable({
  providedIn: "root"
})
export class InstitucionService {
  private institucion: Institucion;
  private _fuenteInstitucion = new BehaviorSubject<Institucion>(
    defaultInstitucion
  );

  constructor(private _globalService: GlobalService) {}

  obtenerInstitucion() {
    this._globalService
      .getQuery("/school", "get", true)
      .subscribe((res: Institucion) => {
        this.institucion = res;
        this._fuenteInstitucion.next(this.institucion);
      });
    return this._fuenteInstitucion.asObservable();
  }

  guardarInstitucion(data: Institucion) {
    return this._globalService.getQuery("/school/create", "post", true, data);
  }

  actualizarInstitucion(idSchool: string, data: Institucion) {
    return this._globalService.getQuery(
      "/school/update/" + idSchool,
      "put",
      true,
      data
    );
  }

  logOut() {
    this.institucion = undefined;
    this._fuenteInstitucion.next(defaultInstitucion);
  }
}
