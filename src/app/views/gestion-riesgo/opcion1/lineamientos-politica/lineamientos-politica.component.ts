import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LabelType, Options } from 'ng5-slider';

export interface DataElementNivelesProbabilidad {
  descriptor: string;
  nivel: number;
  descripcion: string;
  formGroup:{name: string, formControls:['cantidad','numeroVeces','ocurrencia']}
}
export interface DataElementRiesgosCorrupcion {
  numero: string;
  pregunta: string;
  formGroup:{name: string, formControls:['respuesta']}
}
export interface DataElementRiesgosFisicos {
  impacto: string;
  descriptor: string;
  formGroup:{name: string, formControls:['porcentajeAfectacion']}
}
export interface DataElementRiesgosGestion {
  impacto: string;
  descriptor: string;
  formGroup:{name: string, formControls:['numeroVeces']}
}
export interface DataElementRiesgosSeguridadDigital {
  impacto: string;
  descriptor: string;
}

const ELEMENT_DATA: DataElementNivelesProbabilidad[] = [
  {nivel: 5, descriptor: 'Casi seguro', descripcion: 'Se espera que el evento ocurre en la mayoría de las circunstancias.', formGroup:{name: 'nivel5', formControls: ['cantidad','numeroVeces','ocurrencia']}},
  {nivel: 4, descriptor: 'Probable', descripcion: 'Es viable que el evento ocurra en la mayoría de las circunstancias.', formGroup:{name: 'nivel4', formControls: ['cantidad','numeroVeces','ocurrencia']}},
  {nivel: 3, descriptor: 'Posible', descripcion: 'El evento podrá ocurrir en cualquier momento.', formGroup:{name: 'nivel3', formControls: ['cantidad','numeroVeces','ocurrencia']}},
  {nivel: 2, descriptor: 'Improbable', descripcion: 'El evento puede ocurrir en cualquier momento.', formGroup:{name: 'nivel2', formControls: ['cantidad','numeroVeces','ocurrencia']}},
  {nivel: 1, descriptor: 'Rara vez', descripcion: 'El evento puede ocurrir solo en circunstancias excepcionales (poco comunes o anormales).', formGroup:{name: 'nivel1', formControls: ['cantidad','numeroVeces','ocurrencia']}},
  
];

const ELEMENT_DATA_FISICOS: DataElementRiesgosFisicos[] = [
  {impacto: 'Catastrófico', descriptor: 'Los efectos del evento afectan la Institución Educativa. Generación de muertes y/o pérdidas de grandes montos de dinero.', formGroup:{name: 'impactoCatastrofico', formControls:['porcentajeAfectacion']}},
  {impacto: 'Mayor', descriptor: 'Los efectos del evento afectan la Institución Educativa. Generación de alguno heridos y/o pérdidas económicas considerables', formGroup:{name: 'impactoMayor', formControls:['porcentajeAfectacion']}},
  {impacto: 'Moderado', descriptor: 'Los efectos del evento afectan la Institución Educativa. Generación de lesiones personales de no mucha gravedad y/o pérdidas económicas', formGroup:{name: 'impactoModerado', formControls:['porcentajeAfectacion']}},
  {impacto: 'Menor', descriptor: 'Los efectos del evento afectan la Institución Educativa. Generación de lesiones personales muy leves y/o pequeñas pérdidas económicas', formGroup:{name: 'impactoMenor', formControls:['porcentajeAfectacion']}},
  {impacto: 'Insignificante', descriptor: 'Los efectos del evento no afectan la infraestructura de la Institución Educativa. No se generan heridos ni pérdidas económicas de consideración.', formGroup:{name: 'impactoInsignificante', formControls:['porcentajeAfectacion']}}
  
];

