import { Component, Input, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { FormGroup } from "@angular/forms";
import { OperacionesTablaService } from "src/app/helpers/operaciones-tabla.service";
import { EquipamientoRespuesta } from "src/app/models/preparacioRespuestaEmergencia.model";

export interface DataElementFiveAnswer {
  descripcion: string;
  formGroup: {
    name: string;
    formControls: [string, string, string, string, string];
  };
}

@Component({
  selector: "app-equipamento-respuesta",
  templateUrl: "./equipamento-respuesta.component.html",
  styleUrls: ["./equipamento-respuesta.component.css"]
})
export class EquipamentoRespuestaComponent implements OnInit {
  @Input() equipamientoRespuesta: EquipamientoRespuesta;

  //INCENDIO
  ELEMENT_DATA_EQUIPAMIENTO_INCENDIO: DataElementFiveAnswer[] = [
    {
      descripcion: "Detectores de humo",
      formGroup: {
        name: "equipamientoIncendio1",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Sprinkles o rociadores",
      formGroup: {
        name: "equipamientoIncendio2",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Mangueras",
      formGroup: {
        name: "equipamientoIncendio3",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Hidratantes",
      formGroup: {
        name: "equipamientoIncendio4",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Extintores tipo ABC",
      formGroup: {
        name: "equipamientoIncendio5",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Extintores Solkaflam para equipos eléctricos",
      formGroup: {
        name: "equipamientoIncendio6",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    }
  ];
  dataSourceEquipamientoIncendio = new MatTableDataSource<
    DataElementFiveAnswer
  >(this.ELEMENT_DATA_EQUIPAMIENTO_INCENDIO);
  displayedColumnsEquipamientoIncendio: string[] = [
    "descripcion",
    "verificacion",
    "equiposRequeridos",
    "responsable",
    "fechaAdquicicion",
    "recursos"
  ];
  formParcialEquipamientoIncendio = new FormGroup({});

  //PRIMEROS AUXILIOS
  ELEMENT_DATA_EQUIPAMIENTO_AUXILIOS: DataElementFiveAnswer[] = [
    {
      descripcion: "Camillas",
      formGroup: {
        name: "equipamientoAuxilios1",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Inmovilizadores cervicales",
      formGroup: {
        name: "equipamientoAuxilios2",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Inmovilizadores para extremidades",
      formGroup: {
        name: "equipamientoAuxilios3",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Botiquín",
      formGroup: {
        name: "equipamientoAuxilios4",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    }
  ];
  dataSourceEquipamientoAuxilios = new MatTableDataSource<
    DataElementFiveAnswer
  >(this.ELEMENT_DATA_EQUIPAMIENTO_AUXILIOS);
  displayedColumnsEquipamientoAuxilios: string[] = [
    "descripcion",
    "verificacion",
    "equiposRequeridos",
    "responsable",
    "fechaAdquicicion",
    "recursos"
  ];
  formParcialEquipamientoAuxilios = new FormGroup({});

  //Necesidades de señalización
  ELEMENT_DATA_EQUIPAMIENTO_SENALIZACION: DataElementFiveAnswer[] = [
    {
      descripcion: "Señales de prohibición",
      formGroup: {
        name: "equipamientoSenalizacion1",
        formControls: [
          "senalesExistentes",
          "senalesRequeridas",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Señales de precaución o advertencia",
      formGroup: {
        name: "equipamientoSenalizacion2",
        formControls: [
          "senalesExistentes",
          "senalesRequeridas",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Señales de obligación o reglamentarias",
      formGroup: {
        name: "equipamientoSenalizacion3",
        formControls: [
          "senalesExistentes",
          "senalesRequeridas",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    },
    {
      descripcion:
        "Señales de información de salidas de emergencia y primeros auxilios",
      formGroup: {
        name: "equipamientoSenalizacion4",
        formControls: [
          "senalesExistentes",
          "senalesRequeridas",
          "responsable",
          "fechaAdquicicion",
          "recursos"
        ]
      }
    }
  ];
  dataSourceEquipamientoSenalizacion = new MatTableDataSource<
    DataElementFiveAnswer
  >(this.ELEMENT_DATA_EQUIPAMIENTO_SENALIZACION);
  displayedColumnsEquipamientoSenalizacion: string[] = [
    "descripcion",
    "senalesExistentes",
    "senalesRequeridas",
    "responsable",
    "fechaAdquicicion",
    "recursos"
  ];
  formParcialEquipamientoSenalizacion = new FormGroup({});

  //Necesidades del sistema de alarma
  ELEMENT_DATA_EQUIPAMIENTO_ALARMA: DataElementFiveAnswer[] = [
    {
      descripcion: "Cubre todas las zonas donde hay estudiantes y empleados",
      formGroup: {
        name: "equipamientoAlarma1",
        formControls: [
          "verificacion",
          "modificaciones",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Es distinta al sonido de cambio de clases",
      formGroup: {
        name: "equipamientoAlarma2",
        formControls: [
          "verificacion",
          "modificaciones",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Señales de obligación o reglamentarias",
      formGroup: {
        name: "equipamientoAlarma3",
        formControls: [
          "verificacion",
          "modificaciones",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Es exclusiva para casos de emergencia",
      formGroup: {
        name: "equipamientoAlarma4",
        formControls: [
          "verificacion",
          "modificaciones",
          "responsable",
          "fechaMejora",
          "recursos"
        ]
      }
    }
  ];
  dataSourceEquipamientoAlarma = new MatTableDataSource<DataElementFiveAnswer>(
    this.ELEMENT_DATA_EQUIPAMIENTO_ALARMA
  );
  displayedColumnsEquipamientoAlarma: string[] = [
    "descripcion",
    "verificacion",
    "modificaciones",
    "responsable",
    "fechaMejora",
    "recursos"
  ];
  formParcialEquipamientoAlarma = new FormGroup({});

  //  Necesidades de equipos para comunicaciones
  ELEMENT_DATA_EQUIPAMIENTO_COMUNICACIONES: DataElementFiveAnswer[] = [
    {
      descripcion: "Teléfono fijo",
      formGroup: {
        name: "equipamientoComunicacion1",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquisicion",
          "recursos"
        ]
      }
    },
    {
      descripcion: "Teléfono celular",
      formGroup: {
        name: "equipamientoComunicacion2",
        formControls: [
          "verificacion",
          "equiposRequeridos",
          "responsable",
          "fechaAdquisicion",
          "recursos"
        ]
      }
    }
  ];
  dataSourceEquipamientoComunicaciones = new MatTableDataSource<
    DataElementFiveAnswer
  >(this.ELEMENT_DATA_EQUIPAMIENTO_COMUNICACIONES);
  displayedColumnComunicaciones: string[] = [
    "descripcion",
    "verificacion",
    "equiposRequeridos",
    "responsable",
    "fechaAdquisicion",
    "recursos"
  ];
  formParcialEquipamientoComunicaciones = new FormGroup({});

  constructor(private _operacionesTabla: OperacionesTablaService) {
    this._operacionesTabla.buildForm(
      this.formParcialEquipamientoIncendio,
      this.ELEMENT_DATA_EQUIPAMIENTO_INCENDIO
    );
    this._operacionesTabla.buildForm(
      this.formParcialEquipamientoAuxilios,
      this.ELEMENT_DATA_EQUIPAMIENTO_AUXILIOS
    );
    this._operacionesTabla.buildForm(
      this.formParcialEquipamientoAlarma,
      this.ELEMENT_DATA_EQUIPAMIENTO_ALARMA
    );
    this._operacionesTabla.buildForm(
      this.formParcialEquipamientoSenalizacion,
      this.ELEMENT_DATA_EQUIPAMIENTO_SENALIZACION
    );
    this._operacionesTabla.buildForm(
      this.formParcialEquipamientoComunicaciones,
      this.ELEMENT_DATA_EQUIPAMIENTO_COMUNICACIONES
    );
  }

  ngOnInit() {
    console.log(this.equipamientoRespuesta);
  }

  guardarEquipamiento() {
    console.log(this.formParcialEquipamientoComunicaciones.value);
  }
}
