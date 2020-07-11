import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { ContextoInterno } from "src/app/models/caracterizacionContexto.model";

export interface DataElementSingleAnswer {
  pregunta: string;
  formGroup: { name: string; formControls: [String] };
}
const ELEMENT_DATA_FACTORES_EDUCATIVOS: DataElementSingleAnswer[] = [
  {
    pregunta:
      "Participación de padres de familia en proyectos de gestión de riesgos",
    formGroup: { name: "pregunta1", formControls: ["respuesta"] }
  },
  {
    pregunta:
      "Incorporación curricular de la administración del riesgo en los planes de estudio, proyectos de aula, transversales, etc",
    formGroup: { name: "pregunta2", formControls: ["respuesta"] }
  },
  {
    pregunta:
      "Implementación de herramientas pedagógicas para la administración del riesgo",
    formGroup: { name: "pregunta3", formControls: ["respuesta"] }
  },
  {
    pregunta:
      "Apropiación de temas relacionados con la administración del riesgo por parte de docentes, directivos docentes y estudiantes",
    formGroup: { name: "pregunta4", formControls: ["respuesta"] }
  }
];

const ELEMENT_DATA_CRAE: DataElementSingleAnswer[] = [
  {
    pregunta: "El Comité escolar de gestión del riesgo está conformado",
    formGroup: { name: "pregunta1", formControls: ["respuesta"] }
  },
  {
    pregunta: "El comité escolar de gestión del riesgo está funcionando",
    formGroup: { name: "pregunta2", formControls: ["respuesta"] }
  },
  {
    pregunta: "Las brigadas de emergencia están conformadas",
    formGroup: { name: "pregunta3", formControls: ["respuesta"] }
  },
  {
    pregunta: "Las brigadas de emergencia están funcionando",
    formGroup: { name: "pregunta4", formControls: ["respuesta"] }
  },
  {
    pregunta:
      "Existen instrumentos o formatos para realizar inspecciones en los equipos y dotaciones de emergencia",
    formGroup: { name: "pregunta5", formControls: ["respuesta"] }
  }
];

const ELEMENT_DATA_FINANCIERO: DataElementSingleAnswer[] = [
  {
    pregunta: "Mecanismos para gestión externa de recursos",
    formGroup: { name: "financiero1", formControls: ["rubro"] }
  },
  {
    pregunta: "Presupuesto para respuesta a emergencia",
    formGroup: { name: "financiero2", formControls: ["rubro"] }
  },
  {
    pregunta: "Póliza todo riesgo para la institución",
    formGroup: { name: "financiero3", formControls: ["rubro"] }
  },
  {
    pregunta: "Póliza para muebles, enseres y equipos",
    formGroup: { name: "financiero4", formControls: ["rubro"] }
  }
];

@Component({
  selector: "app-contexto-interno",
  templateUrl: "./contexto-interno.component.html",
  styleUrls: ["./contexto-interno.component.css"]
})
export class ContextoInternoComponent implements OnInit {
  ELEMENT_DATA_COMUNICACION_INTERNA: DataElementSingleAnswer[] = [
    {
      pregunta: "Pagina web",
      formGroup: { name: "paginaWeb", formControls: ["respuesta"] }
    },
    {
      pregunta: "Periódico institucional",
      formGroup: { name: "periodicoInstitucional", formControls: ["respuesta"] }
    },
    {
      pregunta: "Correo institucional",
      formGroup: { name: "correoInstitucional", formControls: ["respuesta"] }
    },
    {
      pregunta: "Circulares",
      formGroup: { name: "circulares", formControls: ["respuesta"] }
    }
  ];

  @Input() formularioContextoInterno: FormGroup;

  //otraEstructura: boolean;

  /*formParcialEstructuras = new FormGroup({
    estructurasParcial: new FormControl("", Validators.required),
    calificacionParcial: new FormControl("", Validators.required)
  });*/

  formParcialComunidadEducativa = new FormGroup({
    tipoPoblacion: new FormControl("", Validators.required),
    cantidad: new FormControl("", Validators.required),
    cantidadDiscapacitados: new FormControl(""),
    tiposDiscapacidad: new FormControl("")
  });

  formParcialOtraComunicacionInterna = new FormGroup({
    otraComunicacion: new FormControl("", Validators.required)
  });

  formParcialFactoresEducativos = new FormGroup({});
  formParcialCRAE = new FormGroup({});
  formParcialComunicacionInterna = new FormGroup({});
  formParcialFinanciero = new FormGroup({});

