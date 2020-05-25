import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Causa } from "src/app/models/identificacionRiesgo.model";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-modal-controles-riesgos",
  templateUrl: "./modal-controles-riesgos.component.html",
  styleUrls: ["./modal-controles-riesgos.component.css"]
})
export class ModalControlesRiesgosComponent implements OnInit {
  causa: Causa;
  sumatoriaDisenio: number = 0;

  formCriterioEvaluacion = new FormGroup({
    criterio1: new FormGroup({
      a: new FormControl("", Validators.required),
      b: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required)
    }),
    criterio2: new FormControl("", Validators.required),
    criterio3: new FormControl("", Validators.required),
    criterio4: new FormControl("", Validators.required),
    criterio5: new FormControl("", Validators.required),
    criterio6: new FormControl("", Validators.required),
    calificacionDisenio: new FormControl("", Validators.required),
    calificacionEjecucion: new FormControl("", Validators.required),
    solidez: new FormControl("", Validators.required),
    fortalecer: new FormControl("", Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<ModalControlesRiesgosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Causa
  ) {
    this.causa = data;
  }

  ngOnInit() {
    this.calificarDisenio();
  }

  calificarDisenio() {
    this.sumatoriaDisenio = 0;
    const formCriterios = this.formCriterioEvaluacion.value;
    for (let key in formCriterios) {
      if (key.includes("criterio")) {
        if (key == "criterio1") {
          formCriterios[key]["a"] == "true"
            ? (this.sumatoriaDisenio += 15)
            : (this.sumatoriaDisenio += 0);
          formCriterios[key]["b"] == "true"
            ? (this.sumatoriaDisenio += 15)
            : (this.sumatoriaDisenio += 0);
        } else {
          formCriterios[key] == "true"
            ? (this.sumatoriaDisenio += 15)
            : (this.sumatoriaDisenio += 0);
        }
      }
    }

    if (this.sumatoriaDisenio > 95) {
      this.formCriterioEvaluacion.get("calificacionDisenio").setValue("fuerte");
    } else if (this.sumatoriaDisenio > 85) {
      this.formCriterioEvaluacion
        .get("calificacionDisenio")
        .setValue("moderado");
    } else {
      this.formCriterioEvaluacion.get("calificacionDisenio").setValue("debil");
    }
    this.calificarSolidez();
  }

  calificarSolidez() {
    const disenio = this.formCriterioEvaluacion.value.calificacionDisenio;
    const ejecucion = this.formCriterioEvaluacion.value.calificacionEjecucion;

    if (disenio == "fuerte" && ejecucion == "fuerte") {
      this.formCriterioEvaluacion.get("solidez").setValue("fuerte");
      this.formCriterioEvaluacion.get("fortalecer").setValue("no");
    } else if (disenio == "fuerte" && ejecucion == "moderado") {
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
      this.formCriterioEvaluacion.get("solidez").setValue("moderado");
    } else if (disenio == "fuerte" && ejecucion == "debil") {
      this.formCriterioEvaluacion.get("solidez").setValue("debil");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    } else if (disenio == "moderado" && ejecucion == "fuerte") {
      this.formCriterioEvaluacion.get("solidez").setValue("moderado");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    } else if (disenio == "moderado" && ejecucion == "moderado") {
      this.formCriterioEvaluacion.get("solidez").setValue("moderado");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    } else if (disenio == "moderado" && ejecucion == "debil") {
      this.formCriterioEvaluacion.get("solidez").setValue("debil");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    } else if (disenio == "debil" && ejecucion == "fuerte") {
      this.formCriterioEvaluacion.get("solidez").setValue("debil");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    } else if (disenio == "debil" && ejecucion == "moderado") {
      this.formCriterioEvaluacion.get("solidez").setValue("debil");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    } else if (disenio == "debil" && ejecucion == "debil") {
      this.formCriterioEvaluacion.get("solidez").setValue("debil");
      this.formCriterioEvaluacion.get("fortalecer").setValue("si");
    }
  }

  guardarControles() {
    this.dialogRef.close(this.formCriterioEvaluacion.value);
  }
}
