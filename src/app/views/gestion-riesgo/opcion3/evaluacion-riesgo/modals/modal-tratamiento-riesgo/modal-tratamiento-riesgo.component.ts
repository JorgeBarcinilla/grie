import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSelectChange,
  MatDialog
} from "@angular/material";
import {
  Riesgo,
  Causa,
  AccionCausa
} from "src/app/models/identificacionRiesgo.model";
import { ModalAccionCausaComponent } from "../modal-accion-causa/modal-accion-causa.component";
import { ArrayLengthValidator } from "src/app/validators/arrayLengthValidator";
import { LineamientoPoliticaRiesgoService } from "src/app/services/gestion-riesgo/lineamiento-politica-riesgo.service";
import { Subscription } from "rxjs";
import { LineamientoPoliticaRiesgo } from "src/app/models/lineamientoPoliticaRiesgo.model";

const HASH_PROBABILIDAD = {
  casiseguro: 4,
  probable: 3,
  posible: 2,
  improbable: 1,
  raravez: 0
};
const HASH_IMPACTO = {
  insignificante: 0,
  menor: 1,
  moderado: 2,
  mayor: 3,
  catastrofico: 4
};

@Component({
  selector: "app-modal-tratamiento-riesgo",
  templateUrl: "./modal-tratamiento-riesgo.component.html",
  styleUrls: ["./modal-tratamiento-riesgo.component.css"]
})
export class ModalTratamientoRiesgoComponent implements OnInit {
  riesgo: Riesgo;
  idSede: string;
  accionesCausas: AccionCausa[] = [];

  formTratamiento = new FormGroup({
    estado: new FormControl("", Validators.required),
    tipoCompartir: new FormControl("", Validators.required),
    actividadesCumplidas: new FormControl("", Validators.required),
    incidentes: new FormControl("", Validators.required),
    planContingencia: new FormGroup({
      actividadControl: new FormControl("", Validators.required),
      responsable: new FormControl("", Validators.required),
      tiempoEjecucion: new FormControl("", Validators.required),
      soporte: new FormControl("", Validators.required)
    }),
    acciones: new FormControl([])
  });

