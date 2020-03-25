import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Res } from "src/app/models/res.model";
import { Sede } from "src/app/models/sede.model";
import { SedeService } from "src/app/services/conocimiento-institucional/sede.service";
import { InstitucionService } from "src/app/services/conocimiento-institucional/institucion.service";
import { Institucion } from "src/app/models/institucion.model";

let ID_INSTITUCION: string;

@Component({
  selector: "app-identificacion-institucion",
  templateUrl: "./identificacion-institucion.component.html",
  styleUrls: ["./identificacion-institucion.component.css"]
})
export class IdentificacionInstitucionComponent implements OnInit {
  formIdentificacionInstitucional = new FormGroup({
    nombre: new FormControl("", Validators.required),
    codDane: new FormControl("", Validators.required),
    rector: new FormControl("", Validators.required),
    coordinador: new FormControl("", Validators.required),
    liderPRAE: new FormControl(""),
    liderLogistica: new FormControl(""),
    liderConsejoAcademico: new FormControl(""),
    liderBrigada: new FormControl(""),
    liderPadres: new FormControl(""),
    liderEstudiantes: new FormControl(""),
    representanteOrganismosSocorro: new FormControl(""),
    mision: new FormControl(""),
    vision: new FormControl(""),
    objetivos: new FormControl(""),
    valores: new FormControl("")
  });

  formSede = new FormGroup({
    nombre: new FormControl("", Validators.required)
  });

  listaSedes: Sede[] = [];

  constructor(
    private _sedeService: SedeService,
    private _institucionService: InstitucionService
  ) {}

  ngOnInit() {
    this._institucionService
      .obtenerInstitucion()
      .subscribe((institucion: Institucion) => {
        if (institucion._id) {
          ID_INSTITUCION = institucion._id;
          this._sedeService
            .obtenerSedes(institucion._id)
            .subscribe((sedes: Sede[]) => {
              this.listaSedes = sedes;
            });
          const form = this.formIdentificacionInstitucional.value;
          for (let key in form) {
            this.formIdentificacionInstitucional
              .get(key)
              .setValue(institucion[key]);
          }
        }
      });
  }

  agregarSede() {
    const data = Object.assign(this.formSede.value, {
      idSchool: ID_INSTITUCION
    });
    this._sedeService.guardarSede(data).subscribe((res: Res) => {
      console.log(res);
      const sede = Object.assign(this.formSede.value, { id: res.data });
      this.listaSedes.push(sede);
      this.formSede.reset();
    });
  }

  eliminarSede(sede: Sede) {
    this._sedeService.eliminarSede(sede).subscribe((res: Res) => {
      console.log(res);
      this.listaSedes = this.listaSedes.filter(element => {
        return element != sede;
      });
    });
  }

  actualizarIdentificacionInstitucion() {
    const institucion = <Institucion>this.formIdentificacionInstitucional.value;
    this._institucionService
      .actualizarInstitucion(ID_INSTITUCION, institucion)
      .subscribe((res: Res) => {
        console.log(res);
      });
  }
}
