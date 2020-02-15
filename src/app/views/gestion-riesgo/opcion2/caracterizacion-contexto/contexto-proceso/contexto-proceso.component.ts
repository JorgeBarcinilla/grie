import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataElementSingleAnswer } from '../contexto-interno/contexto-interno.component';

@Component({
  selector: 'app-contexto-proceso',
  templateUrl: './contexto-proceso.component.html',
  styleUrls: ['./contexto-proceso.component.css']
})
export class ContextoProcesoComponent implements OnInit {

  @Input() formularioContextoProceso: FormGroup;

  formParcialContextoProceso = new FormGroup({
    proceso : new FormControl('', Validators.required),
    responsable : new FormControl('', Validators.required),
    objetivo : new FormControl('', Validators.required),
    alcance : new FormControl('', Validators.required),
    entradaProceso : new FormControl('', Validators.required),
    actividadesClaves : new FormControl('', Validators.required),
    salidaProceso : new FormControl('', Validators.required),
    clientesProceso : new FormControl('', Validators.required),
    recursos : new FormControl('', Validators.required),
    requisitos : new FormControl('', Validators.required),
    documentosInstitucionales : new FormControl('', Validators.required),
    indicadores : new FormControl('', Validators.required),
  });
  procesos = ['Direccionamiento estratégico y horizonte institucional', 'Gestión estratégica','Gobierno escolar','Cultura institucional','Clima escolar', 'Relaciones con el entorno','Diseño pedagogico','Practicas pedagogicas','Gestion de aula', 'Seguimiento academico', 'Apoyo a la gestion academica', 'Administracion de planta fisica y recursos','Administracion de servicios complementarios','Talento humano','Apoyo financiero y contable','Inclucion','Proyeccion a la comunidad','Participacion y convivencia','Prevencion de riesgos']
  procesosContextualizados = []

  dataSourceContextoProceso = new MatTableDataSource<DataElementSingleAnswer>();
  displayedContextoProceso: string[] = ['proceso', 'responsable','objetivo','alcance','entradaProceso','actividadesClaves','salidaProceso','clientesProceso','recursos','requisitos','documentosInstitucionales','indicadores'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceContextoProceso.paginator = this.paginator;
  }

  guardarProceso(){
    let proceso = this.formParcialContextoProceso.value;
    this.procesos = this.procesos.filter( proc => {return proc != proceso.proceso});
    this.procesosContextualizados.push(proceso);
    this.dataSourceContextoProceso.data = this.procesosContextualizados;
    this.formularioContextoProceso.get('contextosProcesos').setValue(this.procesosContextualizados);
    this.formParcialContextoProceso.get('proceso').setValue('');
    this.formParcialContextoProceso.get('responsable').setValue('');
    this.formParcialContextoProceso.get('objetivo').setValue('');
    this.formParcialContextoProceso.get('alcance').setValue('');
    this.formParcialContextoProceso.get('entradaProceso').setValue('');
    this.formParcialContextoProceso.get('actividadesClaves').setValue('');
    this.formParcialContextoProceso.get('salidaProceso').setValue('');
    this.formParcialContextoProceso.get('clientesProceso').setValue('');
    this.formParcialContextoProceso.get('recursos').setValue('');
    this.formParcialContextoProceso.get('requisitos').setValue('');
    this.formParcialContextoProceso.get('documentosInstitucionales').setValue('');
    this.formParcialContextoProceso.get('indicadores').setValue('');
     
  }

}
