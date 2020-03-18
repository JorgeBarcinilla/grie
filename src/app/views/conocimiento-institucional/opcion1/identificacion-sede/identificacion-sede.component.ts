import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog, MatCheckboxChange } from '@angular/material';
import { ModalAgregarEdificioComponent } from './modal-agregar-edificio/modal-agregar-edificio.component';

@Component({
  selector: 'app-identificacion-sede',
  templateUrl: './identificacion-sede.component.html',
  styleUrls: ['./identificacion-sede.component.css']
})
export class IdentificacionSedeComponent implements OnInit {

  listaSedes = [{
    id: 1,
    nombre: "Sede ejemplo"
  }]
  

  formIdentificacionSede = new FormGroup({
    codDane : new FormControl(''),
    coordinador : new FormControl(''),
    cantEstudiantes : new FormControl(''),
    cantDocentes : new FormControl(''),
    datosNivelDirectivo : new FormControl(''),
    municipio : new FormControl(''),
    barrio : new FormControl(''),
    direccion : new FormControl(''),
    telefono : new FormControl(''),
    correo : new FormControl(''),
    limiteNorte : new FormControl(''),
    limiteEste : new FormControl(''),
    limiteOeste : new FormControl(''),
    limiteSur : new FormControl(''),
    anioConstruccion: new FormControl(''),
    areaConstruida: new FormControl(''),
    areaLibre: new FormControl(''),
    archivosSoporte: new FormControl(''),
    edificios: new FormControl(''),
    jornadas: new FormControl(''),
  })

  formArchivosSoporte = new FormGroup({
    licenciaConstruccion: new FormControl(''),
    conceptoUsoConstruccion: new FormControl(''),
    conceptoHigienicoSanitario: new FormControl(''),
    permisoAmbiental: new FormControl(''),
    conceptoBomberos: new FormControl(''),
  })

  formDatosNivelDirectivo = new FormGroup({
    nombre: new FormControl('',Validators.required),
    cargo: new FormControl('',Validators.required),
    telefono: new FormControl(''),
    correo: new FormControl('',Validators.email),
  })

  nombreSede = new FormControl('');

  listaJornadas = []

  listaDeirectivos = []
  dataSourcesDirectivos = new MatTableDataSource<[]>();
  displayedColumnsDirectivos: string[] = ['nombre', 'cargo', 'telefono', 'correo'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  listaEdificios = []
  dataSourcesEdificios = new MatTableDataSource<[]>();
  displayedColumnsEdificios: string[] = ['numero', 'pisos', 'tiposSalon'];
  @ViewChild('paginatorEdificios', {static: true}) paginatorEdificios: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSourcesDirectivos.paginator = this.paginator;
  }

  agregarDirectivo(){
    this.listaDeirectivos.unshift(this.formDatosNivelDirectivo.value)
    this.dataSourcesDirectivos.data = this.listaDeirectivos;
    this.formIdentificacionSede.get('datosNivelDirectivo').setValue(this.listaDeirectivos);
    this.formDatosNivelDirectivo.reset()
  }

  agregarArchivo($event){
    /*const archivo = $event.target.value;
    console.log(this.formArchivosSoporte.value)*/
    this.formIdentificacionSede.get("archivosSoporte").setValue(this.formArchivosSoporte.value)
  }

  agregarEdificio(): void {
    const dialogRef = this.dialog.open(ModalAgregarEdificioComponent, {
      
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.listaEdificios.unshift(data);
        this.dataSourcesEdificios.data = this.listaEdificios;
        this.formIdentificacionSede.get("edificios").setValue(this.listaEdificios);
      }
    })
  }

  actualizarJornada($event: MatCheckboxChange){
    const jornada = $event.source._elementRef.nativeElement.innerText;
    if ($event.checked) {
      this.listaJornadas.unshift(jornada)
    }else{
      this.listaJornadas = this.listaJornadas.filter(jor => {return jor != jornada})
    }
    this.formIdentificacionSede.get("jornadas").setValue(this.listaJornadas)
  }

  guardarIdentificacionSede(){
    console.log(this.formIdentificacionSede.value)
    this.formIdentificacionSede.reset();
  }
}
