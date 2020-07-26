import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";
import { Capacitacion } from "src/app/models/preparacioRespuestaEmergencia.model";

export interface DataElementSixAnswer {
  servicio: string;
  formGroup: {
    name: string;
    formControls: [string, string, string, string, string, string];
  };
}

@Component({
  selector: "app-capacitacion",
  templateUrl: "./capacitacion.component.html",
  styleUrls: ["./capacitacion.component.css"]
})
export class CapacitacionComponent implements OnInit {
  @Input() capacitacion: Capacitacion;

  ELEMENT_DATA_CAPACITACION: DataElementSixAnswer[] = [
    {
      servicio: "Coordinación de la respuesta escolar a emergencias",
      formGroup: {
        name: "capacitacion1",
        formControls: [
          "nPersonasCapacitadas",
          "nPersonasCapacitar",
          "oferenteCapacitacion",
          "responsable",
          "fechaCapacitacion",
          "recursos"
        ]
      }
    },
    {
      servicio: "Extinción de incendios",
      formGroup: {
        name: "capacitacion2",
        formControls: [
          "nPersonasCapacitadas",
          "nPersonasCapacitar",
          "oferenteCapacitacion",
          "responsable",
          "fechaCapacitacion",
          "recursos"
        ]
      }
    },
    {
      servicio: "Primeros auxilios",
      formGroup: {
        name: "capacitacion3",
        formControls: [
          "nPersonasCapacitadas",
          "nPersonasCapacitar",
          "oferenteCapacitacion",
          "responsable",
          "fechaCapacitacion",
          "recursos"
        ]
      }
    },
    {
      servicio: "Evacuación",
      formGroup: {
        name: "capacitacion4",
        formControls: [
          "nPersonasCapacitadas",
          "nPersonasCapacitar",
          "oferenteCapacitacion",
          "responsable",
          "fechaCapacitacion",
          "recursos"
        ]
      }
    },
    {
      servicio: "Tráfico vehicular",
      formGroup: {
        name: "capacitacion5",
        formControls: [
          "nPersonasCapacitadas",
          "nPersonasCapacitar",
          "oferenteCapacitacion",
          "responsable",
          "fechaCapacitacion",
          "recursos"
        ]
      }
    }
  ];

  dataSourcecapacitacion = new MatTableDataSource<DataElementSixAnswer>(
    this.ELEMENT_DATA_CAPACITACION
  );
  displayedColumnsCapacitacion: string[] = [
    "servicio",
    "nPersonasCapacitadas",
    "nPersonasCapacitar",
    "oferenteCapacitacion",
    "responsable",
    "fechaCapacitacion",
    "recursos"
  ];
  formParcialCapacitacion = new FormGroup({});
  constructor(private _operacionesTabla: OperacionesTablaService) {
    this._operacionesTabla.buildForm(
      this.formParcialCapacitacion,
      this.ELEMENT_DATA_CAPACITACION
    );
  }

  ngOnInit() {
    console.log(this.capacitacion);
  }

  guardarCapacitacion() {
    console.log(this.formParcialCapacitacion.value);
  }
}
