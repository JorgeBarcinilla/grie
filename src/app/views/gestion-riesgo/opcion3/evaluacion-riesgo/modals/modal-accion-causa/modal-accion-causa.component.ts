import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Riesgo, Causa } from "src/app/models/identificacionRiesgo.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-modal-accion-causa",
  templateUrl: "./modal-accion-causa.component.html",
  styleUrls: ["./modal-accion-causa.component.css"],
})
export class ModalAccionCausaComponent implements OnInit {
  causa: Causa;

  formAcciones = new FormGroup({
    idCausa: new FormControl("", Validators.required),
    actividadControl: new FormControl("", Validators.required),
    responsable: new FormControl("", Validators.required),
    soporte: new FormControl("", Validators.required),
    tiempoEjecucion: new FormControl("", Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<ModalAccionCausaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Causa
  ) {
    this.causa = data;
    this.formAcciones.get("idCausa").setValue(this.causa._id);
    if (this.causa.accion) {
      this.formAcciones
        .get("actividadControl")
        .setValue(this.causa.accion.actividadControl);
      this.formAcciones
        .get("responsable")
        .setValue(this.causa.accion.responsable);
      this.formAcciones.get("soporte").setValue(this.causa.accion.soporte);
      this.formAcciones
        .get("tiempoEjecucion")
        .setValue(this.causa.accion.tiempoEjecucion);
    }
  }

  ngOnInit() {}

  guardarAcciones() {
    this.dialogRef.close(this.formAcciones.value);
  }
}
