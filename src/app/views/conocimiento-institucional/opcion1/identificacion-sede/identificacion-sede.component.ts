import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  MatTableDataSource,
  MatPaginator,
  MatDialog,
  MatCheckboxChange
} from "@angular/material";
import { ModalAgregarEdificioComponent } from "./modal-agregar-edificio/modal-agregar-edificio.component";
import { SedeService } from "src/app/services/conocimiento-institucional/sede.service";
import { Sede } from "src/app/models/sede.model";
import { Res } from "src/app/models/res.model";

@Component({
  selector: "app-identificacion-sede",
  templateUrl: "./identificacion-sede.component.html",
  styleUrls: ["./identificacion-sede.component.css"]
})
export class IdentificacionSedeComponent implements OnInit {
  //backFormValues = {};

  listaSedes: Sede[] = [];
  private idSedeSeleccionada: string;

  formIdentificacionSede = new FormGroup({
    codDane: new FormControl("", Validators.required),
    coordinador: new FormControl("", Validators.required),
    cantEstudiantes: new FormControl("", Validators.required),
    cantDocentes: new FormControl("", Validators.required),
    datosNivelDirectivo: new FormControl(""),
    municipio: new FormControl("", Validators.required),
    barrio: new FormControl("", Validators.required),
    direccion: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    correo: new FormControl("", Validators.required),
    limiteNorte: new FormControl(""),
    limiteEste: new FormControl(""),
    limiteOeste: new FormControl(""),
    limiteSur: new FormControl(""),
    anioConstruccion: new FormControl(""),
    areaConstruida: new FormControl(""),
    areaLibre: new FormControl(""),
    archivosSoporte: new FormControl(""),
    edificios: new FormControl(""),
    jornadas: new FormControl("")
  });

  formArchivosSoporte = new FormGroup({
    licenciaConstruccion: new FormControl(""),
    conceptoUsoConstruccion: new FormControl(""),
    conceptoHigienicoSanitario: new FormControl(""),
    permisoAmbiental: new FormControl(""),
    conceptoBomberos: new FormControl("")
  });

  formDatosNivelDirectivo = new FormGroup({
    nombre: new FormControl("", Validators.required),
    cargo: new FormControl("", Validators.required),
    telefono: new FormControl(""),
    correo: new FormControl("", Validators.email)
  });

  nombreSede = new FormControl("");

  listaJornadas = [];

  listaDirectivos = [];
  dataSourcesDirectivos = new MatTableDataSource<[]>();
  displayedColumnsDirectivos: string[] = [
    "nombre",
    "cargo",
    "telefono",
    "correo"
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  listaEdificios = [];
  dataSourcesEdificios = new MatTableDataSource<[]>();
  displayedColumnsEdificios: string[] = ["numero", "pisos", "tiposSalon"];
  @ViewChild("paginatorEdificios", { static: true })
  paginatorEdificios: MatPaginator;

  constructor(public dialog: MatDialog, private _sedeService: SedeService) {}

  ngOnInit() {
    this.dataSourcesDirectivos.paginator = this.paginator;
    this._sedeService.obtenerSedes().subscribe((sedes: Sede[]) => {
      this.listaSedes = sedes;
      if (this.listaSedes.length > 0) {
        this.seleccionarSede(this.listaSedes[0]);
        this.idSedeSeleccionada = this.listaSedes[0]._id;
        this.nombreSede.setValue(this.listaSedes[0]._id);
      }
    });

    //this.onFormChange()
  }

  /*onFormChange(): void{
    
    this.formIdentificacionSede.valueChanges.subscribe( value =>{
      for(let key in value){
        console.log(this.backFormValues[key] == value[key])
      }
      
    })
  }*/

  seleccionarSede(sede: Sede) {
    if (sede) {
      console.log(sede);
      this.idSedeSeleccionada = sede._id;
      const form = this.formIdentificacionSede.value;
      for (let key in form) {
        this.formIdentificacionSede.get(key).setValue(sede[key]);
        //this.backFormValues[key] = sede[key];
      }
      this.listaJornadas = sede.jornadas;
      this.listaDirectivos = sede.datosNivelDirectivo;
      this.dataSourcesDirectivos.data = this.listaDirectivos;
      this.listaEdificios = sede.edificios;
      this.dataSourcesEdificios.data = this.listaEdificios;
    }
  }

  agregarDirectivo() {
    this.listaDirectivos.unshift(this.formDatosNivelDirectivo.value);
    this.dataSourcesDirectivos.data = this.listaDirectivos;
    this.formIdentificacionSede
      .get("datosNivelDirectivo")
      .setValue(this.listaDirectivos);
    this.formDatosNivelDirectivo.reset();
  }

  agregarArchivo($event) {
    /*const archivo = $event.target.value;
    console.log(this.formArchivosSoporte.value)*/
    this.formIdentificacionSede
      .get("archivosSoporte")
      .setValue(this.formArchivosSoporte.value);
  }

  agregarEdificio(): void {
    const dialogRef = this.dialog.open(ModalAgregarEdificioComponent, {});

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.listaEdificios.unshift(data);
        this.dataSourcesEdificios.data = this.listaEdificios;
        this.formIdentificacionSede
          .get("edificios")
          .setValue(this.listaEdificios);
      }
    });
  }

  actualizarJornada($event: MatCheckboxChange) {
    const jornada = $event.source._elementRef.nativeElement.innerText;
    if ($event.checked) {
      this.listaJornadas.unshift(jornada);
    } else {
      this.listaJornadas = this.listaJornadas.filter(jor => {
        return jor != jornada;
      });
    }
    this.formIdentificacionSede.get("jornadas").setValue(this.listaJornadas);
  }

  actualizarIdentificacionSede() {
    const sede = <Sede>this.formIdentificacionSede.value;
    this._sedeService
      .actualizarSede(this.idSedeSeleccionada, sede)
      .subscribe((res: Res) => {
        console.log(res);
      });
  }
}
