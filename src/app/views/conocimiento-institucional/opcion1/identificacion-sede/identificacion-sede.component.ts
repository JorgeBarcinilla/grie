import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
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
import { ChangeSedeService } from "src/app/services/gestion-riesgo/change-sede.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { NotificacionService } from "src/app/services/notification/notification.service";

@Component({
  selector: "app-identificacion-sede",
  templateUrl: "./identificacion-sede.component.html",
  styleUrls: ["./identificacion-sede.component.css"]
})
export class IdentificacionSedeComponent implements OnInit, OnDestroy {
  //backFormValues = {};

  listaSedes: Sede[] = [];
  idSedeSeleccionada: string;

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
    correo: new FormControl("", Validators.email),
    limiteNorte: new FormControl(""),
    limiteEste: new FormControl(""),
    limiteOeste: new FormControl(""),
    limiteSur: new FormControl(""),
    anioConstruccion: new FormControl(""),
    areaConstruida: new FormControl(""),
    areaLibre: new FormControl(""),
    archivosSoporte: new FormControl(""),
    edificios: new FormControl(""),
    jornadas: new FormControl({
      maniana: false,
      tarde: false,
      noche: false,
      unica: false
    })
  });

  formJornadas = new FormGroup({
    maniana: new FormControl(false),
    unica: new FormControl(false),
    tarde: new FormControl(false),
    noche: new FormControl(false)
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

  subcribeSedes: Subscription;
  subcribeAddEdificio: Subscription;
  subcribeActualizarSedes: Subscription;

  constructor(
    public dialog: MatDialog,
    private _sedeService: SedeService,
    private _changeSedeService: ChangeSedeService,
    private route: Router,
    private _notificacionService: NotificacionService
  ) {}

  ngOnInit() {
    this.dataSourcesDirectivos.paginator = this.paginator;
    this.subcribeSedes = this._sedeService
      .obtenerSedes()
      .subscribe((sedes: Sede[]) => {
        this.listaSedes = sedes;
        if (this.listaSedes.length > 0) {
          this.seleccionarSede(this.listaSedes[0]);
          this.idSedeSeleccionada = this.listaSedes[0]._id;
          this.nombreSede.setValue(this.listaSedes[0]._id);
        }
      });

    //this.onFormChange()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subcribeSedes.unsubscribe();
    if (this.subcribeActualizarSedes) {
      this.subcribeActualizarSedes.unsubscribe();
    }
    if (this.subcribeAddEdificio) {
      this.subcribeAddEdificio.unsubscribe();
    }
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
      this.idSedeSeleccionada = sede._id;
      const form = this.formIdentificacionSede.value;
      for (let key in form) {
        this.formIdentificacionSede.get(key).setValue(sede[key]);
        //this.backFormValues[key] = sede[key];
      }
      for (let key in this.formJornadas.value) {
        this.formJornadas.get(key).setValue(sede.jornadas[key]);
        //this.backFormValues[key] = sede[key];
      }
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

    this.subcribeAddEdificio = dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.listaEdificios.unshift(data);
        this.dataSourcesEdificios.data = this.listaEdificios;
        this.formIdentificacionSede
          .get("edificios")
          .setValue(this.listaEdificios);
      }
    });
  }

  actualizarJornada($event: MatCheckboxChange, element) {
    element.setValue($event.checked);
    /*const jornada = $event.source._elementRef.nativeElement.innerText;
    if ($event.checked) {
      this.listaJornadas.unshift(jornada);
    } else {
      this.listaJornadas = this.listaJornadas.filter(jor => {
        return jor != jornada;
      });
    }
    this.formIdentificacionSede.get("jornadas").setValue(this.listaJornadas);*/
  }

  actualizarIdentificacionSede() {
    const sede = <Sede>this.formIdentificacionSede.value;
    sede.jornadas = this.formJornadas.value;
    this.subcribeActualizarSedes = this._sedeService
      .actualizarSede(this.idSedeSeleccionada, sede)
      .subscribe((res: Res) => {
        this._notificacionService.mostrarNotificacion(res.message, "info");
      });
  }

  gestionRiesgoById(): void {
    this._changeSedeService.insertarSede(this.idSedeSeleccionada);
    this.route.navigate(["/gestionRiesgo/lineamientosPolitica"]);
  }
}
