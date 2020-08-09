import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ImageExampleComponent } from "src/app/components/utils/image-example/image-example.component";
import { MatDialog, MatTableDataSource, MatPaginator } from "@angular/material";
import { MostrarEjemplosService } from "src/app/helpers/mostrar-ejemplos.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { NotificacionService } from "src/app/services/notification/notification.service";
import { IdentificacionRiesgoService } from "src/app/services/gestion-riesgo/identificacion-riesgo.service";
import { Subscription } from "rxjs";
import { Riesgo, Causa } from "src/app/models/identificacionRiesgo.model";
import { Res } from "src/app/models/res.model";
import { CaracterizacionContextoService } from "src/app/services/gestion-riesgo/caracterizacion-contexto.service";
import {
  CaracterizacionContexto,
  IdentificacionActivos,
} from "src/app/models/caracterizacionContexto.model";

export interface DataElementRiesgosCorrupcion {
  numero: string;
  pregunta: string;
  formGroup: { name: string; formControls: ["respuesta"] };
}
const ELEMENT_DATA_CORRUPCION: DataElementRiesgosCorrupcion[] = [
  {
    numero: "1",
    pregunta: "¿Afectar al grupo de funcionarios del proceso?",
    formGroup: { name: "pregunta1", formControls: ["respuesta"] },
  },
  {
    numero: "2",
    pregunta:
      "¿Afectar el cumplimiento de metas y objetivos de la dependencia?",
    formGroup: { name: "pregunta2", formControls: ["respuesta"] },
  },
  {
    numero: "3",
    pregunta: "¿Afectar el cumplimiento de misión de la entidad?",
    formGroup: { name: "pregunta3", formControls: ["respuesta"] },
  },
  {
    numero: "4",
    pregunta:
      "¿Afectar el cumplimiento de la misión del sector al que pertenece la entidad?",
    formGroup: { name: "pregunta4", formControls: ["respuesta"] },
  },
  {
    numero: "5",
    pregunta:
      "¿Generar pérdida de confianza de la entidad, afectando su reputación?",
    formGroup: { name: "pregunta5", formControls: ["respuesta"] },
  },
  {
    numero: "6",
    pregunta: "¿Generar pérdida de recursos económicos?",
    formGroup: { name: "pregunta6", formControls: ["respuesta"] },
  },
  {
    numero: "7",
    pregunta:
      "¿Afectar la generación de los productos o la prestación de servicios?",
    formGroup: { name: "pregunta7", formControls: ["respuesta"] },
  },
  {
    numero: "8",
    pregunta:
      "¿Dar lugar al detrimento de calidad de vida de la comunidad por la pérdida del bien, servicios o recursos públicos?",
    formGroup: { name: "pregunta8", formControls: ["respuesta"] },
  },
  {
    numero: "9",
    pregunta: "¿Generar pérdida de información de la entidad?",
    formGroup: { name: "pregunta9", formControls: ["respuesta"] },
  },
  {
    numero: "10",
    pregunta:
      "¿Generar intervención de los órganos de control, de la Fiscalía u otro ente?",
    formGroup: { name: "pregunta10", formControls: ["respuesta"] },
  },
  {
    numero: "11",
    pregunta: "¿Dar lugar a procesos sancionatorios?",
    formGroup: { name: "pregunta11", formControls: ["respuesta"] },
  },
  {
    numero: "12",
    pregunta: "¿Dar lugar a procesos disciplinarios?",
    formGroup: { name: "pregunta12", formControls: ["respuesta"] },
  },
  {
    numero: "13",
    pregunta: "¿Dar lugar a procesos fiscales?",
    formGroup: { name: "pregunta13", formControls: ["respuesta"] },
  },
  {
    numero: "14",
    pregunta: "¿Dar lugar a procesos penales?",
    formGroup: { name: "pregunta14", formControls: ["respuesta"] },
  },
  {
    numero: "15",
    pregunta: "¿Generar pérdida de credibilidad del sector?",
    formGroup: { name: "pregunta15", formControls: ["respuesta"] },
  },
  {
    numero: "16",
    pregunta: "¿Ocasionar lesiones físicas o pérdida de vidas humanas?",
    formGroup: { name: "pregunta16", formControls: ["respuesta"] },
  },
  {
    numero: "17",
    pregunta: "¿Afectar la imagen regional?",
    formGroup: { name: "pregunta17", formControls: ["respuesta"] },
  },
  {
    numero: "18",
    pregunta: "¿Afectar la imagen nacional?",
    formGroup: { name: "pregunta18", formControls: ["respuesta"] },
  },
  {
    numero: "19",
    pregunta: "¿Genera daño ambiental?",
    formGroup: { name: "pregunta19", formControls: ["respuesta"] },
  },
];