  estructurasFisicas = [
    { nombre: "Cimiento de las edificaciones", calificacion: null },
    { nombre: "Muros estructurales", calificacion: null },
    { nombre: "Techos y cubiertas", calificacion: null },
    { nombre: "Sismo resistencia", calificacion: null },
    { nombre: "Escaleras y accesos", calificacion: null },
    { nombre: "Puertas y muros cortafuegos", calificacion: null },
    { nombre: "Salidas de emergencia", calificacion: null },
    { nombre: "Rutas de evacuación", calificacion: null },
    { nombre: "Penalización de vías de evacuación", calificacion: null },
    { nombre: "Sistemas de detección de incendios", calificacion: null },
    { nombre: "Disponibilidad de tanque de reserva", calificacion: null },
    { nombre: "Suministro de energía", calificacion: null },
    { nombre: "Suministro de agua", calificacion: null },
    { nombre: "Recolección de basura", calificacion: null },
    { nombre: "Gas natural", calificacion: null },
    { nombre: "Parqueaderos", calificacion: null },
    { nombre: "Camillas", calificacion: null },
    { nombre: "Botiquines", calificacion: null },
    { nombre: "Extintores", calificacion: null },
    { nombre: "Sistema de alarma", calificacion: null },
    { nombre: "Planta de emergencia", calificacion: null },
    { nombre: "Sistema de vigilancia", calificacion: null }
  ];
  displayedColumnsEstrucrurasFisicas: string[] = ["nombre", "calificacion"];
  estructurasCalificadas = [];

  tipoPoblacion = [
    "Menores de tres años",
    "Educación pre-escolar",
    "Básica primaria",
    "Básica secundaria",
    "Docentes",
    "Docente orientador",
    "Administrativos",
    "Cafeterías-Restaurantes",
    "Servicios generales",
    "Portero",
    "Seguridad privada"
  ];
  tipoPoblacionGuardada = [];
  dataSourceComunidadEducativa = new MatTableDataSource<[]>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumnsComunidadEducativa: string[] = [
    "tipoPoblacion",
    "cantidad",
    "cantidadDiscapacitados",
    "tiposDiscapacidad"
  ];

  dataSourceFactoresEducativos = new MatTableDataSource<
    DataElementSingleAnswer
  >(ELEMENT_DATA_FACTORES_EDUCATIVOS);
  displayedColumnsFactoresEducativos: string[] = ["pregunta", "respuesta"];

  dataSourceCRAE = new MatTableDataSource<DataElementSingleAnswer>(
    ELEMENT_DATA_CRAE
  );
  displayedColumnsCRAE: string[] = ["pregunta", "respuesta"];

  dataSourceFinanciero = new MatTableDataSource<DataElementSingleAnswer>(
    ELEMENT_DATA_FINANCIERO
  );
  displayedColumnsFinanciero: string[] = ["aspectoFinanciero", "rubro"];

  dataSourceComunicacionInterna = new MatTableDataSource<
    DataElementSingleAnswer
  >(this.ELEMENT_DATA_COMUNICACION_INTERNA);
  displayedColumnsComunicacionInterna: string[] = ["pregunta", "respuesta"];

  constructor(private fb: FormBuilder) {
    this.buildForm(
      this.formParcialFactoresEducativos,
      ELEMENT_DATA_FACTORES_EDUCATIVOS
    );
    this.buildForm(this.formParcialCRAE, ELEMENT_DATA_CRAE);
    this.buildForm(this.formParcialFinanciero, ELEMENT_DATA_FINANCIERO);
    this.buildForm(
      this.formParcialComunicacionInterna,
      this.ELEMENT_DATA_COMUNICACION_INTERNA
    );
  }

  ngOnInit() {
    this.dataSourceComunidadEducativa.paginator = this.paginator;
    const contextoInterno = <ContextoInterno>(
      this.formularioContextoInterno.value
    );

    if (contextoInterno.factoresEducativos != null) {
      for (let key in this.formParcialFactoresEducativos.value) {
        this.formParcialFactoresEducativos
          .get(key)
          .setValue(contextoInterno.factoresEducativos[key]);
      }
    }
    if (contextoInterno.CRAE != null) {
      for (let key in this.formParcialCRAE.value) {
        this.formParcialCRAE.get(key).setValue(contextoInterno.CRAE[key]);
      }
    }
    if (contextoInterno.financieros != null) {
      for (let key in this.formParcialFinanciero.value) {
        this.formParcialFinanciero
          .get(key)
          .setValue(contextoInterno.financieros[key]);
      }
    }
    this.tipoPoblacionGuardada = Array.isArray(
      contextoInterno.comunidadEducativa
    )
      ? contextoInterno.comunidadEducativa
      : [];
    this.dataSourceComunidadEducativa.data = this.tipoPoblacionGuardada;
    this.estructurasFisicas = Array.isArray(contextoInterno.estructuraFisica)
      ? contextoInterno.estructuraFisica
      : [];

    if (Array.isArray(contextoInterno.comunicacionInterna)) {
      this.ELEMENT_DATA_COMUNICACION_INTERNA.forEach(element => {
        this.formParcialComunicacionInterna.removeControl(
          element.formGroup.name
        );
      });
      const comunicacionInterna = [];
      const comunicacionInternaRes = {};
      contextoInterno.comunicacionInterna.forEach(element => {
        comunicacionInterna.push(element.row);
        comunicacionInternaRes[element.row.formGroup.name] = {
          respuesta: element.respuesta
        };
      });
      this.buildForm(this.formParcialComunicacionInterna, comunicacionInterna);
      this.dataSourceComunicacionInterna.data = comunicacionInterna;
      for (let key in this.formParcialComunicacionInterna.value) {
        this.formParcialComunicacionInterna
          .get(key)
          .setValue(comunicacionInternaRes[key]);
      }
      this.ELEMENT_DATA_COMUNICACION_INTERNA = comunicacionInterna;
    }
  }

