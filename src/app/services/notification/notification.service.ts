import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable()
export class NotificacionService {
  constructor(private _snackBar: MatSnackBar) {}

  mostrarNotificacion(mensaje: string, tipo: string) {
    this._snackBar.open(mensaje, "Ok", {
      panelClass: "snack-bar-" + tipo,
      duration: 5000
    });
  }
}