@Component({
  selector: "app-identificacion-riesgo",
  templateUrl: "./identificacion-riesgo.component.html",
  styleUrls: ["./identificacion-riesgo.component.css"],
})
export class IdentificacionRiesgoComponent implements OnInit, OnDestroy {
  idSede: string;
  //idRiesgo: string;
  //esActualizar: boolean;

  riesgosGuardados = [];
  dataSourceRiesgos = new MatTableDataSource<[]>();
  displayedColumnsRiesgos: string[] = [
    "riesgo",
    "tipo",
    "descripcion",
    "causas",
    "consecuencias",
    "escenarioRiesgo",
    "accion",
  ];

  tipoRiesgoActivate = {
    Corrupcion: false,
    Gestion: false,
    Seguridaddigital: false,
    Fisico: false,
  };

  listaProcesos: string[] = [
    "Direccionamiento estratégico y horizonte institucional",
    "Gestión estratégica",
    "Gobierno escolar",
    "Cultura institucional",
    "Clima escolar",
    "Relaciones con el entorno",
    "Diseño pedagógico",
    "Prácticas pedagógicas",
    "Gestión de aula",
    "Seguimiento académico",
    "Apoyo a la gestión académica",
    "Administración de planta física y recursos",
    "Administración de servicios complementarios",
    "Talento humano",
    "Apoyo financiero y contable",
    "Inclusión",
    "Proyección a la comunidad",
    "Participación y convivencia",
    "Prevención de riesgos",
  ];
  listaTiposRiesgos: string[] = [];
  listaCausas: Causa[] = [];
  listaConsecuencias: string[] = [];
  listaAmenazas: string[] = [
    "Fuego",
    "Daño por agua",
    "Fenómenos climáticos",
    "Inundación",
    "Perdida de suministro de energía",
    "Falla en el sistema de suministro de agua o aire acondicionado",
    "Radiación electromagnética",
    "Radiación térmica",
    "Hurto de equipos, medios o documentos",
    "Divulgación",
    "Manipulación con software",
    "Mal funcionamiento del equipo o del software",
    "Saturación del sistema de información",
    "Uso no autorizado del equipo",
    "Uso de software falso o copiado",
    "Procesamiento ilegal de los datos",
    "Error en el uso o abuso de derechos",
    "Falsificación de derechos",
  ];
  listaTipoActivos: string[] = [
    "Información",
    "Hardware",
    "Software",
    "Red",
    "Personal",
    "Instalaciones",
  ];
  causasPorActivo = {
    Información: [
      { nombre: "Falta de controles de acceso a la información" },
      { nombre: "Ausencia de soporte de remisiones de casos de estudiantes" },
    ],
    Hardware: [
      { nombre: "Susceptibilidad a las variaciones de voltaje" },
      { nombre: "Almacenamiento sin protección" },
      {
        nombre:
          "Ausencia de política formal sobre la utilización de computadores portátiles",
      },
    ],
    Software: [
      {
        nombre:
          'Ausencia de "terminación de sesión" cuando se abandona la estación de trabajo',
      },
      { nombre: "Interfaz de usuario compleja" },
      {
        nombre:
          "Ausencia de mecanismos de identificación y autenticación, como la autenticacion de usuario",
      },
      { nombre: "Contraseñas sin protección" },
    ],
    Red: [
      { nombre: "Conexión deficiente de los cables" },
      { nombre: "Conexiones de red publica sin protección" },
    ],
    Personal: [
      { nombre: "Uso incorrecto de software y hardware" },
      {
        nombre:
          "Entrenamiento insuficiente y/o falta de conciencia acerca de la seguridad",
      },
      {
        nombre:
          "Ausencia de políticas para el uso de los medios de telecomunicaciones y mensajeria",
      },
    ],
    Instalaciones: [
      { nombre: "Ubicación en un área susceptible de inundación" },
      { nombre: "Red energética inestable" },
      {
        nombre:
          "Ausencia de protección física de la edificación, puertas y ventanas",
      },
    ],
  };
  listaCausasSeguridadDigital: Causa[] = [];