const ELEMENT_DATA_GESTION: DataElementRiesgosGestion[] = [
  {impacto: 'Catastrófico', descriptor: 'Interrupción de las operaciones de la Institución Educativa por el numero de días definido en la siguiente columna, Incumplimiento en las metas y objetivos institucionales afectando de forma grave la ejecución presupuestal, Pérdida de información crítica para la Institución que no se puede recuperar, Imagen institucional afectada en el orden regional o nacional por actos o hechos de corrupción comprobadas.', formGroup:{name: 'impactoCatastrofico', formControls:['numeroVeces']}},
  {impacto: 'Mayor', descriptor: 'Interrupción de las operaciones de la Institución Educativa por el numero de días definido en la siguiente columna, Sanción por parte del ente territorial, Pérdida de información crítica para la Institución que puede ser recuperada de forma parcial o incompleta, Imagen institucional afectada en el orden regional o nacional por incumplimiento en la prestación del servicio a la comunidad educativa.', formGroup:{name: 'impactoMayor', formControls:['numeroVeces']}},
  {impacto: 'Moderado', descriptor: 'Interrupción de las operaciones de la Institución Educativa por el numero de días definido en la siguiente columna, Reclamaciones o quejas de la comunidad educativa que podrían implicar una denuncia o demanda ante el ente territorial, Inoportunidad en la información, ocasionando retrasos en la atención de la comunidad educativa, Imagen institucional afectada en el orden regional o nacional por retrasos en la prestación del servicio a la comunidad educativa.', formGroup:{name: 'impactoModerado', formControls:['numeroVeces']}},
  {impacto: 'Menor', descriptor: 'Interrupción de las operaciones de la Institución Educativa por algunas horas Reclamaciones o quejas de la comunidad educativa que implican investigaciones internas disciplinarias, Imagen institucional afectada en el orden local por retrasos en la prestación del servicio a la comunidad educativa.', formGroup:{name: 'impactoMenor', formControls:['numeroVeces']}},
  {impacto: 'Insignificante', descriptor: 'No hay interrupción de las operaciones de la Institución Educativa, No se generan sanciones por parte de Ningún ente, No se afecta la imagen institucional de forma significativa.', formGroup:{name: 'impactoInsignificante', formControls:['numeroVeces']}}
  
];

const ELEMENT_DATA_SEGURIDAD_DIGITAL: DataElementRiesgosSeguridadDigital[] = [
  {impacto: 'Catastrófico', descriptor: 'Afectación muy grave de la integridad, disponibilidad y confidencialidad de la información'},
  {impacto: 'Mayor', descriptor: 'Afectación grave de la integridad, disponibilidad y confidencialidad de la información'},
  {impacto: 'Moderado', descriptor: 'Afectación moderada de la integridad, disponibilidad y confidencialidad de la información'},
  {impacto: 'Menor', descriptor: 'Afectación leve de la integridad, disponibilidad y confidencialidad de la información'},
  {impacto: 'Insignificante', descriptor: 'Sin afectación de la integridad, disponibilidad y confidencialidad de la información'}
  
];

