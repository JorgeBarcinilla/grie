import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Riesgo, Causa } from "src/app/models/identificacionRiesgo.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-modal-accion-causa",
  templateUrl: "./modal-accion-causa.component.html",
  styleUrls: ["./modal-accion-causa.component.css"]
})
export class ModalAccionCausaComponent implements OnInit {
  causa: Causa;
  mostrarAlerta: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalAccionCausaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Causa
  ) {
    this.causa = data;
    if (!this.causa.accion) {
      this.causa.accion = {
        idCausa: this.causa._id,
        actividadControl: "",
        responsable: "",
        tiempoEjecucion: "",
        soporte: ""
      };
    }
  }

  ngOnInit() {}

  private validarAccion() {
    for (let key in this.causa.accion) {
      if (!this.causa.accion[key] || this.causa.accion[key].length == 0) {
        return false;
      }
    }
    return true;
  }

  guardarAcciones() {
    if (this.validarAccion()) {
      this.mostrarAlerta = false;
      this.dialogRef.close(this.causa.accion);
    } else {
      this.mostrarAlerta = true;
    }
  }
}