  formParcialIdentificacionRiesgo = new FormGroup({
    proceso: new FormControl("", Validators.required),
    riesgo: new FormControl("", Validators.required),
    accionOmicion: new FormControl("", Validators.required),
    usoPoder: new FormControl("", Validators.required),
    desviarGestionPublico: new FormControl("", Validators.required),
    beneficioPrivado: new FormControl("", Validators.required),
    tipo: new FormControl("", Validators.required),
    tipoActivo: new FormControl("", Validators.required),
    activo: new FormControl("", Validators.required),
    amenaza: new FormControl("", Validators.required),
    escenarioRiesgo: new FormControl(""),
    descripcion: new FormControl(""),
  });

  formCausa = new FormGroup({
    causa: new FormControl("", Validators.required),
  });
  formConsecuencia = new FormGroup({
    consecuencia: new FormControl("", Validators.required),
  });

  formularioNivelesCalificarImpactoCorrupcion = new FormGroup({});
  riesgosCorrupcion = ELEMENT_DATA_CORRUPCION;
  displayedColumnsCorrupcion: string[] = ["numero", "pregunta", "respuesta"];
  nivelImpactoCorrupcion: string = "";
  preguntasTerminadasCorrupccion: boolean;

  listaActivos: IdentificacionActivos;
  activosSelect = [];

  subscribeIdSede: Subscription;
  subscribeRiesgos: Subscription;
  subscribeCaracterizacionContexto: Subscription;

  constructor(
    private fb: FormBuilder,
    private _changeSedeService: ChangeSedeService,
    private _identificacionRiesgoRiesgoService: IdentificacionRiesgoService,
    private _notificacionService: NotificacionService,
    private _caracterizacionContextoService: CaracterizacionContextoService
  ) {
    this.buildForm(
      this.formularioNivelesCalificarImpactoCorrupcion,
      ELEMENT_DATA_CORRUPCION
    );
  }