const ELEMENT_DATA_CORRUPCION: DataElementRiesgosCorrupcion[] = [
  {numero: '1', pregunta: '¿Afectar al grupo de funcionarios del proceso?', formGroup:{name: 'pregunta1', formControls:['respuesta']}},
  {numero: '2', pregunta: '¿Afectar el cumplimiento de metas y objetivos de la dependencia?', formGroup:{name: 'pregunta2', formControls:['respuesta']}},
  {numero: '3', pregunta: '¿Afectar el cumplimiento de misión de la entidad?', formGroup:{name: 'pregunta3', formControls:['respuesta']}},
  {numero: '4', pregunta: '¿Afectar el cumplimiento de la misión del sector al que pertenece la entidad?', formGroup:{name: 'pregunta4', formControls:['respuesta']}},
  {numero: '5', pregunta: '¿Generar pérdida de confianza de la entidad, afectando su reputación?', formGroup:{name: 'pregunta5', formControls:['respuesta']}},
  {numero: '6', pregunta: '¿Generar pérdida de recursos económicos?', formGroup:{name: 'pregunta6', formControls:['respuesta']}},
  {numero: '7', pregunta: '¿Afectar la generación de los productos o la prestación de servicios?', formGroup:{name: 'pregunta7', formControls:['respuesta']}},
  {numero: '8', pregunta: '¿Dar lugar al detrimento de calidad de vida de la comunidad por la pérdida del bien, servicios o recursos públicos?', formGroup:{name: 'pregunta8', formControls:['respuesta']}},
  {numero: '9', pregunta: '¿Generar pérdida de información de la entidad?', formGroup:{name: 'pregunta9', formControls:['respuesta']}},
  {numero: '10', pregunta: '¿Generar intervención de los órganos de control, de la Fiscalía u otro ente?', formGroup:{name: 'pregunta10', formControls:['respuesta']}},
  {numero: '11', pregunta: '¿Dar lugar a procesos sancionatorios?', formGroup:{name: 'pregunta11', formControls:['respuesta']}},
  {numero: '12', pregunta: '¿Dar lugar a procesos disciplinarios?', formGroup:{name: 'pregunta12', formControls:['respuesta']}},
  {numero: '13', pregunta: '¿Dar lugar a procesos fiscales?', formGroup:{name: 'pregunta13', formControls:['respuesta']}},
  {numero: '14', pregunta: '¿Dar lugar a procesos penales?', formGroup:{name: 'pregunta14', formControls:['respuesta']}},
  {numero: '15', pregunta: '¿Generar pérdida de credibilidad del sector?', formGroup:{name: 'pregunta15', formControls:['respuesta']}},
  {numero: '16', pregunta: '¿Ocasionar lesiones físicas o pérdida de vidas humanas?', formGroup:{name: 'pregunta16', formControls:['respuesta']}},
  {numero: '17', pregunta: '¿Afectar la imagen regional?', formGroup:{name: 'pregunta17', formControls:['respuesta']}},
  {numero: '18', pregunta: '¿Afectar la imagen nacional?', formGroup:{name: 'pregunta18', formControls:['respuesta']}},
  {numero: '19', pregunta: '¿Genera daño ambiental?', formGroup:{name: 'pregunta19', formControls:['respuesta']}}
];

@Component({
  selector: 'app-lineamientos-politica',
  templateUrl: './lineamientos-politica.component.html',
  styleUrls: ['./lineamientos-politica.component.css']
})
export class LineamientosPoliticaComponent implements OnInit {
  
  nivelImpactoCorrupcion : string;
  preguntasTerminadasCorrupccion : boolean;

  tiposRiesgos = ['Corrupción', 'Fisicos', 'Gestión', 'Seguridad digital'];
  isCorrupcion: boolean;
  isGestion: boolean;
  isFisico: boolean = false;
  isSeguridadDigital: boolean;
  isNone : boolean = true;

  
  displayedColumnsProbabilidad: string[] = ['nivel', 'descriptor', 'descripcion', 'frecuencia'];
  displayedColumnsFisico: string[] = ['impacto', 'descriptor', 'porcentajeAfectacion'];
  displayedColumnsGestion: string[] = ['impacto', 'descriptor', 'tiempoInterrupcion'];
  displayedColumnsCorrupcion: string[] = ['numero', 'pregunta', 'respuesta'];
  displayedColumnsSeguridadDigital: string[] = ['impacto', 'descriptor'];

  nivelesProbabilidad = ELEMENT_DATA;
  riesgosFisicos = ELEMENT_DATA_FISICOS;
  riesgosGestion = ELEMENT_DATA_GESTION;
  riesgosCorrupcion = ELEMENT_DATA_CORRUPCION;
  riesgosSeguridadDigital = ELEMENT_DATA_SEGURIDAD_DIGITAL;

  formulario1 = new FormGroup({
    terminosDefiniciones: new FormControl(''),
    objetivo: new FormControl(''),
    alcance: new FormControl(''),
  });

  formularioNivelesAceptacionRiesgo = new FormGroup({
    riesgoBajo: new FormControl(''),
    riesgoModerado: new FormControl(''),
    riesgoAlto: new FormControl(''),
    riesgoExtremo: new FormControl(''),
  });