  //Este metodo construye un grupo de array de formularios
  buildForm(formGroup: FormGroup, dataTable: any) {
    dataTable.forEach(row => {
      let controls = {};
      row.formGroup.formControls.forEach(control => {
        controls[control] = new FormControl("", Validators.required);
      });

      formGroup.addControl(row.formGroup.name, this.fb.group(controls));
    });
  }

  /*cambiarCampo() {
    if (this.otraEstructura) {
      this.otraEstructura = false;
      this.formParcialEstructuras.get("estructurasParcial").setValue("");
    } else {
      this.otraEstructura = true;
      this.formParcialEstructuras.get("estructurasParcial").setValue("");
    }
  }*/

  calificarEstructuras() {
    /*let estrcs = this.formParcialEstructuras.value.estructurasParcial;
    let icon;
    switch (this.formParcialEstructuras.value.calificacionParcial) {
      case "Bueno":
        icon = "sentiment_very_satisfied";
        break;
      case "Regular":
        icon = "sentiment_satisfied";
        break;
      case "Malo":
        icon = "sentiment_very_dissatisfied";
        break;

      default:
        break;
    }

    if (Array.isArray(estrcs)) {
      estrcs.forEach(estr => {
        this.estructurasFisicas = this.estructurasFisicas.filter(est => {
          return est != estr;
        });
        this.estructurasCalificadas.push({
          nombre: estr,
          calificacion: this.formParcialEstructuras.value.calificacionParcial,
          icon: icon
        });
      });
    } else {
      this.estructurasFisicas = this.estructurasFisicas.filter(est => {
        return est != estrcs;
      });
      this.estructurasCalificadas.push({
        nombre: estrcs,
        calificacion: this.formParcialEstructuras.value.calificacionParcial,
        icon: icon
      });
    }*/

    this.formularioContextoInterno
      .get("estructuraFisica")
      .setValue(this.estructurasFisicas);
    //this.formParcialEstructuras.reset();
  }

  /*eliminarEstructura(nombre: string) {
    this.estructurasCalificadas = this.estructurasCalificadas.filter(est => {
      return est.nombre != nombre;
    });
    this.estructurasFisicas.unshift(nombre);
    this.formularioContextoInterno
      .get("estructuraFisica")
      .setValue(this.estructurasCalificadas);
  }*/

  guardarComunidadEducativa() {
    let tipo = this.formParcialComunidadEducativa.value.tipoPoblacionParcial;
    this.tipoPoblacion = this.tipoPoblacion.filter(tip => {
      return tip != tipo;
    });
    this.tipoPoblacionGuardada.push(this.formParcialComunidadEducativa.value);
    this.dataSourceComunidadEducativa.data = this.tipoPoblacionGuardada;
    this.formularioContextoInterno
      .get("comunidadEducativa")
      .setValue(this.tipoPoblacionGuardada);
    this.formParcialComunidadEducativa.reset();
  }

  guardarFactoresEducativos() {
    this.formularioContextoInterno
      .get("factoresEducativos")
      .setValue(this.formParcialFactoresEducativos.value);
  }

  guardarCRAE() {
    this.formularioContextoInterno
      .get("CRAE")
      .setValue(this.formParcialCRAE.value);
  }

  guardarFinanciero() {
    this.formularioContextoInterno
      .get("financieros")
      .setValue(this.formParcialFinanciero.value);
  }

  guardarComunicacionInterna() {
    const data = [];
    for (let key in this.formParcialComunicacionInterna.value) {
      data.push({
        row: this.ELEMENT_DATA_COMUNICACION_INTERNA.find(element => {
          return element.formGroup.name == key;
        }),
        respuesta: this.formParcialComunicacionInterna.value[key].respuesta
      });
    }
    this.formularioContextoInterno.get("comunicacionInterna").setValue(data);
  }

  crearOtraComunicacion() {
    const comunicacion = <string>(
      this.formParcialOtraComunicacionInterna.value.otraComunicacion
    );

    let row = <DataElementSingleAnswer>{
      pregunta: comunicacion,
      formGroup: {
        name: comunicacion.replace(/ /g, "").toLocaleLowerCase(),
        formControls: ["respuesta"]
      }
    };

    let controls = {};
    row.formGroup.formControls.forEach((control: string) => {
      controls[control] = new FormControl("", Validators.required);
    });

    this.formParcialComunicacionInterna.addControl(
      row.formGroup.name,
      this.fb.group(controls)
    );

    this.ELEMENT_DATA_COMUNICACION_INTERNA.push(row);
    this.dataSourceComunicacionInterna.data = this.ELEMENT_DATA_COMUNICACION_INTERNA;
    this.formParcialOtraComunicacionInterna.reset();
  }
}
