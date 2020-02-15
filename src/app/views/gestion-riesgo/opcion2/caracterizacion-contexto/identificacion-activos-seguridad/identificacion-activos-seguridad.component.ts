import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataElementSingleAnswer } from '../contexto-interno/contexto-interno.component';

@Component({
  selector: 'app-identificacion-activos-seguridad',
  templateUrl: './identificacion-activos-seguridad.component.html',
  styleUrls: ['./identificacion-activos-seguridad.component.css']
})
export class IdentificacionActivosSeguridadComponent implements OnInit {

  @Input() formularioIdentificacionActivos: FormGroup;

  formParcialIdentificacionActivos = new FormGroup({
    proceso : new FormControl('', Validators.required),
    activo : new FormControl('', Validators.required),
    tipoActivo : new FormControl('', Validators.required),
    responsable : new FormControl('', Validators.required),
    descripcion : new FormControl('', Validators.required),
    tipoInformacion : new FormControl('', Validators.required),
    tipoDato : new FormControl('', Validators.required),
    criticidadRespectoConfidencialidad : new FormControl('', Validators.required),
    criticidadRespectoIntegridad : new FormControl('', Validators.required),
    criticidadRespectoDisponibilidad : new FormControl('', Validators.required),
    nivelCriticidad : new FormControl('', Validators.required),
  });
  listaProcesos = ['Direccionamiento estratégico y horizonte institucional', 'Gestión estratégica','Gobierno escolar','Cultura institucional','Clima escolar', 'Relaciones con el entorno','Diseño pedagogico','Practicas pedagogicas','Gestion de aula', 'Seguimiento academico', 'Apoyo a la gestion academica', 'Administracion de planta fisica y recursos','Administracion de servicios complementarios','Talento humano','Apoyo financiero y contable','Inclucion','Proyeccion a la comunidad','Participacion y convivencia','Prevencion de riesgos']
  listaTiposActivos = ['Información', 'Software', 'Hardware', 'Componentes de red', 'Personas', 'Instalaciones']
  listaTiposInformacion = ['Pública', 'Pública clasificada', 'Pública reservada']
  listaTipoDato = ['Dato público', 'Dato semiprivado', 'Dato privado', 'Dato sensible']
  listaCriticidadConfidencialidad = ['Información publica reservada (Alta)', 'Información publica clasifícada (Media)', 'Información pública (Baja)', 'No clasifícada']
  listaCriticidadIntegridad = ['Alta', 'Media', 'Baja', 'No clasifícada']
  listaCriticidadDisponibilidad = ['Alta', 'Media', 'Baja', 'No clasifícada']
  listaNivelCriticidad = ['Alta', 'Media', 'Baja']
  activosAgregados = []

  dataSourceIdentificacionActivos = new MatTableDataSource<DataElementSingleAnswer>();
  displayedIdentificacionActivos: string[] = ['proceso', 'activo','tipoActivo','responsable','descripcion','tipoInformacion','tipoDato','criticidadRespectoConfidencialidad','criticidadRespectoIntegridad','criticidadRespectoDisponibilidad','nivelCriticidad'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSourceIdentificacionActivos.paginator = this.paginator;
  }

  guardarActivo(){
    let activo = this.formParcialIdentificacionActivos.value;
    this.activosAgregados.push(activo);
    this.dataSourceIdentificacionActivos.data = this.activosAgregados;
    this.formularioIdentificacionActivos.get('activos').setValue(this.activosAgregados);
    
    this.displayedIdentificacionActivos.forEach(element => {
      this.formParcialIdentificacionActivos.get(element).setValue('');
    });
     
  }

}