  formularioNivelesCalificarProbabilidad = new FormGroup({});
  formularioNivelesCalificarImpactoFisico = new FormGroup({});
  formularioNivelesCalificarImpactoGestion = new FormGroup({});
  formularioNivelesCalificarImpactoCorrupcion = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.buildForm(this.formularioNivelesCalificarProbabilidad, ELEMENT_DATA);
    this.buildForm(this.formularioNivelesCalificarImpactoFisico, ELEMENT_DATA_FISICOS);
    this.buildForm(this.formularioNivelesCalificarImpactoGestion, ELEMENT_DATA_GESTION);
    this.buildForm(this.formularioNivelesCalificarImpactoCorrupcion, ELEMENT_DATA_CORRUPCION);

    console.log(this.formularioNivelesCalificarProbabilidad)
    console.log(this.formularioNivelesCalificarImpactoCorrupcion)
    console.log(this.formularioNivelesCalificarImpactoGestion)
    console.log(this.formularioNivelesCalificarImpactoFisico)
  }

  ngOnInit() {

  }

  minValue: number = 0;
  maxValue: number = 10;
  optionsSlider: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value +'%' ;
        case LabelType.High:
          return value + '%';
        default:
          return  value +'%';
      }
    }
  };

  //Este metodo construye un grupo de array de formularios
  buildForm(formGroup:FormGroup, dataTable: any){
    dataTable.forEach(row => {
      let controls = {};
      row.formGroup.formControls.forEach(control => {
        controls[control] = new FormControl('', Validators.required);
      });

      formGroup.addControl(row.formGroup.name,this.fb.group(controls));
      
    });
  }


  viewTablaRiesgo(riesgo){
    switch (riesgo) {
      case 'Corrupción':
        this.isCorrupcion = true;
        this.isFisico = false;
        this.isNone = false;
        this.isSeguridadDigital = false;
        this.isGestion = false;
        break;
      case 'Fisicos':
        this.isCorrupcion = false;
        this.isFisico = true;
        this.isNone = false;
        this.isSeguridadDigital = false;
        this.isGestion = false;
        break;
      case 'Gestión':
        this.isCorrupcion = false;
        this.isFisico = false;
        this.isNone = false;
        this.isSeguridadDigital = false;
        this.isGestion = true;
        break;
      case 'Seguridad digital':
        this.isCorrupcion = false;
        this.isFisico = false;
        this.isNone = false;
        this.isSeguridadDigital = true;
        this.isGestion = false;
        break;
      default:
        this.isCorrupcion = false;
        this.isFisico = false;
        this.isNone = true;
        this.isSeguridadDigital = false;
        this.isGestion = false;
        break;
    }
  }

  calcularImpactoCorrupcion(){
    let respuestas = this.formularioNivelesCalificarImpactoCorrupcion.value;
    let flagDone = true;
    let respuestasAfirmativas = 0;
    
    
    for (let i in respuestas) {
      const respuesta = respuestas[i];
      console.log(respuesta)
      if (respuesta.respuesta == "") {
        flagDone = false;
        this.preguntasTerminadasCorrupccion = false;
        break;
      }else if(respuesta.respuesta == "si"){
        console.log("se suma 1")
        respuestasAfirmativas += 1
      }
      
    }

    console.log("estado: "+flagDone)
    console.log("puntaje: "+respuestasAfirmativas)

    if (flagDone) {
      this.preguntasTerminadasCorrupccion = true
      if(respuestasAfirmativas > 11){
        this.nivelImpactoCorrupcion = "Catastrofico"
      }else if(respuestasAfirmativas > 5){
        this.nivelImpactoCorrupcion = "Mayor"
      }else{
        this.nivelImpactoCorrupcion = "Moderado"
      }
    }

    
  }

  guardarLinemientosPolitica(){
    let formLineamientosPolitica = Object.assign(this.formularioNivelesCalificarProbabilidad.value,this.formularioNivelesCalificarImpactoGestion.value,
      this.formularioNivelesCalificarImpactoCorrupcion.value, this.formularioNivelesCalificarImpactoFisico.value)
    
    console.log("Esto es lo que guarda lineamientos de politica")
    console.log(formLineamientosPolitica)
  }

}
