import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface DataElementSingleAnswer {
  pregunta: string;
  formGroup:{name: string, formControls:['respuesta']}
}
const ELEMENT_DATA_FACTORES_EDUCATIVOS: DataElementSingleAnswer[] = [
  {pregunta: 'Participación de padres de familia en proyectos de gestión de riesgos', formGroup:{name: 'pregunta1', formControls: ['respuesta']}},
  {pregunta: 'Incorporación curricular de la administración del riesgo en los planes de estudio, proyectos de aula, transversales, etc', formGroup:{name: 'pregunta2', formControls: ['respuesta']}},
  {pregunta: 'Implementación de herramientas pedagógicas para la administración del riesgo',  formGroup:{name: 'pregunta3', formControls: ['respuesta']}},
  {pregunta: 'Apropiación de temas relacionados con la administración del riesgo por parte de docentes, directivos docentes y estudiantes', formGroup:{name: 'pregunta4', formControls: ['respuesta']}},
];

const ELEMENT_DATA_CRAE: DataElementSingleAnswer[] = [
  {pregunta: 'El Comité escolar de gestión del riesgo está conformado', formGroup:{name: 'pregunta1', formControls: ['respuesta']}},
  {pregunta: 'El comité escolar de gestión del riesgo está funcionando', formGroup:{name: 'pregunta2', formControls: ['respuesta']}},
  {pregunta: 'Las brigadas de emergencia están conformadas',  formGroup:{name: 'pregunta3', formControls: ['respuesta']}},
  {pregunta: 'Las brigadas de emergencia están funcionando', formGroup:{name: 'pregunta4', formControls: ['respuesta']}},
  {pregunta: 'Existen instrumentos o formatos para realizar inspecciones en los equipos y dotaciones de emergencia', formGroup:{name: 'pregunta5', formControls: ['respuesta']}},
];

const ELEMENT_DATA_COMUNICACION_INTERNA: DataElementSingleAnswer[] = [
  {pregunta: 'Pagina web', formGroup:{name: 'paginaWeb', formControls: ['respuesta']}},
  {pregunta: 'Periodico institucional', formGroup:{name: 'periodicoInstitucional', formControls: ['respuesta']}},
  {pregunta: 'Correo institucional',  formGroup:{name: 'correoInstitucional', formControls: ['respuesta']}},
  {pregunta: 'Circulares', formGroup:{name: 'circulares', formControls: ['respuesta']}}
];

@Component({
  selector: 'app-contexto-interno',
  templateUrl: './contexto-interno.component.html',
  styleUrls: ['./contexto-interno.component.css']
})
export class ContextoInternoComponent implements OnInit {

  @Input() formularioContextoInterno: FormGroup;


  otraEstructura: boolean;

  formParcialEstructuras = new FormGroup({
    estructurasParcial : new FormControl('', Validators.required),
    calificacionParcial : new FormControl('', Validators.required)
  });

  formParcialFinancieros = new FormGroup({
    financieroParcial : new FormControl('', Validators.required),
    rubroParcial : new FormControl('', Validators.required)
  });

  formParcialComunidadEducativa = new FormGroup({
    tipoPoblacion : new FormControl('', Validators.required),
    cantidad : new FormControl('', Validators.required),
    cantidadDiscapacitados : new FormControl(''),
    tiposDiscapacidad : new FormControl(''),
  });

  formParcialOtraComunicacionInterna = new FormGroup({
    otraComunicacion : new FormControl('', Validators.required)
  });

  formParcialFactoresEducativos = new FormGroup({});
  formParcialCRAE = new FormGroup({});
  formParcialComunicacionInterna = new FormGroup({});
  
  
  estructurasFisicas = ['Cimiento de las edificaciones', 'Muros estructurales',
  'Techos y cubiertas', 'Sismo resistencia', 'Escaleras y accesos',
  'Puertas y muros cortafuegos', 'Salidas de emergencia', 'Rutas de evacuacion',
  'Señalización de vías de evacuación', 'Sistemas de detección de incendios',
  'Disponibilidad de tanque de reserva', 'Suministro de energía',
  'Suministro de agua', 'Recolección de basura', 'Gas natural', 'Parqueaderos',
  'Camillas', 'Botiquines', 'Extintores', 'Sistema de alarma', 'Planta de emergencia',
  'Sistema de vigilancia'];
  estructurasCalificadas = []

  financieros = ['Mecanismos para gestión externa de recursos', 'Presupuesto para respuesta a emergencia',
  'Póliza todo riesgo para la institución','Póliza para muebles, enseres y equipos']
  financierosRubros = []

  tipoPoblacion = ['Menores de tres años', 'Educación pre-escolar', 'Basica primaria', 'Basica secundaria', 'Docentes', 'Docente orientador', 'Administrativos', 'Cafeterias-Restaurantes', 'Servicios generales',
  'Portero', 'Seguridad privada']
  tipoPoblacionGuardada = []
  dataSourceComunidadEducativa = new MatTableDataSource<[]>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumnsComunidadEducativa: string[] = ['tipoPoblacion', 'cantidad', 'cantidadDiscapacitados', 'tiposDiscapacidad'];

  dataSourceFactoresEducativos = new MatTableDataSource<DataElementSingleAnswer>(ELEMENT_DATA_FACTORES_EDUCATIVOS);
  displayedColumnsFactoresEducativos: string[] = ['pregunta', 'respuesta'];

  dataSourceCRAE = new MatTableDataSource<DataElementSingleAnswer>(ELEMENT_DATA_CRAE);
  displayedColumnsCRAE: string[] = ['pregunta', 'respuesta'];