  constructor(
    public dialogRef: MatDialogRef<ModalTratamientoRiesgoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private _lineamientosPoliticaRiesgoService: LineamientoPoliticaRiesgoService
  ) {
    this.riesgo = data.riesgo;
    this.idSede = data.idSede;

    if (this.riesgo.tratamiento) {
      this.changeStatusFormControl(this.riesgo.tratamiento.estado);
      this.formTratamiento
        .get("estado")
        .setValue(this.riesgo.tratamiento.estado);
      this.formTratamiento
        .get("tipoCompartir")
        .setValue(this.riesgo.tratamiento.tipoCompartir);
      this.formTratamiento
        .get("actividadesCumplidas")
        .setValue(this.riesgo.tratamiento.actividadesCumplidas);
      this.formTratamiento
        .get("incidentes")
        .setValue(this.riesgo.tratamiento.incidentes);
      if (this.riesgo.tratamiento.planContingencia) {
        this.formTratamiento
          .get("planContingencia")
          .setValue(this.riesgo.tratamiento.planContingencia);
      }
      if (this.riesgo.tratamiento.estado == "reducir") {
        this.riesgo.causas.forEach(element => {
          this.accionesCausas.push(element.accion);
        });
        this.formTratamiento.get("acciones").setValue(this.accionesCausas);
      }
    }
    this.formTratamiento
      .get("acciones")
      .setValidators(
        ArrayLengthValidator.equalLength(this.riesgo.causas.length)
      );
  }
  lineamientos: LineamientoPoliticaRiesgo;
  subscribeLineamientos: Subscription;
  ngOnInit() {
    this.subscribeLineamientos = this._lineamientosPoliticaRiesgoService
      .obtenerLineamiento(this.idSede)
      .subscribe((res: LineamientoPoliticaRiesgo) => {
        if (res && res != null) {
          this.lineamientos = res;
        } else {
          this.lineamientos = undefined;
        }
      });
    const nivelProb =
      HASH_PROBABILIDAD[
        this.riesgo.probabilidad.toLocaleLowerCase().replace(" ", "")
      ];
    const nivelImp =
      HASH_IMPACTO[
        this.riesgo.nivelImpacto.toLocaleLowerCase().replace(" ", "")
      ];
    switch (nivelProb) {
      case 0:
        nivelImp < 2
          ? (this.riesgo.nivelRiesgo = "Bajo")
          : nivelImp < 3
          ? (this.riesgo.nivelRiesgo = "Moderado")
          : nivelImp < 4
          ? (this.riesgo.nivelRiesgo = "Alto")
          : (this.riesgo.nivelRiesgo = "Extremo");
        break;
      case 1:
        nivelImp < 2
          ? (this.riesgo.nivelRiesgo = "Bajo")
          : nivelImp < 3
          ? (this.riesgo.nivelRiesgo = "Moderado")
          : nivelImp < 4
          ? (this.riesgo.nivelRiesgo = "Alto")
          : (this.riesgo.nivelRiesgo = "Extremo");
        break;
      case 2:
        nivelImp < 1
          ? (this.riesgo.nivelRiesgo = "Bajo")
          : nivelImp < 2
          ? (this.riesgo.nivelRiesgo = "Moderado")
          : nivelImp < 3
          ? (this.riesgo.nivelRiesgo = "Alto")
          : (this.riesgo.nivelRiesgo = "Extremo");
        break;
      case 3:
        nivelImp < 1
          ? (this.riesgo.nivelRiesgo = "Moderado")
          : nivelImp < 3
          ? (this.riesgo.nivelRiesgo = "Alto")
          : (this.riesgo.nivelRiesgo = "Extremo");
        break;
      case 4:
        nivelImp < 2
          ? (this.riesgo.nivelRiesgo = "Alto")
          : (this.riesgo.nivelRiesgo = "Extremo");
        break;

      default:
        break;
    }
  }

  seleccionarEstado(select: MatSelectChange) {
    const estado = select.value;
    this.changeStatusFormControl(estado);
  }

  private changeStatusFormControl(value: String) {
    switch (value) {
      case "aceptar":
        this.formTratamiento.get("tipoCompartir").disable();
        this.formTratamiento.get("actividadesCumplidas").disable();
        this.formTratamiento.get("incidentes").disable();
        this.formTratamiento.get("planContingencia").disable();
        this.formTratamiento.get("acciones").disable();
        break;

      case "evitar":
        this.formTratamiento.get("tipoCompartir").disable();
        this.formTratamiento.get("actividadesCumplidas").disable();
        this.formTratamiento.get("incidentes").disable();
        this.formTratamiento.get("planContingencia").disable();
        this.formTratamiento.get("acciones").disable();
        break;

      case "compartir":
        this.formTratamiento.get("tipoCompartir").enable();
        this.formTratamiento.get("actividadesCumplidas").disable();
        this.formTratamiento.get("incidentes").disable();
        this.formTratamiento.get("planContingencia").disable();
        this.formTratamiento.get("acciones").disable();
        break;

      case "reducir":
        this.formTratamiento.get("tipoCompartir").disable();
        this.formTratamiento.get("actividadesCumplidas").enable();
        this.formTratamiento.get("incidentes").enable();
        this.formTratamiento.get("planContingencia").enable();
        this.formTratamiento.get("acciones").enable();
        break;

      default:
        break;
    }
  }

  establecerAccion(causa: Causa) {
    const dialogRef = this.dialog.open(ModalAccionCausaComponent, {
      data: causa
    });
    dialogRef.afterClosed().subscribe((data: AccionCausa) => {
      if (data) {
        this.accionesCausas = this.accionesCausas.filter(element => {
          return element.idCausa != data.idCausa;
        });
        this.accionesCausas.push(data);
        this.formTratamiento.get("acciones").setValue(this.accionesCausas);
      }
    });
  }

  guardarTratamiento() {
    this.dialogRef.close(this.formTratamiento.value);
  }
}