  ngOnInit() {
    this.subscribeIdSede = this._changeSedeService
      .obtenerIdSede()
      .subscribe((idSede: string) => {
        this.idSede = idSede;
        this.subscribeRiesgos = this._identificacionRiesgoRiesgoService
          .obtenerRiesgos(this.idSede)
          .subscribe((riesgos: Riesgo[]) => {
            if (Array.isArray(riesgos)) {
              this.riesgosGuardados = riesgos;
            } else {
              this.riesgosGuardados = [];
            }
            this.dataSourceRiesgos.data = this.riesgosGuardados;
          });
        this.subscribeCaracterizacionContexto = this._caracterizacionContextoService
          .obtenerCaracterizacionContexto(this.idSede)
          .subscribe((caracterizacionContexto: CaracterizacionContexto) => {
            if (caracterizacionContexto && caracterizacionContexto != null) {
              this.listaActivos = caracterizacionContexto.identificacionActivos;
            } else {
              this.listaActivos = undefined;
            }
          });
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscribeIdSede.unsubscribe();
    if (this.subscribeRiesgos) {
      this.subscribeRiesgos.unsubscribe();
    }
  }

  buildForm(formGroup: FormGroup, dataTable: any) {
    dataTable.forEach((row) => {
      let controls = {};
      row.formGroup.formControls.forEach((control) => {
        controls[control] = new FormControl("", Validators.required);
      });

      formGroup.addControl(row.formGroup.name, this.fb.group(controls));
    });
  }

  establecerTiposRiesgos() {
    let selectsAcciones = [
      this.formParcialIdentificacionRiesgo.get("accionOmicion").value,
      this.formParcialIdentificacionRiesgo.get("usoPoder").value,
      this.formParcialIdentificacionRiesgo.get("desviarGestionPublico").value,
      this.formParcialIdentificacionRiesgo.get("beneficioPrivado").value,
    ];

    let flagShow = true;
    let flagCorrupcion = true;
    for (let index = 0; index < selectsAcciones.length; index++) {
      const accion = selectsAcciones[index];
      if (accion == "" || accion == null) {
        flagShow = false;
        break;
      } else if (accion == "No") {
        flagCorrupcion = false;
      }
    }

    if (flagShow) {
      if (flagCorrupcion) {
        this.resetTipoRiesgoActivate();
        this.tipoRiesgoActivate.Corrupcion = true;
        this.listaTiposRiesgos = ["Corrupcion"];
        this.formParcialIdentificacionRiesgo.get("tipo").setValue("Corrupcion");
        this.formParcialIdentificacionRiesgo.get("activo").disable();
        this.formParcialIdentificacionRiesgo.get("tipoActivo").disable();
        this.formParcialIdentificacionRiesgo.get("amenaza").disable();
      } else {
        this.resetTipoRiesgoActivate();
        this.listaTiposRiesgos = ["Gestión", "Físico", "Seguridad digital"];
        this.formParcialIdentificacionRiesgo.get("activo").enable();
        this.formParcialIdentificacionRiesgo.get("tipoActivo").enable();
        this.formParcialIdentificacionRiesgo.get("amenaza").enable();
      }
    }
  }

  agregarCausa() {
    let causa = this.formCausa.value.causa;
    console.log(causa);
    if (Array.isArray(causa)) {
      causa.forEach((c) => {
        this.listaCausas.push({ nombre: c });
        this.listaCausasSeguridadDigital = this.listaCausasSeguridadDigital.filter(
          (element) => {
            return element.nombre != c;
          }
        );
      });
    } else {
      this.listaCausas.push({ nombre: causa });
    }
    this.formCausa.reset();
  }
  eliminarCausa(causa) {
    this.listaCausas = this.listaCausas.filter((element) => {
      return element != causa;
    });
  }

  agregarConsecuencia() {
    this.listaConsecuencias.push(this.formConsecuencia.value.consecuencia);
    this.formConsecuencia.reset();
  }
  eliminarConsecuencia(consecuencia) {
    this.listaConsecuencias = this.listaConsecuencias.filter((element) => {
      return element != consecuencia;
    });
  }

  cambiarParametrosCausaConsecuencia(tipoRiesgo: string) {
    this.resetTipoRiesgoActivate();
    this.tipoRiesgoActivate[
      tipoRiesgo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(" ", "")
    ] = true;

    switch (tipoRiesgo) {
      case "Seguridad digital":
        this.formParcialIdentificacionRiesgo.get("activo").enable();
        this.formParcialIdentificacionRiesgo.get("tipoActivo").enable();
        this.formParcialIdentificacionRiesgo.get("amenaza").enable();
        this.formParcialIdentificacionRiesgo.get("activo").setValue("");
        this.formParcialIdentificacionRiesgo.get("tipoActivo").setValue("");
        this.formParcialIdentificacionRiesgo.get("amenaza").setValue("");
        this.formParcialIdentificacionRiesgo.get("escenarioRiesgo").disable();
        this.nivelImpactoCorrupcion = "";
        break;

      case "Físico":
        this.formParcialIdentificacionRiesgo.get("escenarioRiesgo").enable();
        this.formParcialIdentificacionRiesgo.get("activo").disable();
        this.formParcialIdentificacionRiesgo.get("tipoActivo").disable();
        this.formParcialIdentificacionRiesgo.get("amenaza").disable();
        this.nivelImpactoCorrupcion = "";
        break;

      default:
        this.formParcialIdentificacionRiesgo.get("activo").disable();
        this.formParcialIdentificacionRiesgo.get("tipoActivo").disable();
        this.formParcialIdentificacionRiesgo.get("amenaza").disable();
        this.formParcialIdentificacionRiesgo.get("escenarioRiesgo").disable();
        this.nivelImpactoCorrupcion = "";
        break;
    }
  }
  private resetTipoRiesgoActivate() {
    for (let i in this.tipoRiesgoActivate) this.tipoRiesgoActivate[i] = false;
    this.listaCausas = [];
    this.listaConsecuencias = [];
    this.listaCausasSeguridadDigital = [];
  }

  cargarCausasRiesgoSeguridadDigital(tipoActivo: string) {
    if (this.listaActivos) {
      this.activosSelect = this.listaActivos.activos.filter((act) => {
        return act.tipoActivo == tipoActivo;
      });
    } else {
      this.activosSelect = [];
    }
    this.listaCausas = [];
    this.listaCausasSeguridadDigital = this.causasPorActivo[tipoActivo];
  }

  calcularImpactoCorrupcion() {
    let respuestas = this.formularioNivelesCalificarImpactoCorrupcion.value;
    let flagDone = true;
    let respuestasAfirmativas = 0;
    this.nivelImpactoCorrupcion = "";

    for (let i in respuestas) {
      const respuesta = respuestas[i];
      if (respuesta.respuesta == "") {
        flagDone = false;
        this.preguntasTerminadasCorrupccion = false;
        break;
      } else if (respuesta.respuesta == "si") {
        respuestasAfirmativas += 1;
      }
    }

    if (flagDone) {
      this.preguntasTerminadasCorrupccion = true;
      if (respuestasAfirmativas > 11) {
        this.nivelImpactoCorrupcion = "Catastrófico";
      } else if (respuestasAfirmativas > 5) {
        this.nivelImpactoCorrupcion = "Mayor";
      } else {
        this.nivelImpactoCorrupcion = "Moderado";
      }
    }
  }

  guardarRiesgo() {
    this.formParcialIdentificacionRiesgo.get("accionOmicion").disable();
    this.formParcialIdentificacionRiesgo.get("usoPoder").disable();
    this.formParcialIdentificacionRiesgo.get("desviarGestionPublico").disable();
    this.formParcialIdentificacionRiesgo.get("beneficioPrivado").disable();
    let riesgo = this.formParcialIdentificacionRiesgo.value;
    riesgo.causas = this.listaCausas;
    riesgo.consecuencias = this.listaConsecuencias;
    if (this.nivelImpactoCorrupcion != "" && riesgo.tipo == "Corrupcion") {
      riesgo.nivelImpacto = this.nivelImpactoCorrupcion;
    }

    riesgo.idCampus = this.idSede;
    this.riesgosGuardados.push(riesgo);

    this._identificacionRiesgoRiesgoService
      .guardarRiesgo(riesgo)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "success");
      });