  dataSourceComunicacionInterna = new MatTableDataSource<DataElementSingleAnswer>(ELEMENT_DATA_COMUNICACION_INTERNA);
  displayedColumnsComunicacionInterna: string[] = ['pregunta', 'respuesta'];

  constructor(private fb: FormBuilder) { 
    this.buildForm(this.formParcialFactoresEducativos, ELEMENT_DATA_FACTORES_EDUCATIVOS);
    this.buildForm(this.formParcialCRAE, ELEMENT_DATA_CRAE);
    this.buildForm(this.formParcialComunicacionInterna, ELEMENT_DATA_COMUNICACION_INTERNA);
  }

  ngOnInit() {
    this.dataSourceComunidadEducativa.paginator = this.paginator;
  }

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

  cambiarCampo(){
    if(this.otraEstructura){
      this.otraEstructura = false;
      this.formParcialEstructuras.get('estructurasParcial').setValue('');
    }else{
      this.otraEstructura = true;
      this.formParcialEstructuras.get('estructurasParcial').setValue('');
    }
  }

  calificarEstructuras(){
    let estrcs = this.formParcialEstructuras.value.estructurasParcial;
    let icon
    switch (this.formParcialEstructuras.value.calificacionParcial) {
      case 'Bueno':
        icon = "sentiment_very_satisfied";
        break;
      case 'Regular':
        icon = "sentiment_satisfied";
        break;
      case 'Malo':
        icon = "sentiment_very_dissatisfied";
        break;
    
      default:
        break;
    }

    if(Array.isArray(estrcs)){
      estrcs.forEach(estr => {
        this.estructurasFisicas = this.estructurasFisicas.filter( est => {return est != estr});
        this.estructurasCalificadas.push({nombre: estr, calificacion : this.formParcialEstructuras.value.calificacionParcial, icon: icon});
      });
    }else{
      this.estructurasFisicas = this.estructurasFisicas.filter( est => {return est != estrcs});
      this.estructurasCalificadas.push({nombre: estrcs, calificacion : this.formParcialEstructuras.value.calificacionParcial, icon: icon});
    }
    

    this.formularioContextoInterno.get('estructuraFisica').setValue(this.estructurasCalificadas);
    this.formParcialEstructuras.get('estructurasParcial').setValue('');
    this.formParcialEstructuras.get('calificacionParcial').setValue('');
  }

  eliminarEstructura(nombre : string){
    this.estructurasCalificadas = this.estructurasCalificadas.filter( est => {return est.nombre != nombre});
    this.estructurasFisicas.unshift(nombre);
    this.formularioContextoInterno.get('estructuraFisica').setValue(this.estructurasCalificadas);
  }

  guardarFinanciero(){
    let fi = this.formParcialFinancieros.value.financieroParcial;
    this.financieros = this.financieros.filter( est => {return est != fi});
    this.financierosRubros.push({nombre: fi, rubro : this.formParcialFinancieros.value.rubroParcial});
    this.formularioContextoInterno.get('financieros').setValue(this.financierosRubros);
    this.formParcialFinancieros.get('rubroParcial').setValue('');
    this.formParcialFinancieros.get('financieroParcial').setValue('');
  }

  eliminarFinanciero(nombre : string){
    this.financierosRubros = this.financierosRubros.filter( fin => {return fin.nombre != nombre});
    this.financieros.unshift(nombre);
    this.formularioContextoInterno.get('financieros').setValue(this.financierosRubros);
  }

  guardarComunidadEducativa(){
    let tipo = this.formParcialComunidadEducativa.value.tipoPoblacionParcial;
    this.tipoPoblacion = this.tipoPoblacion.filter( tip => {return tip != tipo});
    this.tipoPoblacionGuardada.push(this.formParcialComunidadEducativa.value);
    this.dataSourceComunidadEducativa.data = this.tipoPoblacionGuardada;
    this.formularioContextoInterno.get('comunidadEducativa').setValue(this.tipoPoblacionGuardada);
    this.displayedColumnsComunidadEducativa.forEach(element => {
      this.formParcialComunidadEducativa.get(element).setValue('');
    });
  }

  guardarFactoresEducativos(){
    this.formularioContextoInterno.get('factoresEducativos').setValue(this.formParcialFactoresEducativos.value);
  }

  guardarCRAE(){
    this.formularioContextoInterno.get('CRAE').setValue(this.formParcialCRAE.value);
  }

  guardarComunicacionInterna(){
    this.formularioContextoInterno.get('comunicacionInterna').setValue(this.formParcialComunicacionInterna.value);
  }

  crearOtraComunicacion(){
    const comunicacion = <string>this.formParcialOtraComunicacionInterna.value.otraComunicacion;

    let row = <DataElementSingleAnswer>{pregunta: comunicacion, formGroup:{name: comunicacion.replace(/ /g,"").toLocaleLowerCase(), formControls: ['respuesta']}};

    let controls = {};
    row.formGroup.formControls.forEach(control => {
      controls[control] = new FormControl('', Validators.required);
    });

    this.formParcialComunicacionInterna.addControl(row.formGroup.name,this.fb.group(controls));

    ELEMENT_DATA_COMUNICACION_INTERNA.push(row);
    this.dataSourceComunicacionInterna.data = ELEMENT_DATA_COMUNICACION_INTERNA;

    this.formParcialOtraComunicacionInterna.get('otraComunicacion').setValue('');
  }

}
