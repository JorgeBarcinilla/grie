import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageExampleComponent } from 'src/app/components/utils/image-example/image-example.component';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { MostrarEjemplosService } from 'src/app/helpers/mostrar-ejemplos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacion-riesgo',
  templateUrl: './identificacion-riesgo.component.html',
  styleUrls: ['./identificacion-riesgo.component.css']
})
export class IdentificacionRiesgoComponent implements OnInit {

  riesgosGuardados = []
  dataSourceRiesgos = new MatTableDataSource<[]>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumnsRiesgos: string[] = ['riesgo', 'tipo', 'descripcion', 'causas', 'consecuencias', 'escenarioRiesgo'];

  tipoRiesgoActivate = {
    Corrupcion: false,
    Gestion: false,
    Seguridaddigital: false,
    Fisico: false
  }

  listaProcesos:string[] = [
    'Direccionamiento estratégico y horizonte institucional',
    'Gestión estratégica', 
    'Gobierno escolar',
    'Cultura institucional',
    'Clima escolar',
    'Relaciones con el entorno',
    'Diseño pedagógico',
    'Prácticas pedagógicas',
    'Gestión de aula',
    'Seguimiento académico',
    'Apoyo a la gestión académica',
    'Administración de planta física y recursos',
    'Administración de servicios complementarios',
    'Talento humano',
    'Apoyo financiero y contable',
    'Inclusión',
    'Proyección a la comunidad',
    'Participación y convivencia',
    'Prevención de riesgos',
  ]
  listaTiposRiesgos:string[] = [];
  listaCausas:string[] = [];
  listaConsecuencias:string[] = [];
  listaAmenazas:string[] = ['Fuego','Daño por agua','Fenomenos climaticos','Inundacion','Perdida de suministro de energia','Falla en el sistema de suministro de agua o aire acondicionado','Radiacion electromagnetica','Radiacion termica','Hurto de equipos, medios o documentos','Divulgacion','Manipulacion con software','Mal fincionamiento del equipo o del software','Saturacion del sistema de informacion','Uso no autorizado del equipo','Uso de software falso o copiado','Procesamiento ilegal de los datos','Error en el uso o abuso de derechos','Falcificacion de derechos'];
  listaActivos:string[] = ['Información','Hardware','Software','Red','Personal','Instalaciones'];
  causasPorActivo = {
    Información: ['Falta de controles de acceso a la informacion', 'Ausencia de soporte de remiciones de casos de estudiantes'],
    Hardware: ['Susceptivilidad a las variaciones de voltaje','Almacenamiento sin protección','Ausencia de politica formal sobre la utiliizacion de compuutadores portatiles'],
    Software: ['Ausencia de "terminacion de seción" cuando se abandona la estacion de trabajo','Interfaz de usuario compleja','Ausencia de mecanismos de identificación y autentificación, como la autenticacion de usuario', 'Contraseñas sin protección',  ],
    Red: ['Conexión deficiente de los cables', 'Conexiones de red publica sin protección', ],
    Personal: ['Uso incorrecto de software y hardware', 'Entrenamiento insuficiente y/o falta de conciencia acerca de la seguridad', 'Ausencia de politicas para el uso de los mediosde telecomunicaciones y mensajeria'],
    Instalaciones: ['Ubicación en un area susceptible de inundación', 'Red energetica inestable', 'Ausencia de proteccion fisica de la edificación, puertas y ventanas']
  }
  listaCausasSeguridadDigital:string[] = [];

  formParcialIdentificacionRiesgo = new FormGroup({
    proceso : new FormControl('',Validators.required),
    riesgo : new FormControl('',Validators.required),
    accionOmicion : new FormControl('',Validators.required),
    usoPoder : new FormControl('',Validators.required),
    desviarGestionPublico : new FormControl('',Validators.required),
    beneficioPrivado : new FormControl('',Validators.required),
    tipo : new FormControl('',Validators.required),
    activo : new FormControl('',Validators.required),
    amenaza : new FormControl('',Validators.required),
    escenarioRiesgo : new FormControl(''),
    descripcion : new FormControl('')
  })

  formCausa = new FormGroup({
    causa : new FormControl('',Validators.required)
  })
  formConsecuencia = new FormGroup({
    consecuencia : new FormControl('',Validators.required)
  })

  constructor() {}

  ngOnInit() {
    this.dataSourceRiesgos.paginator = this.paginator;
  }

