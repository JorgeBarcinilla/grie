import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";

export interface DataElementSixAnswer {
  actividad: string;
  formGroup: {
    name: string;
    formControls: [string, string, string, string, string, string];
  };
}

@Component({
  selector: "app-entrenamiento",
  templateUrl: "./entrenamiento.component.html",
  styleUrls: ["./entrenamiento.component.css"]
})
export class EntrenamientoComponent implements OnInit {
  ELEMENT_DATA_ENTRENAMIENTO: DataElementSixAnswer[] = [
    {
      actividad: "Detección del peligro",
      formGroup: {
        name: "entrenamiento1",
        formControls: [
          "tiempo",
          "dificultades",
          "accionesMejoramiento",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    },
    {
      actividad: "Alarma",
      formGroup: {
        name: "entrenamiento2",
        formControls: [
          "tiempo",
          "dificultades",
          "accionesMejoramiento",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    },
    {
      actividad: "Alistamiento para la salida",
      formGroup: {
        name: "entrenamiento3",
        formControls: [
          "tiempo",
          "dificultades",
          "accionesMejoramiento",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    },
    {
      actividad: "Salida",
      formGroup: {
        name: "entrenamiento4",
        formControls: [
          "tiempo",
          "dificultades",
          "accionesMejoramiento",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    }
  ];

  dataSourceEntrenamiento = new MatTableDataSource<DataElementSixAnswer>(
    this.ELEMENT_DATA_ENTRENAMIENTO
  );
  displayedColumnsEntrenamiento: string[] = [
    "actividad",
    "tiempo",
    "dificultades",
    "accionesMejoramiento",
    "responsable",
    "fechaMejora",
    "recursos"
  ];
  formParcialEntrenamiento = new FormGroup({});
  constructor(private _operacionesTabla: OperacionesTablaService) {
    this._operacionesTabla.buildForm(
      this.formParcialEntrenamiento,
      this.ELEMENT_DATA_ENTRENAMIENTO
    );
  }

  ngOnInit() {}
}
