import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Res } from 'src/app/models/res.model';
import { InstitucionService } from "../conocimiento-institucional/institucion.service";
import { SedeService } from "../conocimiento-institucional/sede.service";
import { ChangeSedeService } from "../gestion-riesgo/change-sede.service";
import { IdentificacionRiesgoService } from "../gestion-riesgo/identificacion-riesgo.service";
import { LineamientoPoliticaRiesgoService } from "../gestion-riesgo/lineamiento-politica-riesgo.service";
import { GlobalService } from "../global.service";
import { NotificacionService } from '../notification/notification.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private _notificacionService: NotificacionService,
    private _globalService: GlobalService,
    private _sedelService: SedeService,
    private _institucionService: InstitucionService,
    private _lineamientosService: LineamientoPoliticaRiesgoService,
    private _identificacionRiesgoService: IdentificacionRiesgoService,
    private _changeSedeService: ChangeSedeService,
    private route: Router
  ) {}

  validarToken() {
    return !!localStorage.getItem("token");
  }

  signUp(data) {
    this._globalService
      .getQuery("/user/signUp", "post", false, data)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
        this.route.navigate(["login"]);
      }, (error) => {
        this._notificacionService.mostrarNotificacion(error.error.message, "danger");
      });
  }

  signIn(data) {
    this._globalService
      .getQuery("/user/signIn", "post", false, data)
      .subscribe((res: Res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name",res.data.name);
          this.route.navigate(["home"]);
        }
      }, error => {
        this._notificacionService.mostrarNotificacion("Usuario o contraseña incorrecta", "danger");
      });
  }

  logOut() {
    this._changeSedeService.logOut();
    this._institucionService.logOut();
    this._lineamientosService.logOut();
    this._sedelService.logOut();
    this._identificacionRiesgoService.logOut();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    this.route.navigate(["login"]);
  }
}
