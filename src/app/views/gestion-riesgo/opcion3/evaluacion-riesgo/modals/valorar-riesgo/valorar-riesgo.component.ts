import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Riesgo } from "src/app/models/identificacionRiesgo.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ModalControlesRiesgosComponent } from "../modal-controles-riesgos/modal-controles-riesgos.component";

@Component({
  selector: "app-valorar-riesgo",
  templateUrl: "./valorar-riesgo.component.html",
  styleUrls: ["./valorar-riesgo.component.css"],
})
export class ValorarRiesgoComponent implements OnInit {
  riesgo: Riesgo;

  formValorar = new FormGroup({
    disminuirImpacto: new FormControl("", Validators.required),
    disminuirProbabilidad: new FormControl("", Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<ModalControlesRiesgosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Riesgo
  ) {
    this.riesgo = data;
  }

  ngOnInit() {}

  guardarValorar() {
    this.dialogRef.close(this.formValorar.value);
  }
}
