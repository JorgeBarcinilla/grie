import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ChangeSedeService {
  private idSede: string;
  private _fuenteSedes: BehaviorSubject<string>;

  constructor() {
    const _id = localStorage.getItem("idSede");
    this.idSede = _id != null && _id != undefined ? _id : "";
    this._fuenteSedes = new BehaviorSubject(this.idSede);
  }

  obtenerIdSede() {
    return this._fuenteSedes.asObservable();
  }

  insertarSede(idSede: string) {
    this.idSede = idSede;
    this._fuenteSedes.next(this.idSede);
    localStorage.setItem("idSede", idSede);
  }

  logOut() {
    localStorage.removeItem("idSede");
    this._fuenteSedes.next(undefined);
    this.idSede = undefined;
  }
}
