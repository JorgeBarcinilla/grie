import { Injectable } from "@angular/core";
import { GlobalService } from "../global.service";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { SedeService } from "../conocimiento-institucional/sede.service";
import { InstitucionService } from "../conocimiento-institucional/institucion.service";
import { ChangeSedeService } from "../gestion-riesgo/change-sede.service";
import { LineamientoPoliticaRiesgoService } from "../gestion-riesgo/lineamiento-politica-riesgo.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private _globalService: GlobalService,
    private _sedelService: SedeService,
    private _institucionService: InstitucionService,
    private _lineamientosService: LineamientoPoliticaRiesgoService,
    private _changeSedeService: ChangeSedeService,
    private route: Router
  ) {}

  validarToken() {
    return !!localStorage.getItem("token");
  }

  signUp(data) {
    this._globalService
      .getQuery("/user/signUp", "post", false, data)
      .subscribe((res: any) => {
        if (res) {
          localStorage.setItem("token", res.token);
        }
      });
  }

  signIn(data) {
    this._globalService
      .getQuery("/user/signIn", "post", false, data)
      .subscribe((res: any) => {
        if (res) {
          localStorage.setItem("token", res.token);
          this.route.navigate(["home"]);
        }
      });
  }

  logOut() {
    this._changeSedeService.logOut();
    this._institucionService.logOut();
    this._lineamientosService.logOut();
    this._sedelService.logOut();
    localStorage.removeItem("token");
    this.route.navigate(["login"]);
  }
}