    this.resetForms();
  }

  eliminarRiesgo(riesgo) {
    this._identificacionRiesgoRiesgoService
      .eliminarRiesgo(riesgo._id)
      .subscribe(
        (res: Res) => {
          this.riesgosGuardados = this.riesgosGuardados.filter((r) => {
            return r._id != riesgo._id;
          });
          this.dataSourceRiesgos.data = this.riesgosGuardados;
          this._notificacionService.mostrarNotificacion(res.message, "success");
        },
        (error) => {}
      );
  }

  resetForms() {
    this.dataSourceRiesgos.data = this.riesgosGuardados;
    this.formParcialIdentificacionRiesgo.reset();
    this.formConsecuencia.reset();
    this.formCausa.reset();
    this.formularioNivelesCalificarImpactoCorrupcion.reset();
    this.listaConsecuencias = [];
    this.listaCausas = [];
    this.listaCausasSeguridadDigital = [];
    this.nivelImpactoCorrupcion = "";
    this.preguntasTerminadasCorrupccion = false;
    for (let i in this.tipoRiesgoActivate) {
      this.tipoRiesgoActivate[i] = false;
    }
    this.formParcialIdentificacionRiesgo.get("accionOmicion").enable();
    this.formParcialIdentificacionRiesgo.get("usoPoder").enable();
    this.formParcialIdentificacionRiesgo.get("desviarGestionPublico").enable();
    this.formParcialIdentificacionRiesgo.get("beneficioPrivado").enable();
  }
}