  establecerTiposRiesgos(){

    let selectsAcciones = [
      this.formParcialIdentificacionRiesgo.get('accionOmicion').value,
      this.formParcialIdentificacionRiesgo.get('usoPoder').value,
      this.formParcialIdentificacionRiesgo.get('desviarGestionPublico').value,
      this.formParcialIdentificacionRiesgo.get('beneficioPrivado').value
    ];

    let flagShow = true
    let flagCorrupcion = true
    for (let index = 0; index < selectsAcciones.length; index++) {
      const accion = selectsAcciones[index];
      if(accion == "" || accion == null){
        flagShow = false;
        break;
      }else if(accion == "No"){
        flagCorrupcion = false;
      }
    }

    if (flagShow) {
      if (flagCorrupcion) {
        this.resetTipoRiesgoActivate()
        this.tipoRiesgoActivate.Corrupcion = true;
        this.listaTiposRiesgos = ['Corrupcion'];
        this.formParcialIdentificacionRiesgo.get('tipo').setValue('Corrupcion')
      }else{
        this.resetTipoRiesgoActivate()
        this.listaTiposRiesgos = ['Gestion', 'Fisico', 'Seguridad digital']
      }
    }
    
  }

  agregarCausa(){
    let causa = this.formCausa.value.causa;
    if (Array.isArray(causa)) {
      this.listaCausas = this.listaCausas.concat(causa)
      causa.forEach( c => {
        this.listaCausasSeguridadDigital = this.listaCausasSeguridadDigital.filter( element => {return element != c})
      });
    }else{
      this.listaCausas.push(causa);
    }
    this.formCausa.reset();
  }
  eliminarCausa(causa){
    this.listaCausas = this.listaCausas.filter( element => {return element != causa});
  }

  agregarConsecuencia(){
    this.listaConsecuencias.push(this.formConsecuencia.value.consecuencia);
    this.formConsecuencia.reset();
  }
  eliminarConsecuencia(consecuencia){
    this.listaConsecuencias = this.listaConsecuencias.filter( element => {return element != consecuencia});
  }

  cambiarParametrosCausaConsecuencia(tipoRiesgo: string){
    this.resetTipoRiesgoActivate()
    console.log(this.tipoRiesgoActivate)
    this.tipoRiesgoActivate[tipoRiesgo.replace(' ','')] = true;
    console.log(this.tipoRiesgoActivate)
    
    switch (tipoRiesgo) {
      case 'Seguridad digital':
        this.formParcialIdentificacionRiesgo.get('activo').enable();
        this.formParcialIdentificacionRiesgo.get('amenaza').enable();
        this.formParcialIdentificacionRiesgo.get('activo').setValue('');
        this.formParcialIdentificacionRiesgo.get('amenaza').setValue('');
        break;
    
      case 'Fisico':
        this.formParcialIdentificacionRiesgo.get('escenarioRiesgo').enable();
        this.formParcialIdentificacionRiesgo.get('escenarioRiesgo').setValue('');
        break;

      default:
        this.formParcialIdentificacionRiesgo.get('activo').disable();
        this.formParcialIdentificacionRiesgo.get('amenaza').disable();
        this.formParcialIdentificacionRiesgo.get('escenarioRiesgo').disable();
        break;
    }

  }
  private resetTipoRiesgoActivate(){
    for(let i in this.tipoRiesgoActivate)
      this.tipoRiesgoActivate[i] = false;
      this.listaCausas = [];
      this.listaConsecuencias = [];
      this.listaCausasSeguridadDigital = []
  }

  cargarCausasRiesgoSeguridadDigital(activo: string){
    this.listaCausas = [];
    this.listaCausasSeguridadDigital = this.causasPorActivo[activo];
  }

  guardarRiesgo(){
    let riesgo = this.formParcialIdentificacionRiesgo.value;
    riesgo.causas = this.listaCausas;
    riesgo.consecuencias = this.listaConsecuencias;
    this.riesgosGuardados.push(riesgo);
    this.dataSourceRiesgos.data = this.riesgosGuardados;
    this.formParcialIdentificacionRiesgo.reset();
    this.formConsecuencia.reset();
    this.formCausa.reset();
    this.listaConsecuencias = [];
    this.listaCausas = [];
    this.listaCausasSeguridadDigital = [];


    
  }

  guardarRiesgos(){
    console.log("Esto es lo que guarda la vista identificacion del riesgo")
    console.log(this.riesgosGuardados)
  }
  
}
