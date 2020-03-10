import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-identificacion-institucion',
  templateUrl: './identificacion-institucion.component.html',
  styleUrls: ['./identificacion-institucion.component.css']
})
export class IdentificacionInstitucionComponent implements OnInit {

  formIdentificacionInstitucional = new FormGroup({
    nombre : new FormControl('', Validators.required),
    codDane : new FormControl('', Validators.required),
    rector : new FormControl('', Validators.required),
    coordinador : new FormControl('', Validators.required),
    liderPRAE : new FormControl(''),
    liderLogistica : new FormControl(''),
    liderConsejoAcademico : new FormControl(''),
    liderBrigada : new FormControl(''),
    liderPadres : new FormControl(''),
    liderEstudiantes : new FormControl(''),
    representanteOrganismosSocorro : new FormControl(''),
    mision : new FormControl(''),
    vision : new FormControl(''),
    objetivos : new FormControl(''),
    valores : new FormControl(''),
    sedes : new FormControl('', Validators.required),
  })

  formSede = new FormGroup({
    nombre: new FormControl('',Validators.required)
  })

  listaSedes = []

  constructor() { }

  ngOnInit() {
  }

  agregarSede(){
    this.listaSedes.push(this.formSede.value)
    this.formIdentificacionInstitucional.get('sedes').setValue(this.listaSedes)
    this.formSede.reset()
  }

  eliminarSede(sede){
    this.listaSedes = this.listaSedes.filter( element => {return element != sede});
    this.formIdentificacionInstitucional.get('sedes').setValue(this.listaSedes)
  }

  guardarIdentificacionInstitucion(){
    console.log(this.formIdentificacionInstitucional.value)
  }

}
